"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { CardComponent } from "@/components/Card/CardComponent";
import { GreetingComponent } from "@/components/Greeting/GreetingComponent";
import { CardsComponent } from "@/components/Cards/CardsComponent";
import { PersonComponent } from "@/components/Person/PersonComponent";
import { ProfileImage } from "@/components/ProfileImage/ProfileImage";
import { Button } from "@/components/Button/ButtonComponent";
import { DangerButton } from "@/components/DangerButton/DangerButton";
import { TextInput } from "@/components/TextInput/TextInput";

export default function Home() {
  return (
    <div>
      <GreetingComponent />
      <CardComponent />
      <PersonComponent />
      <CardsComponent />
      <ProfileImage />
      <Button text="Primary Button" appearance="btn btn-primary" />
      <DangerButton />
      <TextInput />
    </div>
  );
}
