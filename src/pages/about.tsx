import React from "react";
import Image4 from "../Assets/image4.png";
import Image5 from "../Assets/image5.png";
import Image6 from "../Assets/image6.png";
import Image7 from "../Assets/image7.png";
import Image8 from "../Assets/image8.png";
import Image9 from "../Assets/image9.png";

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
      <section className="bg-bgBlack text-textLight py-6">
        <div>
          <ul className="flex justify-between">
            <li className="text-4xl">Teamwork</li>
            <li className="text-4xl">Commitment</li>
            <li className="text-4xl">Community</li>
            <li className="text-4xl">Mentorship</li>
          </ul>
        </div>
        <section className="flex items-center flex-col px-4 lg:px-36 pt-[60px]">
          <div>
            <img src={Image7} alt="" />
          </div>
          <div className="w-[70%]">
            <p className="text-[32px] leading-10 py-4">
              Our values are what we use to benchmark our actions. We want
              everyone respected as a person, having them trusted, treated in a
              fair manner. We want information to be shared and colleagues to be
              supported, all for the purpose of continuous improvement.
            </p>
          </div>
        </section>
      </section>
      <section>
        <div className="bg-bgVividCerulean text-textLight py-8">
          <h2 className="text-center text-4xl">Member's Benefit</h2>
        </div>
        <section className="px-4 lg:px-36">
          <div className="flex items-center py-[64px] justify-center">
            <div className="flex-1">
              <img src={Image6} alt="" />
            </div>
            <div className="w-[50%]">
              <h3 className="text-textDark text-4xl pb-4">Community Support</h3>
              <p className="text-base text-text leading-6">
                Where everyone sees the opportunity to thrive. We're building a
                world where all women can thrive in tech.
              </p>
              <p className="text-base text-text leading-6">
                Where everyone sees the opportunity to thrive. We're building a
                world where all women can thrive in tech.
              </p>
            </div>
          </div>
          <div className="flex items-center pb-[64px] justify-between">
            <div className="w-[50%]">
              <h3 className="text-textDark text-4xl pb-4"> Mentorship</h3>
              <p className="text-base text-text leading-6">
                Where everyone sees the opportunity to thrive. We're building a
                world where all women can thrive in tech.
              </p>
              <p className="text-base text-text leading-6">
                Where everyone sees the opportunity to thrive. We're building a
                world where all women can thrive in tech.
              </p>
            </div>
            <div className="">
              <img src={Image8} alt="" />
            </div>
          </div>
          <div className="flex items-center pb-[64px] justify-center">
            <div className="flex-1">
              <img src={Image9} alt="" />
            </div>
            <div className="w-[50%]">
              <h3 className="text-textDark text-4xl pb-4">Monitored Growth</h3>
              <p className="text-base text-text leading-6">
                Where everyone sees the opportunity to thrive. We're building a
                world where all women can thrive in tech.
              </p>
              <p className="text-base text-text leading-6">
                Where everyone sees the opportunity to thrive. We're building a
                world where all women can thrive in tech.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="bg-bgGreen text-textLight py-8">
          <h2 className="text-center text-4xl">Team Members</h2>
        </div>
      </section>
    </main>
  );
};

export default About;
