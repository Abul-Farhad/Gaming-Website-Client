const AddGame = () => {
  const addGame = (event) => {
    event.preventDefault();
    const form = event.target;
    const GameName = form.name.value;
    const GameImage = form.image_url.value;
    const GameRating = form.rating.value;
    const GamePrice = form.price.value;
    const gameData = { GameName, GameImage, GameRating, GamePrice };
    console.log(gameData);

    fetch("http://127.0.0.1:8000/gameapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Game Added Successfully!");
        console.log(data);
      });
  };

  return (
    <div>
      <h3>Add Game</h3>
      <div>
        <form onSubmit={addGame} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
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
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              value="Add Game"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
