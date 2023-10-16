'use client'

import Logo from "@/app/components/shared/Logo";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function SideBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full min-h-screen shadow px-2 py-[20px]">
      <div className="flex flex-col items-center gap-3 border-b pb-2">
        <Logo color={"var(--color-primary) !important"} />
        <p>Admin Panel</p>
      </div>
      <div className="p-[20px] flex flex-col gap-[10px]">
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/admin/create-service")}
          sx={{
            backgroundColor: pathname === "/admin/create-service" ? "var(--color-primary) !important" : "",
          }}
        >
          Create Service
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/admin/edit-service")}
          sx={{
            backgroundColor: pathname === "/admin/edit-service" ? "var(--color-primary) !important" : "",
          }}
        >
          Edit Service
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/admin/edit-content")}
          sx={{
            backgroundColor: pathname === "/admin/edit-content" ? "var(--color-primary) !important" : "",
          }}
        >
          Edit Content
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/admin/view-services")}
          sx={{
            backgroundColor: pathname === "/admin/view-services" ? "var(--color-primary) !important" : "",
          }}
        >
          View Services
        </Button>
      </div>
    </div>
  );
}
