import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("use Effect Called");
    const timer = setInterval(() => {
      console.log("Use Effect Interval");
    }, 2000);

    return () => {
      console.log("Use Effect Return will be called");
      clearInterval(timer);
    };
  }, []);

  console.log("initial render triggered");
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: TamilNadu</h3>
      <h3>Contact: krishna@gmail.com</h3>
    </div>
  );
};

export default User;
