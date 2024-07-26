"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { confirmSignUp } from "@/utils/auth-service";
import { toast } from "react-toastify";
import Loading from "@/components/Loading";

const ConfirmUser = () => {

  const [data, setData] = useState({
    email: typeof localStorage !== "undefined" ? localStorage.getItem("email") : "",
    confirm_code: "",
  });
  
  const [loaderConfirm, setLoaderConfirm] = useState(false);
  const [hasFilled2, setFilled2] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setFilled2(data.email !== "" && data.confirm_code !== "");
  };

  const handleConfirm = async () => {

    setLoaderConfirm(true);
    try {
      await confirmSignUp(data);
      toast.success("Account confirmed successfully!");
      router.push("/auth?tab=login");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoaderConfirm(false);
    }

  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">

      <Card className="w-[400px] h-[512px] flex flex-col justify-between">
        <div>

          <CardHeader>
            <CardTitle className="text-center">Confirm Your Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirm_code">Confirmation Code</Label>
              <Input
                id="confirm_code"
                type="number"
                name="confirm_code"
                value={data.confirm_code}
                onChange={handleChange}
                required
              />
            </div>
          </CardContent>
        </div>

        <CardFooter className="flex-col">

          <Button
            className={`w-full ${
              !hasFilled2 ? "opacity-50" : "hover:opacity-50"
            }`}
            disabled={!hasFilled2}
            onClick={handleConfirm}
          >
            {loaderConfirm ? (
              <Loading color="#D1FFB5" />
            ) : (
              <div>Confirm Account</div>
            )}
          </Button>

        </CardFooter>

      </Card>

    </div>
  );
};

export default ConfirmUser;