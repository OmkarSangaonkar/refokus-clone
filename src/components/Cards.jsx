// import React from 'react'

import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex py-32 gap-2 ">
        <Card width={"basis-1/3"} para={true} start={false} />
        <Card
          width={"basis-2/3"}
          para={false}
          start={true}
          hover="bg-purple-500"
        />
      </div>
    </div>
  );
}

export default Cards;
