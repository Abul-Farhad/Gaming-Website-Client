import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const Card = ({ cardGame, handleDelete }) => {
  const { user, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { GameId, GameName, GameImage, GamePrice, GameRating } = cardGame;
  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    }
    const cartItem = {
      GameId,
      GameName,
      GameImage,
      GamePrice,
      GameRating,
      User: user.email,
    };
    fetch("http://127.0.0.1:8000/cartapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={GameImage} alt="Shoes" className="h-60 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{GameName}</h2>
          <div className="flex justify-between items-center">
            <p>Price: ${GamePrice}</p>
            <ReactStarsRating
              className="flex"
              value={parseFloat(GameRating)}
              isHalf={false}
              isEdit={false}
            ></ReactStarsRating>
          </div>
          {isAdmin ? (
            <div className="flex justify-between items-center">
              <Link to={`/update/${GameId}`} className="btn btn-primary">
                Update
              </Link>
              <button
                onClick={() => handleDelete(GameId)}
                className="btn btn-secondary"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="card-actions justify-end">
              <button onClick={handleAddToCart} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
