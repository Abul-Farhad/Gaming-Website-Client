const Card = ({ cardGame }) => {
  const { slug, name, background_image } = cardGame;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={background_image}
            alt="Shoes"
            className="h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
