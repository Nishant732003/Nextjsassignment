import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1340px",
        minHeight: "602px",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1140px",
          minHeight: "400px",
          background: "#F7F5F9",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <Image
            src="/quote.svg"
            alt="Quote Icon"
            style={{ marginRight: "10px", height: "24px", width: "24px" }}
          />
          <h2
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "30px",
              color: "#08090A",
              margin: "0",
            }}
          >
            Testimonials
          </h2>
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "15px",
            lineHeight: "24px",
            color: "#6D747A",
            marginBottom: "20px",
          }}
        >
          <p>
            In a fast-growing and ever-changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like-minded
            people. Websites like hobbycue.com are a great service that helps me
            get in touch, communicate, connect, and exchange ideas with other
            dancers. It also provides the extra benefit of finding products and
            services that I can avail, which I can be assured are of great
            quality as they come recommended by people in the hobbycue
            community. Having discussions, gaining visibility, and safely
            exploring various hobbies and activities in my city, all under one
            roof, is an excellent idea and I highly recommend it.
          </p>
        </div>
        <div
          className="justify-between"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Image
            style={{
              width: "100%",
              maxWidth: "650px",
              height: "auto",
              marginBottom: "20px",
            }}
            src="/Audio.svg"
            alt="Audio Icon"
          />
          <Image
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "auto",
              marginBottom: "20px",
            }}
            src="/Shubha.svg"
            alt="Shubha Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
