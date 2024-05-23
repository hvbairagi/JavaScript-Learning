import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { data } from "./data";
import "./body.css";
import BodyShimmer from "../shimmer/BodyShimmer";

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
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [query, setQuery] = useState("");

  const filterRestaurants = () => {
    setRestaurants((res) => res.filter((r) => r.rating > 4.4));
  };

  const queryHandler = (q) => {
    setQuery(q);
  };

  const searchHandler = () => {
    console.log("query: ", query);
    const result = restaurants.filter((r) =>
      r.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRestaurants(result);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRestaurants(initialRestaurants);
  //     setFilteredRestaurants(initialRestaurants);
  //   }, 2000);
  // }, [restaurants, filteredRestaurants]);

  // useEffect(() => {
  //   fetch("./data.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  if (restaurants.length === 0) return <BodyShimmer />;

  return (
    <>
      <div className="container d-flex justify-content-around  mb-4">
        <button onClick={filterRestaurants}>Filter rating {">"} 4.2</button>
        <div className="w-25 d-flex justify-content-between">
          <input
            type="text"
            value={query}
            onChange={(e) => queryHandler(e.target.value)}
          />

          <button onClick={searchHandler}>Search</button>
        </div>
      </div>

      <div className="container d-flex flex-wrap min-vh-100">
        {filteredRestaurants.map((r, key) => (
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

// console.log(
//   res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
// );
[
  {
    info: {
      id: "581971",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Airport Road",
    },
  },
];
