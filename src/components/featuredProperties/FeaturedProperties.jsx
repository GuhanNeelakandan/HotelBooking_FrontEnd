import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("https://bookinghotelapi-app.herokuapp.com/getallhotel?featured=true&limit=4");

  return (
    <div className="fp">
      {
        loading ? "Loading" :
          <>
            {
              data.map((item) => (
                <div className="fpItem" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="fpImg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">Starting from &#x20b9;{item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button className="rating">{item.rating}</button>
                    <span className="">Excellent</span>
                  </div>}
                </div>
              ))
            }
          </>
      }
    </div>
  );
};

export default FeaturedProperties;
