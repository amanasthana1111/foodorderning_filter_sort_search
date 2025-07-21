// import {restaurantList }from "./data.js" 
// const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;"

export default function Card({resCard}) {
    // console.log(resCard)
  return (
    <>
     {resCard.map((value) => {
  return (
    <div className="Card1" key={value.data.id}>
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${value.data.cloudinaryImageId}`}></img>
      <h2>{value.data.name}</h2>
      <h3>{value.data.cuisines.join(" ,")}</h3>
      <h2>Price :{value.data.costForTwo/100}</h2>
      <h2>{value.data.deliveryTime} min</h2>
    </div>
  );
})}

    </>
  );
}
