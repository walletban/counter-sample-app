"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Update() {
  const router = useRouter();
  const url = "https://backend.walletban.xyz";
  const [pass, setPass] = useState("");
  const onChange = (event) => {
    setPass(event.target.value);
  };

  const onSubmit = () => {
    let body = {
      token: localStorage.getItem("jwt"),
      password: pass,
    };
    const resp = axios.post(`${url}/v0/consumer`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    resp
      .then((data) => {
        router.push("/contract");
      })
      .catch((err) => {
        //todo: route back to home
      });
  };

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
            <CardTitle className="ml-4">
              Lets set a password for you web3 wallet!
            </CardTitle>
            <CardDescription className="ml-4 mr-4">
              Your web3 wallet is encrypted with this password, so choose
              wisely!
            </CardDescription>
            <CardContent>
              <Textarea value={pass} onChange={onChange} className="mt-2" />
            </CardContent>
            <CardContent>
              <Button onClick={() => onSubmit()}> Submit </Button>
            </CardContent>
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
