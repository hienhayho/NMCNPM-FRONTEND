import Image from "next/image";
import React from "react";
import LoginPage from "./(auth)/login/LoginPage";
import RegisterPage from "./(auth)/register/RegisterPage";
import Nav from "../components/Nav/Nav";
import "./page.css";
import Buttons from "../components/Buttons/Buttons";
import Header from "../components/Header/Header";
import Sample from "../components/Sample/Sample";

function Page() {
  return (
    <div className="flex">
      <Nav />
      {/* <main className="flex-1  px-12 py-6 md:col-span-4 bg-blue-500">
        <Buttons />
        <Header />
        <Sample />
      </main> */}
      <main className="flex-1 px-12 py-6 md:col-span-4 bg-blue-50">
        <Buttons />
        <Header />
        <Sample />
      </main>
    </div>
  );
}

export default Page;
