import React from "react";
import Image from "next/image";
const AddSection = () => {
  return (
    <div
      style={{
        width: "1340px",
        height: "460px",
        top: "55px",
        padding: "10px 0px 0px 0px",
        gap: "0px",
        opacity: "0px",
        background: "#F7FDFF",
        display: "flex", // Ensure flex display for inline items
        alignItems: "center", // Align items vertically
        justifyContent: "center", // Center items horizontally
        flexDirection: "column", // Align items in a column
        position: "relative", // Ensure positioning context
      }}
    >
      <div
        style={{
          width: "1140px",
          height: "300px",
          top: "10px",
          left: "100px",
          display: "flex",
          background: "white",
          border: "1px solid #EBEDF5",
        }}
      >
        <Image
          className="h-16 w-10 ml-16 mt-5"
          src="/Add.svg"
          alt="Add Icon"
          style={{ marginRight: "10px" }}
        />
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "36px",
            fontWeight: 600,
            lineHeight: "54px",
            textAlign: "left",
            marginTop: "25px",
          }}
        >
          Add Your Own
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "19px",
              fontWeight: 50,
              lineHeight: "34px",
              textAlign: "left",
              marginTop: "35px",
            }}
            className="mt-10px"
          >
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 50,
              padding: "6px 12px", // Adjust padding to make the button smaller
              lineHeight: "1", // Set line height to 1 to reduce button height
            }}
            className="relative bg-transparent text-searchIcon font-semibold  px-4 border border-searchIcon rounded shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent"
          >
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
