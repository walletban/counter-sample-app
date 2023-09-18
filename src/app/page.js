import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";

export default function Home() {
  const url = "http://localhost:3000/auth";
  const clientId = "MzZFdbG8jYFE433ytGcy";
  const clientSecret = "lccCUeGpxX";
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
            <CardTitle>Welcome to Walletban Sample App</CardTitle>
            <CardDescription>
              This is a sample app, powered by Walletban! Go Walletless!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href={`https://backend.walletban.xyz/auth/google/login?redirect=${url}&clientId=${clientId}&clientSecret=${clientSecret}`}
            >
              <Button>Sign In with Google</Button>
            </Link>
          </CardContent>
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
