import Image from "next/image";
import Link from "next/link";
import { UsersList } from "./UsersList";
import { Download, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Hero = () => {

  const {resolvedTheme} = useTheme()

  return (
    <motion.section variants={fadeIn({delay: 1.05, duration: .3})} initial="hidden" animate='show' className="relative flex flex-col lg:flex-row items-center lg:items-end justify-between w-full h-[70vh] xl:h-[80vh] px-6 md:px-8 lg:pl-16 xl:pl-48 border-b overflow-hidden text-foreground">

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center -z-50"><div className={"relative h-full w-full  bg-[radial-gradient(#666666_0px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"}></div></div>


      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-start justify-center gap-6 lg:gap-12 lg:flex-[.3] py-6 h-full"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.h1
            variants={textVariant(1.1)}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl font-bold text-center md:text-start"
          >
            Send messages privately
          </motion.h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-12">
            <motion.p
              variants={textVariant(1.15)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap text-justify font-extralight"
            >
              Simple, reliable, private messaging and calling for free*,
              available all over the world.
            </motion.p>
            <motion.div
              variants={textVariant(1.2)}
              initial="hidden"
              animate="show"
              className="flex gap-6"
            >
              <Button asChild className="flex rounded-full">
                <Link
                  href="/"
                  className="px-4 md:px-8 py-6 rounded-full bg-primary text-white flex gap-2 md:gap-4 text-lg font-semibold"
                >
                  Download
                  <Download />
                </Link>
              </Button>
              <Button asChild variant={'outline'} className="flex rounded-full">
                <Link
                  href="https://chat-app-phi-gold.vercel.app"
                  className="px-4 md:px-8 py-6 rounded-full flex gap-2 md:gap-2 text-lg font-semibold"
                >
                  <MessageCircle />
                  Chat Now
                </Link>
              </Button>
            </motion.div>
          </div>

          <UsersList />
        </div>
      </motion.div>

      <div className="w-full md:w-3/4 lg:w-auto lg:flex-[.8] 2xl:flex-[.6] h-3/4 relative flex items-center justify-center">
        <motion.div
          variants={fadeIn({ direction: "down", delay: 1.1 })}
          initial="hidden"
          animate="show"
          className={cn("w-full absolute -bottom-20 sm:-bottom-32 md:-bottom-36 right-0 lg:bottom-12 lg:-right-64 rounded-t-lg overflow-hidden border dark:border-none", resolvedTheme === "light" ? "flex" : "hidden lg:flex")}
        >
          <Image
            src="/assets/herol.png"
            alt="hero 1"
            width={2000}
            height={1000}
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 1.05 })}
          initial="hidden"
          animate="show"
          className={cn("w-full absolute -bottom-20 sm:-bottom-32 md:-bottom-36 right-0 lg:-bottom-24 lg:-right-32 rounded-t-lg overflow-hidden dark:border", resolvedTheme === "dark" ? "flex" : "hidden lg:flex")}
        >
          <Image
            src="/assets/herod.png"
            alt="hero 2"
            width={2000}
            height={1000}
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
