import Image from "next/image";
import Link from "next/link";
import { UsersList } from "./UsersList";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <motion.section variants={fadeIn({delay: 1.05, duration: .3})} initial="hidden" animate='show' className="flex flex-col lg:flex-row items-center justify-between w-full h-[70vh] xl:h-[80vh] px-6 md:px-8 lg:pl-16 xl:pl-48 py-6 lg:py-0 border-b overflow-hidden text-foreground">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-start gap-6 lg:gap-12 lg:flex-[.3]"
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
              className="flex flex-wrap text-justify font-light"
            >
              Simple, reliable, private messaging and calling for free*,
              available all over the world.
            </motion.p>
            <motion.div
              variants={textVariant(1.2)}
              initial="hidden"
              animate="show"
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
            </motion.div>
          </div>

          <UsersList />
        </div>
      </motion.div>

      <div className="w-full lg:w-auto lg:flex-[.6] h-4/5 relative">
        <motion.div
          variants={fadeIn({ direction: "down", delay: 1.1 })}
          initial="hidden"
          animate="show"
          className="hidden lg:flex w-full absolute -top-8 -right-64"
        >
          <Image
            src="/assets/b.png"
            alt="hero 1"
            width={1200}
            height={900}
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 1.05 })}
          initial="hidden"
          animate="show"
          className="w-full absolute top-6 right-0 lg:top-24 lg:-right-32"
        >
          <Image
            src="/assets/b.png"
            alt="hero 2"
            width={1200}
            height={900}
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
