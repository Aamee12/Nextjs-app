import React, { useState } from "react";

const Second = () => {
  const [cart, setCart] = useState([]);

  const fruits = [
    { name: "Apple", price: "$2.99" },
    { name: "Banana", price: "$1.99" },
    { name: "Orange", price: "$3.49" },
    { name: "Grapes", price: "$4.99" },
    { name: "Strawberry", price: "$5.99" },
    { name: "Mango", price: "$3.99" },
    { name: "Pineapple", price: "$6.49" },
    { name: "Watermelon", price: "$7.99" },
    { name: "Kiwi", price: "$2.49" },
    { name: "Peach", price: "$4.49" },
    { name: "Cherry", price: "$5.49" },
    { name: "Blueberry", price: "$6.99" },
    { name: "Lemon", price: "$1.89" },
    { name: "Raspberry", price: "$4.99" },
    { name: "Plum", price: "$2.79" },
    { name: "Avocado", price: "$8.99" },
    { name: "Apricot", price: "$4.79" },
    { name: "Coconut", price: "$6.99" },
  ];

  const addToCart = (fruit) => {
    setCart([...cart, {...fruit }]);
  };

  return (
    <>
      <div className="bg-black p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fruits.map((fruit, index) => (
            <div
              key={index}
              className="bg-white hover:bg-slate-100 p-4 rounded-md shadow-md text-center cursor-pointer"
              onClick={() => addToCart(fruit)}
            >
              <h3 className="text-lg font-semibold mb-2">{fruit.name}</h3>
              <p className="text-gray-600">{`Price: ${fruit.price}`}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-white mt-9 font-mono text-6xl font-medium text-stone-300 italic">
            Your Cart
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cart.map((cartItem, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{cartItem.name}</h3>
              <p className="text-gray-600">{`Price: ${cartItem.price}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Second;
