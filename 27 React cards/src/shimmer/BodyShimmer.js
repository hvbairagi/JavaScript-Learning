import RestaurantShimmer from "./RestaurantShimmer";
import "../components/body.css";

const BodyShimmer = () => {
  return (
    <>
      <div className="container d-flex justify-content-around  mb-4">
        <div
          className="pulse"
          style={{ backgroundColor: "#B2BEB5", height: "2rem", width: "10rem" }}
        ></div>
        <div className="w-25 d-flex justify-content-between">
          <div
            className="pulse"
            style={{
              backgroundColor: "#B2BEB5",
              height: "2rem",
              width: "8rem",
            }}
          ></div>
          <div
            className="pulse"
            style={{
              backgroundColor: "#B2BEB5",
              height: "2rem",
              width: "8rem",
            }}
          ></div>
        </div>
        <div></div>
      </div>

      <div
        style={{ backgroundColor: "#fefefe" }}
        className="pulse container d-flex flex-wrap min-vh-100"
      >
        <RestaurantShimmer />
        <RestaurantShimmer />
        <RestaurantShimmer />
        <RestaurantShimmer />
        <RestaurantShimmer />
        <RestaurantShimmer />
      </div>
    </>
  );
};

export default BodyShimmer;
