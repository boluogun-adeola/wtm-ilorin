import React from "react";
import Image4 from "../Assets/image4.png";
import Image5 from "../Assets/image5.png";

const About = () => {
  return (
    <main>
      <section className="flex bg-bgPurple px-4 lg:px-36 py-16 justify-between items-center w-full">
        <div>
          <h2 className="text-6xl leading-[64px] text-text">
            About WTM Ilorin
          </h2>
        </div>
        <div>
          <img src={Image4} alt="" className="max-w-[400px]" />
        </div>
      </section>
      <section className=" py-16 px-4 lg:px-36 flex items-center justify-between w-[full]">
        <div className="flex-1">
          <img src={Image5} alt="" />
        </div>
        <div className="w-[50%]">
          <div className="bg-bgGreenPigment py-6 px-8 mb-6">
            <p className="text-base text-text ">
              <span className="text-2xl pr-1.5">Our Mission:</span>Raise
              awareness of gender equality & diversity issues in STEM (science,
              technology, engineering & math) through the power of example. We
              create an open environment where challenges can be understood and
              means to overcome them will be provided.
            </p>
          </div>
          <div className="bg-bgCerulean py-6 px-8">
            <p className="text-base text-text">
              <span className="text-2xl pr-1.5">Our Vision:</span>This is the
              world we are dreaming of. A world where women don’t have to give
              120% to be taken full. A world where men and women are working
              together in exploring science, developing technology, construct
              engineering and building a mathematical foundation. A world where
              the choice of a specific major in studying is not a question of
              gender.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <ul>
            <li>Teamwork</li>
            <li>Commitment</li>
            <li>Community</li>
            <li>Mentorship</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
