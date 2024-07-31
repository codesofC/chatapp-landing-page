import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const GetApp = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full px-6 md:px-8 lg:px-16 xl:px-64 my-32">
      <motion.h1
        variants={fadeIn({ direction: "down", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl text-border flex items-center justify-center w-full font-semibold mb-6"
      >
        {" "}
        Get our app{" "}
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.5 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-1/2 sm:w-1/3 lg:w-1/4 flex items-center justify-center"
        >
          <Image
            src="/assets/android2.png"
            alt="demo mobile"
            width={1200}
            height={800}
            className="w-full object-contain"
          />
          <Image
            src="/assets/android1.png"
            alt="demo mobile"
            width={1200}
            height={800}
            className="w-full object-contain lg:absolute lg:top-10 lg:-left-32"
          />
        </motion.div>
        <div className="md:px-6 lg:w-1/2 text-foreground">
          <div className="flex flex-col gap-6 items-center">
            <motion.h1
              variants={fadeIn({ duration: .3 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-bold text-4xl"
            >
              No ads. No trackers. No kidding.
            </motion.h1>
            <motion.p
              variants={fadeIn({ duration: 1 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-justify"
            >
              There are no ads, no affiliate marketers, and no creepy tracking
              in Snaptalk. So focus on sharing the moments that matter with the
              people who matter to you.
            </motion.p>

            <motion.div
              variants={fadeIn({ duration: 1, direction: "up" })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-6 lg:gap-12 xl:gap-16"
            >
              <Link
                href=""
                className="px-4 py-2 rounded-lg flex items-center gap-1 border"
              >
                <Image
                  src="https://static.wikia.nocookie.net/logo-timeline/images/b/b0/App_Store_iOS.png/revision/latest/scale-to-width-down/1024?cb=20210207214734"
                  alt="app store"
                  width={75}
                  height={75}
                  className="size-6 md:size-8"
                />
                App store
              </Link>
              <Link
                href=""
                className="px-4 py-2 rounded-lg flex items-center gap-1 border"
              >
                <Image
                  src="https://static-00.iconduck.com/assets.00/google-play-icon-958x1024-scyukz7k.png"
                  alt="app store"
                  width={75}
                  height={75}
                  className="size-6 md:size-8"
                />
                Play store
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
