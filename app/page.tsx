"use client";

import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function Home() {
  return (
    <main className={cn("bg-background")}>
      <Hero />
      <GetApp />
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 w-full px-6 md:px-8 lg:px-16 xl:px-64 my-24">
        <motion.div className="space-y-4 text-foreground">
          <motion.h1
            variants={fadeIn({ direction: "down", duration: 0.5 })}
            initial="hidden"
            animate="show"
            className="font-bold text-4xl text-center"
          >
            Free for Everyone
          </motion.h1>
          <motion.p
            variants={fadeIn({ direction: "up", duration: 0.5 })}
            initial="hidden"
            animate="show"
            className="text-justify"
          >
            Express yourself without words. Use emojis and GIFs or share
            everyday moments from pictures. Record a voice message for a quick
            hello or a longer story.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn({ duration: 3 })}
          initial="hidden"
          animate="show"
          className="w-full max-h-[60vh]"
        >
          <Image
            src="/assets/home.png"
            alt="world"
            width={1200}
            height={800}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </section>
    </main>
  );
}
