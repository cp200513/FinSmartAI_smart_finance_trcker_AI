import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-md">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/new_logo.png"}
            alt="CP logo"
            height={60}
            width={200}
            className="h-12 w-auto  object-contain
            rounded-md shadow-lg"
          />
        </Link>

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button varient="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};

export default Header;
