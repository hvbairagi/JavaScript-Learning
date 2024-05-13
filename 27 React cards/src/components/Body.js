import { useState } from "react";
import Restaurant from "./Restaurant";

const initialRestaurants = [
  {
    name: "Pizzaoprium",
    price: 299,
    rating: 4.3,
    image:
      "https://www.shutterstock.com/shutterstock/photos/84904912/display_1500/stock-photo-supreme-pizza-lifted-slice-84904912.jpg",
  },
  {
    name: "Ramesh Dosa",
    price: 299,
    rating: 4.5,
    image:
      "https://www.shutterstock.com/image-photo/paper-masala-dosa-south-indian-600nw-1008144772.jpg",
  },
  {
    name: "Karnawat",
    price: 299,
    rating: 2.9,
    image: "https://thumbs.dreamstime.com/b/indian-thali-26440151.jpg",
  },
  {
    name: "Pizzaoprium",
    price: 299,
    rating: 4.3,
    image:
      "https://www.shutterstock.com/shutterstock/photos/84904912/display_1500/stock-photo-supreme-pizza-lifted-slice-84904912.jpg",
  },
  {
    name: "Ramesh Dosa",
    price: 299,
    rating: 4.5,
    image:
      "https://www.shutterstock.com/image-photo/paper-masala-dosa-south-indian-600nw-1008144772.jpg",
  },
  {
    name: "Karnawat",
    price: 299,
    rating: 2.9,
    image: "https://thumbs.dreamstime.com/b/indian-thali-26440151.jpg",
  },
];

const Body = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const filterRestaurants = () => {
    setRestaurants((res) => res.filter((r) => r.rating > 4.4));
  };

  return (
    <>
      <button onClick={filterRestaurants}>Filter rating {">"} 4.2</button>
      <div className="container d-flex flex-wrap min-vh-100">
        {restaurants.map((r, key) => (
          <Restaurant
            key={key}
            image={r.image}
            name={r.name}
            price={r.price}
            rating={r.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
