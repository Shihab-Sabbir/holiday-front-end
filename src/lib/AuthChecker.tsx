"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/services/auth/authSlice";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

export default function AuthChecker({
  children,
  userRole,
}: {
  children: ReactNode;
  userRole: string[];
}) {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (auth?.user?.role) {
      setRole(auth?.user?.role);
    }
    setLoading(false); // Set loading to false once the role is obtained.
  }, [auth]);

  const router = useRouter();
  const dispatch = useAppDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (role && userRole.includes(role)) {
    return <div>{children}</div>;
  } else {
    dispatch(logout());
    router.replace('/auth/signin');
    return null;
  }
}
