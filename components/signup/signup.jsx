"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { signUp } from "@/utils/auth-service";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";
import { useToast } from "../ui/use-toast";

const Signup = ({ onTabChange }) => {

  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loaderSignUp, setShowLoaderSignUp] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasFilled, setFilled] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2((show) => !show);
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

    if (name === "confirm_password") {

      setConfirmPasswordError(data.password !== value ? "Passwords do not match." : "");

    }

    setData((prevData) => ({ ...prevData, [name]: value }));
    setFilled(data.email !== "" && data.password !== "" && data.confirm_password !== "");

  };

  const handleSignUp = async () => {

    setShowLoaderSignUp(true);

    try {

      await signUp(data);

      if (typeof localStorage !== "undefined") {

        localStorage.setItem("email", data.email);

      }

      router.push(`/confirm`);

    } catch (error) {

      // toast.error(`Error: ${error}`);
      toast({ variant: 'destructive', title: 'Something went wrong!', description: `Error: ${error}` });

    } finally {

      setShowLoaderSignUp(false);

    }

  };

  return (
    <Card>

      <CardHeader>
        <CardTitle className="text-center">Welcome</CardTitle>
        <CardDescription className="text-center">
          Signup to create your account.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 mb-16">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Johndoe@gmail.com"
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </span>
          </div>
          {passwordError && <ErrorComponent>{passwordError}</ErrorComponent>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirm_password"
              type={showPassword2 ? "text" : "password"}
              name="confirm_password"
              value={data.confirm_password}
              onChange={handleChange}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={handleClickShowPassword2}
            >
              {showPassword2 ? <FaEyeSlash /> : <FaRegEye />}
            </span>
          </div>
          {confirmPasswordError && (
            <ErrorComponent>{confirmPasswordError}</ErrorComponent>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex-col">
        <Button
          className={`w-full ${!hasFilled ? "opacity-50" : "hover:opacity-50"}`}
          disabled={!hasFilled || passwordError || confirmPasswordError}
          onClick={handleSignUp}
        >
          {loaderSignUp ? <Loading color="#d1ffb5" /> : <div>Sign Up</div>}
        </Button>
        <hr />
        <div className="mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-500 cursor-pointer"
            onClick={() => onTabChange("login")}
          >
            Sign In
          </span>
        </div>
      </CardFooter>

    </Card>
  );
};

export default Signup;