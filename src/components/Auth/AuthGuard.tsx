"use client";
import useAuthcheck from '@/hooks/checkAuth';
import { selectAuth } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

interface pageProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: pageProps) {
  const { user, accessToken } = useAppSelector(selectAuth);
  const { authChecked } = useAuthcheck();
  const router = useRouter()

  if (!authChecked  && (!user || !accessToken)) {
    return <p>Loading...</p>;
  }

  if (authChecked && (!user || !accessToken)) {
    router.push("/");
  }

//   if (role && !(Object.values(ENUM_USER_ROLE) as string[]).includes(role)) {
//     return <ErrorPage errorType="NOT_FOUND" />;
//   }

//   if ((role && role !== user?.role) || !hasPermission) {
//     return <ErrorPage errorType="FORBIDDEN" />;
//   }

  return children;
}