import React from "react";
import Image from "next/image";
import Nevbar from "../app//components//nevbar"

function home() {
  return (
    <div className="main">
      <Nevbar />
  
      <div className="center">
        <div className="center-left">
          <h1>
            hello everyone:
            <br />i am Shoaib arshad...
          </h1>
          <h3>
            welcome to my portfolio page!I am currently expanding my skill set by learning TypeScript, Next.js, Python, and AI. With a focus on building scalable and efficient applications, I am excited to dive deeper into modern web development and artificial intelligence technologies. These tools will help me enhance my development workflow and push the boundaries of what I can create.
          </h3>
        </div>
        <div className="center-right">
          <Image
            src="/images/dp.jpeg.jfif"
            alt="images"
            height={400}
            width={400}
          />
        </div>

      </div>
        <footer className="footer">
        </footer>
    </div>
  );
}

export default home;
