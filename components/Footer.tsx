"use client"

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 w-full items-center"
    >
      <div className="flex items-start gap-6 lg:gap-52 px-6 lg:px-40 w-full justify-between mb-6">
        <div className="w-20">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold"> Talk to us: </h3>
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer"> Blog </li>
            <li className="cursor-pointer"> Help </li>
            <li className="cursor-pointer"> SnapTalk </li>
          </ul>
          <ul className="hidden md:flex items-center gap-6">
            <li className="cursor-pointer"> Blog </li>
            <li className="cursor-pointer"> Help </li>
            <li className="cursor-pointer"> SnapTalk </li>
          </ul>
        </div>
        <ul className="hidden md:flex flex-col gap-6">
            <li className="cursor-pointer"> Blog </li>
            <li className="cursor-pointer"> Help </li>
            <li className="cursor-pointer"> SnapTalk </li>
          </ul>
      </div>
      <div className="flex items-center gap-2 px-6">
        <Link href="" className="border p-2 rounded-md hover:bg-border">
          <Github size={20} />
        </Link>
        <Link href="" className="border p-2 rounded-md hover:bg-border">
          <Linkedin size={20} />
        </Link>
      </div>

      <p className="p-4 flex items-center justify-center border-t w-full">
        &copy; SnapTalk - 2024
      </p>
    </motion.footer>
  );
};

export default Footer;
