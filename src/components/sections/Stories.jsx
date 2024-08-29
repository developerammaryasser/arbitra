import { about } from "@/constants";
import { H2 } from "../elements/Typography";
import Slider from "../elements/Silder";

const Stories = () => {
  return (
    <section className="py-24 bg-n-2" id="about">
      <div className="container flex flex-col items-start justify-start gap-8 text-center lg:text-start">
        <H2>{about.title}</H2>
        {/* Slider */}
        <Slider slides={about.stories}/>
      </div>
    </section>
  );
};
export default Stories;
