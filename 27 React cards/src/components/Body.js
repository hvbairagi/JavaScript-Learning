import Restaurant from "./Restaurant";

const Body = () => {
  const restaurants = [
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

  return (
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
  );
};

export default Body;
