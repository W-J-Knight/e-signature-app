import React from "react";

export default function Title({ classes, text, placeholder }) {
  return (
    <h1 className="={!classes? container text-center : classes}">
      {(text === "" ? placeholder : text)}
    </h1>
  );
}
