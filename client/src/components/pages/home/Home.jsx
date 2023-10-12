import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">About Me</h1>
      <p className="aboutme">
        <span className="paragraph">
          I am a web developer, currently attending trade school for
          Informational Technology.
        </span>
        <span className="paragraph">
          I love developing websites and I hope to learn and develope your dream
          site! Since I am a young developer, I don't charge a lot. Contact me
          with any inqueries you may have about website you want/need created.
        </span>
      </p>
      <div className="skills">
        <div className="skill">
          <span className="text">HTML</span>
          <span className="hover"></span>
        </div>
        <div className="skill">
          <span className="text">CSS</span>
          <span className="hover"></span>
        </div>
        <div className="skill">
          <span className="text">Javascript</span>
          <span className="hover"></span>
        </div>
        <div className="skill">
          <span className="text">Html</span>
          <span className="hover"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
