import { useState } from "react";
import Card from "./Card";
import { restaurantList } from "./data.js";

export default function Body() {
  const [sort1, setSort] = useState(restaurantList);
  const [dispaly, setdis] = useState(restaurantList);
  const [searchText, stseach] = useState("");
  const [fil, setfilter] = useState();

  function sorting() {
    console.log("df");
    const res = sort1.sort((a, b) => a.data.costForTwo - b.data.costForTwo);
    setSort([...dispaly]);
  }
  function fill() {
    const res = restaurantList.filter((v) => v.data.costForTwo / 100 > 250);
    setfilter(res);
    setdis(res);
  }
  function seaching() {
    const responsr = restaurantList.filter((value) =>
      value.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setdis(responsr);
  }
  return (
    <>
      <div className="body1">
        <div className="seachbar"><input 
          type="text"
          placeholder="Search restaurants"
          value={searchText}
          onChange={(e) => stseach(e.target.value)}
          
        />
        <button onClick={seaching}>Search</button></div>
        <button className="btn" onClick={() => sorting()}>
          Sort
        </button>
        <button className="btn" onClick={() => fill()}>
          Filter
        </button>
        
        <div>
          <div className="res-Card">
            <Card resCard={dispaly}></Card>
          </div>
        </div>
      </div>
    </>
  );
}
