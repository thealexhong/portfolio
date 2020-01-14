import React from "react";
import logo from "./assets/thealexhong.svg";

function App() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>Hi, I&apos;m Alex Hong.</h1>
        <h3>I love to create and bring products to market.</h3>
        <p>
          I am the Founder and CEO of{" "}
          <a
            className="Home-link"
            href="https://robotplaytime.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @robotplaytime
          </a>
          .
        </p>

        <p>
          I am the Co-founder of{" "}
          <a
            className="Home-link"
            href="https://wonderleap.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            @wonderleap
          </a>
          .
        </p>
        <p>
          I am obsessed with complex body movements:{" "}
          <a
            className="Home-link"
            href="https://www.instagram.com/thealexhong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thealexhong
          </a>
          .
        </p>
        <div className="Home-footer">Alex Hong &copy; 2020</div>
      </header>
    </div>
  );
}

export default App;
