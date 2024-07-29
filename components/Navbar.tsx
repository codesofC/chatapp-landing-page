"use client";

import { Download, Menu, Moon, MoonIcon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const menu = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Blog",
    link: "/",
  },
  {
    label: "Help",
    link: "/",
  },
  {
    label: "SnapTalk Web",
    link: "https://chat-app-phi-gold.vercel.app",
  },
];
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="relative w-full flex items-center justify-between px-4 md:px-12 py-2 border-b bg-background"
    >
      <Link href="/" className="flex items-center gap-1">
        <div className="w-8">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="w-full object-contain"
          />
        </div>
        <h1 className="text-xl text-primary font-bold"> SnapTalk </h1>
      </Link>

      <Button
        variant={"ghost"}
        className="flex items-center md:hidden text-foreground"
        onClick={() => setOpenMenu(true)}
      >
        <Menu />
      </Button>

      <div
        className={cn(
          openMenu ? "block" : "hidden md:block",
          "w-full md:w-auto h-[100vh] md:h-auto fixed top-0 right-0 md:relative bg-[rgba(0,0,0,.8)] md:bg-transparent z-50"
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-24 bg-secondary md:bg-transparent h-full w-4/5 sm:w-3/5 md:w-auto py-4 md:py-0">
          <div className="flex md:hidden justify-end px-4">
            <X className="cursor-pointer" onClick={() => setOpenMenu(false)} />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-4 py-8 md:py-0">
            {menu.map((opt, index) => (
              <Link
                href={opt.link}
                key={index}
                className="font-semibold w-full md:w-auto hover:bg-primary hover:text-secondary md:hover:bg-transparent md:hover:text-foreground p-4"
              >
                {opt.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-between md:justify-normal items-center gap-2 border-t md:border-t-0 py-6 md:py-0 px-4 md:px-0">
            <Button asChild className="text-white rounded-full">
              <Link href="" className="flex gap-2">
                Download
                <Download size={20} />
              </Link>
            </Button>
            {resolvedTheme === "light" ? (
              <Button
                variant={"outline"}
                className="p-2"
                onClick={() => setTheme("dark")}
              >
                <Sun size={20} />
              </Button>
            ) : (
              <Button
                variant={"outline"}
                className="p-2"
                onClick={() => setTheme("light")}
              >
                <Sun size={20} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
