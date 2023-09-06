'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useContext } from "react";
import { AppContext } from "@/components/app-context";

export default function IndexPage() {
  const { playMusic, playSFX } = useContext(AppContext);
  return (
  <section className= "flex items-center h-screen">
    <Card className="mx-auto w-60">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription>I'm glad you made it.</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3">
        <Link href="/welcome"><Button>Continue</Button></Link>
        <Button onClick={() => playMusic('dan.mp3')}>Play</Button>
        <Button onClick={() => playSFX('boom.mp3')}>Play</Button>
      </CardContent>
    </Card>

  </section>
)}
