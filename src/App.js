import React from "react";
import logo from "./assets/thealexhong.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I&apos;m Alex Hong.</h1>
        <h3>I love to create and bring products to market.</h3>
        <p>
          I am the founder and CEO of{" "}
          <a
            className="App-link"
            href="https://robotplaytime.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @robotplaytime
          </a>
          .
        </p>

        <p>
          I am the co-founder of{" "}
          <a
            className="App-link"
            href="https://wonderleap.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            @wonderleap
          </a>
          .
        </p>
        <p>
          I am obsess with complex body movements:{" "}
          <a
            className="App-link"
            href="https://www.instagram.com/thealexhong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thealexhong
          </a>
          .
        </p>
      </header>
    </div>
  );
}

export default App;
