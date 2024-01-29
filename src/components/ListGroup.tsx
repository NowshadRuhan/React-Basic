import { Fragment } from "react";

function ListGroup() {
  let cities = ["New York", "Sylhet", "Dhaka", "Delhi", "Mumbai"];
  cities = [];
  const getMassages = () => {
    return cities.length === 0 ? "No cities found!" : null;
  };
  return (
    <>
      {/* <Fragment> */}
      <h3>List Group:</h3>
      {getMassages()}
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      {/* </Fragment> */}
    </>
  );
}

export default ListGroup;
