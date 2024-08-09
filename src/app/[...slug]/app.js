"use client";
import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../components/app"), {
  ssr: false,
});

export const App = () => {
  return <AppComponent />;
};
