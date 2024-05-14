"use client";
import React, { useEffect } from "react";
import LoginPage from "./login/page";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  router.push('/sale')

  return <LoginPage />;
}