import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/card";

import LoginForm from "@/components/auth/LoginForm";

const Login = (props: any) => {
  return (
    <Card className="m-auto min-w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm setIsAuthenticated={props.setIsAuthenticated} />
      </CardContent>
    </Card>
  );
};

export default Login;
