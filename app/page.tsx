import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <section  className="flex items-center justify-between w-full px-6 md:px-8 lg:px-16 xl:px-64 border-b my-8">
        <h3 className="text-2xl text-border flex items-center justify-center w-full font-semibold mb-6"> Get our app </h3>
        <div className="flex items-center">

        </div>
      </section>
    </main>
  );
}
