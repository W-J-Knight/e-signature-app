import React, { useState } from "react";
import Title from "../components/Title";

export default function Home() {

  const [name, setName] = useState("Your Signature")
  const [date, setDate] = useState("Select DATE")
  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setName(previousName => previousName = e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(previousDate => previousDate = e.target.value);
  };
  const inputStyle = {
    border: "none",
    borderBottom: " 2px dotted",
    outline: "none",
    padding: "0.35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center text-uppercase">
      {/* <Title classes={"title"} text={"Name"} /> */}
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={date} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        voluptatum voluptatem laudantium nobis illo obcaecati, minima incidunt
        praesentium, aut vel inventore necessitatibus neque sequi similique ut
        nisi libero? Esse, eum!
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
