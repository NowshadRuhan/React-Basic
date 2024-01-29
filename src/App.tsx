//import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let counties = ["India", "Bangladesh", "Japan", "USA", "UK"];
  let cities = ["New York", "Sylhet", "Dhaka", "Delhi", "Mumbai"];

  const handelSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={counties}
        heading="Counties"
        onSelectedItem={handelSelectedItem}
      />
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={handelSelectedItem}
      />
    </div>
  );
}

export default App;
