"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Auth() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const isActivated = searchParams.get("isActivated");
  if (token) {
    localStorage.setItem("jwt", token);
    if (isActivated === "false") {
      router.push("/update");
    } else {
      router.push("/contract");
    }
  }

  const [isAuthLoading, setIsAuthLoading] = useState(true);
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="absolute bottom-0 right-0 p-4">
        <a href="https://github.com/DarthBenro008/walletban">
          <Avatar className="mt-2 mr-2">
            <AvatarImage src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </a>
      </div>
      <div>
        <Card className="h-auto">
          <CardHeader>
            <CardTitle>Holdup, redirecting you to Dashboard......</CardTitle>
            <CardDescription>Where all the good stuff happens</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <footer className="absolute bottom-0 w-full text-center py-4">
        <div className="mx-auto">
          <Label className="text-sm text-gray-400">
            Developed with Kofi by @DarthBenro008
          </Label>
        </div>
      </footer>
    </main>
  );
}
