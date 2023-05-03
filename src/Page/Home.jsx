import React from "react";
import Title from "../components/Title";

export default function Home() {
  const inputStyle = {
    border: "none",
    borderBottom: " 2px dotted",
    outline: "none",
    padding: "0.35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title"} text={"Name"} />
      <Title classes={"main-title mb-4"} text={"Date"} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        voluptatum voluptatem laudantium nobis illo obcaecati, minima incidunt
        praesentium, aut vel inventore necessitatibus neque sequi similique ut
        nisi libero? Esse, eum!
      </p>
      <footer className="d-flex" 
      style={{
        justifyContent: "space-around",
        position: "relative",
        top: "40vh"
        }}>
      <input type="date" value={""} style={inputStyle} />
      <input type="text" value={""} style={inputStyle} />
      </footer>
    </div>
  );
}