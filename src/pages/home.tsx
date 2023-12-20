import React from "react";
import Image1 from "../Assets/image1.png";
import Image2 from "../Assets/image2.png";
import Image3 from "../Assets/image3.png";
import Impact1 from "../Assets/impact1.png";
import Impact2 from "../Assets/impact2.png";
import Impact3 from "../Assets/impact3.png";
import Partner from "../Assets/partners.png";

const Home = () => {
  return (
    <main className=" pt-24 md:pt-6  text-text">
      <section className="flex justify-between items-center flex-col md:flex-row px-4 lg:px-36">
        <div className="flex-1 md:w-[55%] ">
          <h1 className="text-2xl md:text-5xl md:w-[85%] leading-10 md:leading-[52px]">
            {" "}
            We're building a world where all women can thrive in tech
          </h1>
          <p className="text-base pt-4 leading-5 md:text-xl md:pt-8 md:leading-6 font-medium ">
            Google's Women Techmakers program provides visibility, community,
            and resources for women in technology
          </p>
          <button className="text-base text-textLight bg-bgBlue py-2 md:py-2.5 px-8 rounded-md mt-6 md:mt-8">
            Join Us
          </button>
        </div>
        <div className="md:w-[40%] pt-8">
          <img src={Image1} alt="two young ladies smilling" />
        </div>
      </section>
      <section className="flex flex-col w-[100%] mt-4">
        <div className="bg-bgLightGreen p-10 w-[100%] "></div>
        <div className="px-4 lg:px-36 py-4">
          <h2 className="text-center text-textDark text-4xl pb-4 ">
            Our Impact
          </h2>
          <div className="flex justify-center md:justify-between text-textBlue flex-col md:flex-row">
            <div className="text-center self-center">
              <img src={Impact1} alt="number of events" />
              <div className="pt-4 pb-6 md:pb-0">
                <p className="text-xl md:text-4xl pb-1">11</p>
                <p className="text-base md:text-xl">Events</p>
              </div>
            </div>
            <div className="text-center self-center ">
              <img src={Impact2} alt="total number of members" />
              <div className="pt-4 pb-6 md:pb-0">
                <p className="text-sl md:text-4xl pb-1">225</p>
                <p className="text-base md:text-xl">Members</p>
              </div>
            </div>
            <div className="text-center self-center">
              <img src={Impact3} alt="total number of mentees" />
              <div className="pt-4">
                <p className="text-xl md:text-4xl pb-1">69</p>
                <p className="text-base md:text-xl">Mentees</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bgLightPurple p-10 w-[100%] "></div>
      </section>
      <section className="px-4 lg:px-36 flex justify-between items-center text-textDark flex-col md:flex-row pt-4 lg:pt-0 mt-8">
        <div>
          <img src={Image2} alt="" />
        </div>
        <div className="leading-[44px] md:ml-10 pt-6 md:pt-0">
          <h4 className="text-2xl md:text-4xl lg:w-[90%] pb-4">
            We're building a world where all women can thrive in tech
          </h4>
          <p className="text-base md:text-xl">
            Where everyone sees the opportunity to thrive
          </p>
          <button className="text-base text-textLight bg-bgBlue py-2 md:py-2.5 px-8 rounded-md mt-6 md:mt-8">
            Learn More
          </button>
        </div>
      </section>
      <section className="px-4 lg:px-36 flex justify-between items-center text-textDark flex-col-reverse md:flex-row pt-4 lg:pt-0 mt-8">
        <div className="leading-[44px] pt-4 md:pt-0">
          <h4 className="text-xl md:text-4xl lg:w[90%]">
            We're building a world where all women can thrive in tech
          </h4>
          <p className="text-base md:text-xl">
            Where everyone sees the opportunity to thrive
          </p>
          <button className="text-base text-textLight bg-bgBlue py-2 md:py-2.5 px-8 rounded-md mt-6 md:mt-8">
            Learn More
          </button>
        </div>
        <div className="pt-4 md:pt-0">
          <img src={Image3} alt="" />
        </div>
      </section>
      <section className="here-image bg-cover h-[400px] mt-8 flex justify-center items-center">
        <h1 className="text-textLight capitalize text-3xl md:text-6xl leading-[64px] ">
          We are here for you
        </h1>
      </section>
      <section className="flex justify-center flex-col items-center text-textDark">
        <button className="text-base text-textLight bg-bgBlue py-2 md:py-2.5 px-8 rounded-md mt-6 md:mt-8">
          Contact Us
        </button>
        <p className="pt-10 text-base md:text-xl pb-4 px-8">
          We can help. Our team of experts are here to answer your questions
        </p>
        <div className="flex justify-center items-center w-full gap-8">
          <hr className="h-[3px] rounded-lg border-none w-[40%] bg-bgGray" />
          <hr className="h-[3px] rounded-lg border-none w-[40%] bg-bgGray" />
        </div>
      </section>
      <section className="mt-8 px-4 lg:px-36 partner-image bg-cover flex flex-col md:flex-row justify-between bg-no-repeat w-[100%] md:h-[450px] lg:h-[776px] text-textLight items-center">
        <div className="pt-4 md:pt-0">
          <p className="text-lg md:text-4xl md:w-[85%] lg:w-[70%] pb-4">
            Our partners are building a world where all women can thrive
          </p>
          <p className="md:text-xl text-base">
            {" "}
            Where everyone sees the opportunity to thrive.
          </p>
          <button className="text-base text-textDark bg-bgLight py-2 md:py-2.5 px-8 rounded-md mt-6 md:mt-8 mb-6 md:mb-0">
            Become our partner
          </button>
        </div>
        <div className="self-center">
          <img src={Partner} alt="" />
        </div>
      </section>
      <section className="mt-8"></section>
    </main>
  );
};

export default Home;
