import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Swal from "sweetalert2";

const Products = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/gameapi")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        console.log(games);
      });
  }, []);
  console.log(games);

  const handleDelete = (id) => {
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
        fetch(`http://127.0.0.1:8000/gameapi/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const updatedCart = games.filter((item) => item.GameId !== id);
            setGames(updatedCart);
            alert("Item Deleted Successfully!");
          });
      }
    });
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 min-h-max">
        {games.map((game) => (
          <Card
            key={game.GameId}
            cardGame={game}
            handleDelete={handleDelete}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
