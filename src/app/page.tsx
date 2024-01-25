"use client";
import React, { useEffect } from "react";
import LoginPage from "./login/page";

export default function Home() {
  useEffect(() => {
    window.history.pushState({}, "", "/login");
  }, []);

  return <LoginPage />;
}