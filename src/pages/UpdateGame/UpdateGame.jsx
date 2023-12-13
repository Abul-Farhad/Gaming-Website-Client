import { useLoaderData } from "react-router-dom";

const UpdateGame = () => {
  const { GameId, GameName, GameRating, GameImage, GamePrice } =
    useLoaderData();
  const update = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image_url.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const updatedGame = {
      GameId,
      GameName: name,
      GameImage: image,
      GameRating: rating,
      GamePrice: price,
    };
    console.log(updatedGame);
    fetch("http://127.0.0.1:8000/gameapi", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGame),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  };
  return (
    <div>
      <h3 className="text-4xl font-bold text-center">Update Game</h3>
      <div>
        <form onSubmit={update} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={GameName}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Image</span>
            </label>
            <input
              type="text"
              name="image_url"
              placeholder="image_url"
              defaultValue={GameImage}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating"
              defaultValue={GameRating}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="$"
              defaultValue={GamePrice}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              value="Update Game"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateGame;
