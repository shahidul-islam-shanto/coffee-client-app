import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
  const allCoffee = useLoaderData();
  const [coffeeUpdateCard, setCoffeeUpdateCard] = useState(allCoffee);
  return (
    <>
      <div className="py-20 bg-nu10">
        <div className="container-2">
          <h1 className="text-center mb-8">All Coffee: {allCoffee.length}</h1>
          <div className="grid grid-cols-12 gap-6">
            {coffeeUpdateCard.map((item) => (
              <div className="col-span-6">
                <CoffeeCard
                  key={item._id}
                  coffeeCard={item}
                  coffeeUpdateCard={coffeeUpdateCard}
                  setCoffeeUpdateCard={setCoffeeUpdateCard}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
