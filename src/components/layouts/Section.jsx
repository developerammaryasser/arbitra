import Image from "next/image";
import Typography, { H2 } from "../elements/Typography";

const Section = ({ image, title, reverse = false, text, children }) => {
  return (
    <section className="py-24 bg-n-2">
      <div
        className={`container flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch lg:items-center justify-between gap-16`}
      >
        <div className="text-center lg:text-start lg:w-1/2 flex flex-col items-stretch justify-start gap-8 ">
          <H2 className="text-n-1">{title}</H2>
          {text && <Typography className="!text-n-1/80">{text}</Typography>}
          <div>{children}</div>
        </div>
        <div className="lg:w-1/2  rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Section;
