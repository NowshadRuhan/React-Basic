//import Message from "./Message";
import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";

function App() {
  let counties = ["India", "Bangladesh", "Japan", "USA", "UK"];
  let cities = ["New York", "Sylhet", "Dhaka", "Delhi", "Mumbai"];

  const handelSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>Hello World!</Alert>
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
