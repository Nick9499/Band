import React from "react";

const IMAGE_URL =
  "https://static.wixstatic.com/media/157414_eec39ece9ed9402a96dfb7cf4b3e5ea7.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero lg:bg-fixed"
        style={{
          backgroundImage: `url(${IMAGE_URL})`,
          height: "450px",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              BEST. WEDDING. EVER.
            </h1>
            <p className="mb-5">
              Here at Mr. Perdomo Ent, we love rocking parties! From corporate
              events, Mitzvah's, and weddings. We do it all!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
