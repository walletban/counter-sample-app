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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export default function Contract() {
  const router = useRouter();
  const { toast } = useToast();
  const url = "http://localhost:8000";
  const [pass, setPass] = useState("");
  const [counter, setCounter] = useState("nil");
  const onChange = (event) => {
    setPass(event.target.value);
  };

  const onSubmit = () => {
    let body = {
      contract_id: "CBEZPP2YV3SBZDI5EBCRPK7CED7OBVXYB3EC37AS4XUVRQVOFVTBXKOR",
      contract_function: "increment",
      secret_key: pass,
      user_id: localStorage.getItem("jwt"),
      contract_arguments: [],
    };
    const resp = axios.post(`${url}/v0/invoke`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    resp
      .then((res) => {
        toast({
          title: "Succcess!",
          description: "Transaction Complete",
        });
        setCounter(res.data.data.data.InvokeContractResponse.result);
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Invalid password",
        });
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
            <CardTitle>
              This is a Counter from a soroban smart contract
            </CardTitle>
            <CardDescription>
              Press on the increment button to invoke the smart contract!
            </CardDescription>
            <CardContent>
              <div className="mt-5">
                <Label className="mr-12">
                  You can sign a smart contract transaction with just a click!
                </Label>
                <Dialog>
                  <DialogTrigger>Open</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Please Enter Your Password!</DialogTitle>
                      <DialogDescription>
                        This will allow you to authorize your web3 wallet to
                        sign this transaction
                      </DialogDescription>
                    </DialogHeader>
                    <Textarea value={pass} onChange={onChange} />
                    <Button onClick={() => onSubmit()}>
                      {" "}
                      Sign Transaction{" "}
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
            <CardContent>The current counter is: {counter}</CardContent>
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
