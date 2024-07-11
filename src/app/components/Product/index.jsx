import React from "react";
import Card from "./Card";

const ProductCard = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          desc="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
          buttonItem="Attend"
          src="/Program.svg"
          heading="Program"
        />
        <Card
          desc="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
          buttonItem="Meet"
          src="/Place.svg"
          heading="Place"
        />
        <Card
          desc="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
          buttonItem="Attend"
          src="/Products.svg"
          heading="Get it"
        />
        <Card
          desc="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
          buttonItem="Connect"
          src="/People.svg"
          heading="People"
        />
      </div>
    </div>
  );
};

export default ProductCard;
