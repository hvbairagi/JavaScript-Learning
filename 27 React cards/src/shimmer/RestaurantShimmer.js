import "../components/body.css";

const RestaurantShimmer = () => {
  return (
    <div className="w-50">
      <img
        style={{ backgroundColor: "#B2BEB5", height: "20rem" }}
        className="w-50 pulse"
      />
      <p
        className="mt-2 pulse"
        style={{ backgroundColor: "#B2BEB5", height: "1rem", width: "5rem" }}
      ></p>
      <p
        className="pulse"
        style={{ backgroundColor: "#B2BEB5", height: "1rem", width: "5rem" }}
      ></p>
      <p
        className="pulse"
        style={{ backgroundColor: "#B2BEB5", height: "1rem", width: "5rem" }}
      ></p>
    </div>
  );
};

export default RestaurantShimmer;
