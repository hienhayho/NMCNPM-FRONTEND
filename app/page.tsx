import Image from "next/image";
import React from "react";
import LoginPage from "./Register/page";
import RegisterPage from "./Register/RegisterPage";
import Nav from "../components/Nav";
import "./page.css";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Sample from "../components/Sample";

function Page() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className="px-12 py-6 md:col-span-4 bg-blue-50">
        <Buttons />
        <Header />
        <Sample />
      </main>
    </div>
  );
}

export default Page;
