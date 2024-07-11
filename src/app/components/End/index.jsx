import React from "react";

const End = () => {
  return (
    <div
      style={{
        width: "1348px",
        height: "410px",
        top: "10px",
        left: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: "#F7FDFF",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          marginLeft: "60px",
        }}
      >
        <span
          className="font-poppins text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
          style={{
            marginRight: "10px",
          }}
        >
          your
        </span>
        <span
          className="text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
          style={{
            marginRight: "10px",
            color: "#D6BCFA",
          }}
        >
          hobby
        </span>
        <span
          className="font-poppins text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
          style={{
            marginRight: "10px",
          }}
        >
          or
        </span>
        <span
          className="text-3xl sm:text-4xl font-semibold italic leading-tight tracking-wide"
          style={{
            marginRight: "10px",
            color: "#60A5FA",
          }}
        >
          community...
        </span>
      </div>
      <button
        style={{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: 500,
          padding: "10px 20px",
          lineHeight: "1",
          alignSelf: "flex-start",
          marginLeft: "60px",
          color: "white", // Set text color to white
        }}
        className="relative bg-transparent text-white font-semibold px-4 border border-searchIcon bg-searchIcon rounded shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent"
      >
        Get Started
      </button>
      <Image
        src="/womans.svg"
        alt="Woman Illustration"
        style={{
          marginTop: "30px",
          width: "900px",
          marginLeft: "60px",
          alignSelf: "center",
        }}
      />
    </div>
  );
};

export default End;
