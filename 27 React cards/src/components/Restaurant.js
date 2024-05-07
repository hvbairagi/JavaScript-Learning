const Restaurant = ({ name, price, rating, image }) => {
  return (
    <div className="w-50">
      <img src={image} alt="food-image" className="w-50" />
      <p>Name: {name}</p>
      <p>Price: ₹{price}</p>
      <p>Rating: ☆{rating}</p>
    </div>
  );
};

export default Restaurant;
