import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCartItems = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://127.0.0.1:8000/cartapi/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data);
          console.log(data);
        });
    }
  }, [user]);
  const totalCartItems = cartItems.length;
  let totalPrice = 0;
  for (let i = 0; i < totalCartItems; i++) {
    totalPrice += parseFloat(cartItems[i].GamePrice);
  }
  return { totalCartItems, totalPrice };
};

export default useCartItems;
