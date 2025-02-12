import { TypeAnimation } from "react-type-animation";

const BannerText = () => {
  return (
    <div>
      <h2 className="dark:text-white text-xl md:text-2xl lg:text-3xl font-semibold lg:mt-2">
        And I{"'"}m{" "}
        <span className="dark:text-[#61DAFB] text-[#134699]">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "MERN Stack Developer",
              1000,
              "Backend Developer",
              1000,
              "Frontend Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5rem", display: "inline-block" }}
            repeat={Infinity}
          />
        </span>
      </h2>
    </div>
  );
};

export default BannerText;
