import { HeroImage } from "@/assets";
import { hero } from "@/constants";
import Image from "next/image";
import Typography, { H1 } from "../elements/Typography";
import Button from "../elements/Button";
const Hero = () => {
  return (
    <section className="pt-10 lg:pt-16 relative h-fit overflow-hidden">
      <div
        className="relative container flex flex-col items-center justify-between h-full gap-y-12"
        style={{ zIndex: 4 }}
      >
        <div className="flex flex-col items-center justify-start gap-y-8 text-white">
          <div className="space-y-4 w-full flex flex-col items-center justify-center text-center">
            <H1>{hero.title}</H1>
            <Typography className="w-[70%]">{hero.text}</Typography>
          </div>
          <Button className="px-14">Get started</Button>
        </div>
        <div className="flex items-center justify-center w-10/12 2xl:w-full md:py-16 lg:py-0">
          <Image
            src={HeroImage}
            alt="Hero image"
            className="object-cover scale-125 lg:scale-100 translate-y-[40px]"
          />
        </div>
      </div>
        <div
          className="absolute bottom-0 md:bottom-[7%] lg:bottom-[10%] left-1/3 size-1/2 bg-gradient-to-t from-emerald-400 to-cyan-400 rounded-full blur-3xl"
          style={{ zIndex: 3 }}
        ></div>
        <div
          className="absolute bottom-0 md:bottom-[7%] lg:bottom-[10%] right-1/3 size-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
          style={{ zIndex: 3 }}
        ></div>
        <div
          className="absolute top-1/2 md:top-1/3 lg:top-1/2 right-1/3 size-1/2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-3xl"
          style={{ zIndex: 3 }}
        ></div>
    </section>
  );
};
export default Hero;
