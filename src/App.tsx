//import Message from "./Message";
import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  let counties = ["India", "Bangladesh", "Japan", "USA", "UK"];
  let cities = ["New York", "Sylhet", "Dhaka", "Delhi", "Mumbai"];
  const [alertVisiable, setAlertVisivility] = useState(false);
  const handelSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisiable && (
        <Alert onClick={() => setAlertVisivility(false)}>My Alert</Alert>
      )}
      <Button color="info" onClick={() => setAlertVisivility(true)}>
        My Button
      </Button>
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
