import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          fontWeight: 800,
          color: "black",
        }}
      >
        <div
          style={{
            width: "calc(25% - 10px)",
            background: "white",
            padding: "20px",
            boxSizing: "border-box",
            fontWeight: 800,
            margin: "0 5px",
          }}
        >
          HobbyCue
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              fontWeight: 300,
              fontSize: "15px",
            }}
          >
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div
          style={{
            width: "calc(25% - 10px)",
            background: "white",
            padding: "20px",
            boxSizing: "border-box",
            margin: "0 5px",
            fontWeight: 800,
          }}
        >
          How Do I
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              fontWeight: 300,
            }}
          >
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
          </ul>
        </div>
        <div
          style={{
            width: "calc(25% - 10px)",
            background: "white",
            padding: "20px",
            boxSizing: "border-box",
            margin: "0 5px",
            fontWeight: 800,
          }}
        >
          Quick Links
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              fontWeight: 300,
              fontSize: "15px",
            }}
          >
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop/Store</li>
            <li>Community</li>
          </ul>
        </div>
        <div
          style={{
            width: "calc(25% - 10px)",
            background: "white",
            padding: "20px",
            boxSizing: "border-box",
            margin: "0 4px",
            fontWeight: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            Social Media
            <Image src="/icons.svg" alt="Social Media Icons" />
          </div>
          <div style={{ marginTop: "30px" }}>
            Invite friends
            <Image
              src="/Invite.svg"
              alt="Invite Icon"
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F7F5F9",

          width: "100%",
          height: "78px",
          boxSizing: "border-box",
          fontWeight: 400,
          color: "black",
        }}
      >
        <span style={{ marginTop: "28px" }}>
          &copy; Purple Cues Private Limited
        </span>
      </div>
    </>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: "100%",
//           padding: "20px",
//           boxSizing: "border-box",
//           fontWeight: 800,
//           color: "black",
//         }}
//       >
//         {["HobbyCue", "How Do I", "Quick Links", "Social Media"].map((title, index) => (
//           <div
//             key={index}
//             style={{
//               width: "100%",
//               background: "white",
//               padding: "20px",
//               boxSizing: "border-box",
//               marginBottom: "20px",
//               fontWeight: 800,
//             }}
//           >
//             {title}
//             {index < 3 ? (
//               <ul
//                 style={{
//                   listStyleType: "none",
//                   paddingLeft: "0",
//                   fontWeight: 300,
//                   fontSize: "15px",
//                 }}
//               >
//                 {index === 0 && ["About Us", "Our Services", "Work with Us", "FAQ", "Contact Us"].map((item, i) => <li key={i}>{item}</li>)}
//                 {index === 1 && ["Sign Up", "Add a Listing", "Claim Listing", "Post a Query", "Add a Blog Post"].map((item, i) => <li key={i}>{item}</li>)}
//                 {index === 2 && ["Listings", "Blog Posts", "Shop/Store", "Community"].map((item, i) => <li key={i}>{item}</li>)}
//               </ul>
//             ) : (
//               <>
//                 <div style={{ marginTop: "10px", marginBottom: "20px" }}>
//                   <Image src="/icons.svg" alt="Social Media Icons" />
//                 </div>
//                 <div>
//                   Invite friends
//                   <Image
//                     src="/Invite.svg"
//                     alt="Invite Icon"
//                     style={{ marginTop: "10px", display: "block" }}
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           background: "#F7F5F9",
//           width: "100%",
//           padding: "20px",
//           boxSizing: "border-box",
//           fontWeight: 400,
//           color: "black",
//           textAlign: "center",
//         }}
//       >
//         <span>&copy; Purple Cues Private Limited</span>
//       </div>
//     </>
//   );
// };

// export default Footer;