
"use client"
 import React from "react";
import Login from "./login";
import Image from "next/image";
const Hero = () => {
  return (
      <div style={{height:"36rem"}} className="flex flex-col sm:flex-row w-full sm:h-168 bg-searchInputBg">
      <div className="flex-1 p-4 flex items-center justify-center relative">
        <div
          className="text-left"
          style={{
            width: "580px",
            height: "auto", // Adjusted height to accommodate dynamic content including the image
            position: "absolute",
            top: "100px",
            left: "60px",
            opacity: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px", // Adjusted margin for spacing
            }}
          >
            <span
              className="font-poppins text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
              style={{
                marginRight: "10px",
              }}
            >
              Explore
            </span>
            <span
              className="text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
              style={{
                marginRight: "10px",
              }}
            >
              your
            </span>
            <span
              className="font-poppins text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
              style={{
                marginRight: "10px",
                color: "#60A5FA", // Sky blue color for hobby
              }}
            >
              hobby
            </span>
            <span
              className="text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
              style={{
                marginRight: "10px",
              }}
            >
              or
            </span>
            <span
              className="font-poppins text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
              style={{
                letterSpacing: "0.02em",
                color: "#D6BCFA", // Light purple color for passion
              }}
            >
              passion
            </span>
          </div>
          <div
            style={{
              width: "706px",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "30px",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p style={{ marginTop: "15px" }}>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <Image
            src="/Group.svg"
            alt="Illustration"
            style={{ marginTop: "73px", width: "100%" }}
          />
        </div>
      </div>
      <div className="flex-1 bg-green-500 p-4 flex items-center justify-center">
      <Login/>
      </div>
    </div>
  );
};

 export default Hero;
