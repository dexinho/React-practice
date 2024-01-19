import React from "react";
import "./index.css";
import DisplayImages from "./DisplayImages/DisplayImages";

const App = () => {
  const images = [
    {
      title: "Atomic Habits",
      writer: "James Clear",
      imageURL: "./assets/1.jpg",
    },
    {
      title: "Fourth Wing",
      writer: "Rebecca Yarros",
      imageURL: "../src/assets/2.jpg",
    },
    {
      title: "House of Flame and Shadow",
      writer: "Sarah J. Maas",
      imageURL: "../src/assets/3.jpg",
    },
    {
      title: "The Bible in 52 Weeks",
      writer: "Dr. Kimerly D. Moore",
      imageURL: "../src/assets/4.jpg",
    },
    {
      title: "Iron Flame",
      writer: "Rebecca Yarros",
      imageURL: "../src/assets/5.jpg",
    },
    {
      title: "The Kingdom",
      writer: "Tim Alberta",
      imageURL: "../src/assets/6.jpg",
    },
  ];

  return (
    <>
      {images.map((image, index) => (
        <DisplayImages
          key={index}
          bookTitle={image.title}
          bookWriter={image.writer}
          bookImage={image.imageURL}
        />
      ))}
    </>
  );
};

export default App;
