import React from "react";
import Image1 from "../Assets/image1.png";
import Image2 from "../Assets/image2.png";
import Impact1 from "../Assets/impact1.png";
import Impact2 from "../Assets/impact2.png";
import Impact3 from "../Assets/impact3.png";

const Home = () => {
  return (
    <main className=" pt-24 md:pt-6  text-text">
      <div className="flex justify-between items-center flex-col md:flex-row px-8 lg:px-36">
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
      </div>
      <div className="flex flex-col w-[100%]">
        <div className="bg-bgLightGreen p-10 w-[100%] "></div>
        <div>
          <h2>Our Impact</h2>
          <div>
            <div></div>
          </div>
        </div>
        <div className="bg-bgLightPurple p-10 w-[100%] "></div>
      </div>
    </main>
  );
};

export default Home;
