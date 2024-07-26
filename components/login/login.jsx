"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
// import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/utils/auth-service";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";
import { useDispatch } from "react-redux";
import { login } from "@/lib/slices/auth-slice";
import { useToast } from "../ui/use-toast";

const Login = ({ onTabChange }) => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loaderSignIn, setShowLoaderSignIn] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [hasFilled, setFilled] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "password") {

      if (value.length < 8) {
        setPasswordError("Password must be at least 8 characters long.");
      } else if (!/\d/.test(value)) {
        setPasswordError("Password must contain at least one number.");
      } else if (!/[A-Z]/.test(value)) {
        setPasswordError("Password must contain at least one uppercase letter.");
      } else if (!/[a-z]/.test(value)) {
        setPasswordError("Password must contain at least one lowercase letter.");
      } else {
        setPasswordError("");
      }
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
    setFilled(data.email !== "" && data.password !== "");

  };

  const handleSignIn = async () => {

    setShowLoaderSignIn(true);

    try {

      const session = await signIn(data);

      if (session && session.AccessToken) {

        sessionStorage.setItem("accessToken", session.AccessToken);

        if (sessionStorage.getItem("accessToken")) {

          dispatch(login());
          localStorage.setItem("email", data.email);
          router.push("/");
        
        } else {

          // toast.error("Session token was not set properly.");
          toast({ variant: 'destructive', title: "Session token was not set properly." })

        }

      } else {

        // toast.error("SignIn session or AccessToken is undefined.");
        toast({ variant: 'destructive', title: "SignIn session or AccessToken is undefined." })

      }

    } catch (error) {

      // toast.error(`Error: ${error.message}`);
      toast({ variant: 'destructive', title: 'Something went wrong!', description: `Error: ${error.message}` })

    } finally {

      setShowLoaderSignIn(false);

    }

  };

  return (
    <div>
      <Card className="h-[512px] flex flex-col justify-between">
        <div>
          <CardHeader>
            <CardTitle className="text-center">Welcome</CardTitle>
            <CardDescription className="text-center">
              Sign In to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder={"johndoe@gmail.com"}
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  className=""
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              {passwordError && (
                <ErrorComponent>{passwordError}</ErrorComponent>
              )}
            </div>
          </CardContent>
        </div>
        <CardFooter className="flex-col">
          <Button
            className={`w-full ${
              !hasFilled || passwordError ? "opacity-50" : "hover:opacity-50"
            }`}
            onClick={handleSignIn}
            disabled={!hasFilled || passwordError}
          >
            {loaderSignIn ? <Loading color="#D1FFB5" /> : <div>Sign In</div>}
          </Button>
          <div className="mt-4">
            Need an account?{" "}
            <span
              className="text-purple-500 cursor-pointer"
              onClick={() => onTabChange("signup")}
            >
              Signup
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );

};

export default Login;