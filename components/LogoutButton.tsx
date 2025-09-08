"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <Button onClick={handleLogout} variant="destructive" size="lg">
      Logout
    </Button>
  );
};

export default LogoutButton;