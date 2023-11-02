"use client";
import AppLoader from "@/components/loaders/AppLoader";
import { useRefreshTokenQuery } from "@/redux/api/auth/authApi"

export default function AuthLoader({children}:{children:React.ReactNode}) {
    const {isLoading} = useRefreshTokenQuery();
    if (isLoading) return <AppLoader/> 
  return children;
}
