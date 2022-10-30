import React from "react";

const Banner = () => {
  return (
    <div
      className="hero lg:bg-fixed"
      style={{
        backgroundImage: `url("https://static.wixstatic.com/media/157414_e463c9d44c40421894464f2d838b933d~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1899,h_760,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/157414_e463c9d44c40421894464f2d838b933d~mv2_d_5184_3456_s_4_2.jpg")`,
        height: "450px",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            BEST. PARTY. EVER.
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mt-10 flex flex-col items-center ">
            <button className="btn w-2/3 mb-5 bg-[#0a8cf7] font-bold  md:text-xl">
              schedule a video chat
            </button>
            <button className="btn w-2/3 mb-5 bg-[#089098] font-bold  md:text-xl">
              schedule a phone call
            </button>
            <button className="btn w-2/3 mb-5 bg-[#EEE10F] font-bold  md:text-xl">
              meet with us in person
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
