import React from "react";
import { useLoaderData } from "react-router-dom";

import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
  const allCoffee = useLoaderData();
  return (
    <>
      <div className="py-20 bg-nu10">
        <div className="container-2">
          <h1 className="text-center mb-8">All Coffee: {allCoffee.length}</h1>
          <div className="grid grid-cols-12 gap-6">
            {allCoffee.map((item) => (
              <div className="col-span-6">
                <CoffeeCard key={item._id} coffeeCard={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
