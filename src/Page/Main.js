import React, { useState, useEffect } from "react";
import Card from "../Component/Card";
import "./Main.css";

const Main = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const newdata = await fetch(`https://fakestoreapi.com/products`);
      const newdata1 = await newdata.json();
      setState(newdata1);
      console.log(newdata1);
    }

    fetchdata();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="main-container">
        {state.map((ele) => {
          return (
            <Card
              key={ele.id}
              category={ele.category}
              image={ele.image}
              title={ele.title}
              price={ele.price}
              rating={ele.rating.rate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
