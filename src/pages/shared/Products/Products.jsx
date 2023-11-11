import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Products = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=2fda3ad2741f41abb27bc92c8b432c4d")
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);
  console.log(games);

  return (
    <div>
      <h1>Total Games: {games.length}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {games.map((game) => (
          <Card key={game.id} cardGame={game}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
