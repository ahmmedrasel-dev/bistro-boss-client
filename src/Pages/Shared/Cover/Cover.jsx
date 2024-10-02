import { Parallax } from "react-parallax";

const Cover = ({ bgImage, title }) => {
  return (
    <section>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImage}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[500px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in.</p>
            </div>
          </div>
        </div>
        {/* <div style={{ height: "500px" }} /> */}
      </Parallax>
    </section>
  );
};

export default Cover;
