"use client";

import { logout, selectAuth } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

export default function AuthChecker({
  children,
  userRole,
}: {
  children: ReactNode;
  userRole: string[];
}) {
  const {user} = useAppSelector(selectAuth);
  const router = useRouter();
  const dispatch = useAppDispatch();

  if (user?.role && userRole.includes(user?.role)) {
    return <div>{children}</div>;
  } else {
    dispatch(logout());
    router.replace('/auth/signin');
    return null;
  }
}
