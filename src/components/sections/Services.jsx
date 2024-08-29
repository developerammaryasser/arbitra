import { services } from "@/constants";
import Accordion from "../elements/Accordion";
import Section from "../layouts/Section";
import { ServicesImage1, ServicesImage2 } from "@/assets";

const Services = () => {
  return (
    <section className="pt-16" id="services">
      <Section title={services.section1.title} image={ServicesImage1}>
        <Accordion items={services.section1.accordion} />
      </Section>
      <Section
        reverse={true}
        title={services.section2.title}
        text={services.section2.text}
        image={ServicesImage2}
      >
        <div className="flex flex-wrap flex-row md:items-center justify-around gap-8 py-4 border-t ">
          {services.section2.details.map((item, key) => (
            <div
              key={key}
              className="flex flex-col items-start justify-start gap-1 text-n-1"
            >
              <span className="text-4xl font-medium md:text-3xl">
                {item.number}
              </span>
              <span className="opacity-80">{item.text}</span>
            </div>
          ))}
        </div>
      </Section>
      <div className="relative py-24 bg-n-2">
        <div className="relative container" style={{ zIndex: 4 }}>
          <p className="text-5xl text-center md:text-start text-n-1/65 leading-snug">
            At Arbitra, our mission is to{" "}
            <span className="text-n-1">
              redefine fintech <br /> through Aidriven soluions.
            </span>{" "}
            We&apos;'re dedicated to <br />{" "}
            <span className="text-n-1">
              providing smart, data-driven advices
            </span>{" "}
            that help <br /> users to unlock their full potential in the <br />{" "}
            cryptocurrency market.
          </p>
        </div>
        {/* Gradient */}
        <div
          className="absolute opacity-10 bottom-0 md:bottom-[7%] lg:bottom-[10%] right-1/3 size-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
          style={{ zIndex: 3 }}
        ></div>
      </div>
    </section>
  );
};
export default Services;
