import { useEffect, useState } from "react";
import Card from "../Card/Card";

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

  return (
    <div>
      <h1>Total Games: {games.length}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {games.map((game) => (
          <Card key={game.GameId} cardGame={game}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
