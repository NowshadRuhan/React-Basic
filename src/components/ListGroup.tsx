import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //items = [];
  const getMassages = () => {
    return items.length === 0 && "No cities found!";
  };
  //hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  //event handeler
  //const handelClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {/* <Fragment> */}
      <h3>{heading}</h3>
      {getMassages()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* </Fragment> */}
    </>
  );
}

export default ListGroup;
