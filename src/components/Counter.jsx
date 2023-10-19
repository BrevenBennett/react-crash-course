import React, { useState } from "react";

function Counter() {
  const [cart, setCart] = useState({
    item: "apple",
    qauntity: 0,
  });

  function addApple() {
    setCart(prevCart => ({
        ...prevCart,
        qauntity: prevCart.qauntity + 1,
    }))
  }

  function subtractApple() {
    setCart(prevCart => ({
        ...prevCart,
        qauntity: prevCart.qauntity - 1,
    }))
  }

  return (
    <div>
      <button onClick={subtractApple}>-</button>
      {cart.qauntity}
      {cart.item}
      <button onClick={addApple}>+</button>
    </div>
  );
}

export default Counter;
