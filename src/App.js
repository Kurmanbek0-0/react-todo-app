import "./App.css";
import { Container } from "@mui/material";
import Table from "./component/tablle/Table";
import { useEffect, useState } from "react";
import { getUsersAction } from "./component/common/getUsersAction";
import axios from "axios";
import Form from "./component/form/Form";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://64340de21c5ed06c958dd2da.mockapi.io/users")
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Form />

        <Table />
      </Container>
    </div>
  );
}

export default App;
