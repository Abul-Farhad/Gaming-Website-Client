import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/cartapi/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        console.log(data);
        let price = 0;
        data.forEach((item) => (price += parseFloat(item.GamePrice)));
        setTotalPrice(price);
      });
  }, [user]);

  const handleDelete = (id, price) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/cartapi/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const updatedCart = cartItems.filter((item) => item.CartId !== id);
            setCartItems(updatedCart);
            alert("Item Deleted Successfully!");
            setTotalPrice(totalPrice - price);
          });
      }
    });
  };
  return (
    <div>
      <h3>Total cart Items: {cartItems?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItems.map((item) => (
              <tr key={item.CartId}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.GameImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.GameName}</div>
                      <div className="text-sm opacity-50">
                        Rating: {item.GameRating}
                      </div>
                    </div>
                  </div>
                </td>
                <td>${item.GamePrice}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item.CartId, item.GamePrice)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th className="text-lg">Total: ${totalPrice}</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
