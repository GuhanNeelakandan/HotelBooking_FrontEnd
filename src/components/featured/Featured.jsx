import useFetch from "../../hooks/useFetch";
import "./featured.css";


const Featured = () => {
  const { data, loading, error}=useFetch("https://bookinghotelapi-app.herokuapp.com/countByCity?cities=chennai,kancheepuram,ecr");
  return (
    <div className="featured">
      {loading ? "page is loading":
      <>
      <div className="featuredItem">
        <img
          src="https://pix8.agoda.net/hotelImages/6165827/0/232dc6af1dc9dcb9b89a172bee31a369.jpg?ca=23&ce=0&s=375x"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://pix8.agoda.net/hotelImages/561/5612921/5612921_18080319580067278194.jpg?ca=0&ce=1&s=450x450"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kancheepuram</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://pix8.agoda.net/hotelImages/817/817080/817080_15062519290030871982.jpg?ca=4&ce=1&s=375x"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>ECR</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>}
    </div>
  );
};

export default Featured;
