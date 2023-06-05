"use client";

import React, { useState } from "react";
import { destinations } from "../../public/data.json";
import Image from "next/image";

function Page() {
  const planets = destinations;

  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="flex text-white flex-col">
      <h3>01 Pick your destination</h3>
      <Image src={images.png} alt={name} width="170" height="170" />
      <div>
        {planets.map((el, index) => (
          <a key={index} onClick={() => setValue(index)}>
            {el.name}
          </a>
        ))}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <div></div>
      <div>
        <p>AVG. DISTANCE</p>
        <p>{distance}</p>
      </div>
      <div>
        <p>EST. TRAVEL TIME</p>
        <p>{travel}</p>
      </div>
    </div>
  );
}

export default Page;
