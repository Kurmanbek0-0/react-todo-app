import { Typography, AppBar, TextField, Button } from "@mui/material";
import * as React from "react";
import axios from "axios";
import BasicModal from "./FormModal";

export default function FormControlBar() {
  const [data, setData] = React.useState({ name: "", avatar: "" });

  function onChangeName(props) {
    const { name, value } = props;
    setData({ ...data, [name]: value });
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "50px 0",
        alignItems: "center",
      }}
    >
      <TextField
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Поиск"
        name="name"
        onChange={(e) => onChangeName(e.target)}
        variant="outlined"
        value={data.name}
      />
      <Button variant="contained" color="primary" size="large">
        Искать
      </Button>

      <BasicModal />
    </div>
  );
}
