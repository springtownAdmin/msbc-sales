"use client";

import Login from "@/components/login/login";
import Signup from "@/components/signup/signup";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function Auth() {

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (newTab) => {

    setActiveTab(newTab);
    router.push(`/auth?tab=${newTab}`, undefined, { shallow: true });

  };

  useEffect(() => {

    if (router.isReady) {

      const { tab } = router.query;

      if (tab) {

        setActiveTab(tab);

      }
    }

  }, [router.isReady, router.query]);

  return (

    <div className="container w-full h-[100vh] flex justify-center items-center">

      <div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-[400px]">

          <TabsList className="grid w-full grid-cols-2">

            <TabsTrigger value="login" onClick={() => setActiveTab("login")}>
              Login
            </TabsTrigger>

            <TabsTrigger value="signup" onClick={() => setActiveTab("signup")}>
              Sign Up
            </TabsTrigger>

          </TabsList>

          <TabsContent value="signup" className="w-[100%] h-[600px]">
            <Signup onTabChange={handleTabChange} />
          </TabsContent>

          <TabsContent value="login" className="w-[100%] h-[600px]">
            <Login onTabChange={handleTabChange} />
          </TabsContent>

        </Tabs>
      </div>

    </div>

  );
}