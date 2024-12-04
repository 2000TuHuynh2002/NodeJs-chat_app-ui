"use client";

import { useNavigate } from "react-router";

import { Button } from "@/components/ui-shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui-shadcn/form";
import { Input } from "@/components/ui-shadcn/input";
import { Link } from "react-router";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const formSchema = z.object({
    email: z.string().min(6).max(50),
    username: z.string().min(6).max(50),
    password: z.string().min(8).max(100),
    password_confirmation: z.string().min(8).max(100),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    navigate("/auth/login");
  };

  return (
    <Form {...form}>
      <form
        method="POST"
        className="grid gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Input type="text" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password_confirmation">
                Confirm password
              </FormLabel>
              <FormControl>
                <Input type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Register
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Already had an account?{" "}
        <Link to="/auth/login" className="underline">
          Login
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
