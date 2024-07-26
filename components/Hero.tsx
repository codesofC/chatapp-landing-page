import Image from "next/image";
import Link from "next/link";
import { UsersList } from "./UsersList";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full h-[70vh] xl:h-[75vh] px-6 md:px-8 lg:pl-16 xl:pl-48 py-6 lg:py-0 border-b overflow-hidden">
      <div className="flex flex-col gap-12 items-center lg:flex-[.4]">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold"> SnapTalk </h1>
          <p className="font-normal">Be with your friends anywhere</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="flex flex-wrap text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              deleniti repellendus voluptate libero aliquid ad asperiores
              sapiente velit consectetur repudiandae?
            </p>
            <div className="flex gap-6 lg:gap-12">
              <Link
                href="/"
                className="px-8 py-4 rounded-full bg-primary text-white"
              >
                Play Store
              </Link>
              <Link href="/" className="px-8 py-4 rounded-full border">
                Chat Web
              </Link>
            </div>
          </div>

          <UsersList />
        </div>
      </div>

      <div className="w-full lg:w-auto lg:flex-[.6] h-4/5 relative">
        <div className="hidden lg:flex w-full absolute -top-8 -right-64">
          <Image
            src="/assets/b.png"
            alt="hero 1"
            width={1200}
            height={900}
            className="w-full h-full"
          />
        </div>
        <div className="w-full absolute top-12 right-0 lg:top-24 lg:-right-32">
          <Image
            src="/assets/b.png"
            alt="hero 2"
            width={1200}
            height={900}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
