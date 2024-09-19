"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import "@styles/globals.css"
import background from "@styles/food.jpg"
import Hero from "@components/Hero"
import ContactForm from "@components/ContactForm";
import MenuCollection from "@components/MenuCollection"
import Menu from "@components/Menu";
import Reviews from "@components/Reviews"

// home component is NextJS equivalent of ReactJS app component

export default function Home() {

  return (
    <div>
      <section className="w-full flex-center flex-col">
        <Hero></Hero>
      </section>
        <section>
        <MenuCollection></MenuCollection>
      </section>
      <section>
      <ContactForm></ContactForm>
      </section>
    </div>
  );
}
