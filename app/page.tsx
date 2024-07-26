import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <GetApp />
      <section className="flex flex-col items-center justify-between w-full px-6 md:px-8 lg:px-16 xl:px-64 my-24">
      <h1 className="text-2xl text-border flex items-center justify-center w-full font-semibold mb-6">
          Anywhere! Anyone!
        </h1>
        <div className="grid grid-cols-2">
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem ad eos. Fugit perspiciatis cumque nam reiciendis quis, mollitia ipsam totam in sequi soluta aut pariatur iusto laboriosam iste ut fuga repellendus non nemo, accusantium eveniet beatae. Animi autem molestiae expedita minus a, consequuntur, ipsum magni, quae optio qui repudiandae?
          </div>
          <div className="w-full max-h-[60vh]">
            <Image 
              src="/assets/home.png"
              alt="world"
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
