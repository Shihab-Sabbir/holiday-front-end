"use client"
import { useRefreshTokenMutation } from '@/redux/api/auth/authApi';
import { selectAuth, setAuthData } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';

export default function useAuthcheck() {
  const [getUserByRefreshToken] = useRefreshTokenMutation();
  const { user, accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!user || !accessToken) {
      getUserByRefreshToken().unwrap()
      .then(data => {
        if (data?.data) {
          dispatch(setAuthData(data.data));
        }
      })
      .catch(error => console.error(error))
      .finally(() => setAuthChecked(true))
    } else {
      setAuthChecked(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authChecked };
}