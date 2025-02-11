"use client";

import { useDispatch } from "react-redux";
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

import { apiLogin } from "@/api/auth.api";
import { SET_TOKENS } from "@/store/slides/authSlice";

const LoginForm = () => {
  const formSchema = z.object({
    username: z.string().min(4).max(50),
    password: z.string().min(6).max(100),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const [status, response] = await apiLogin(data);
    if (status !== 200) {
      form.setError("username", {
        type: "manual",
        message: response.error,
      });
      return;
    }

    const { accessToken, user } = response;
    dispatch(SET_TOKENS({ accessToken, user }));
    navigate("/");
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
              <div className="flex items-center">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Link to="#" className="ml-auto text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/auth/register" className="underline">
            Register
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
