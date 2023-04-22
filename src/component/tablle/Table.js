import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";


export default function BasicTable({ users, getUsers }) {
  function removeUser(id) {
    axios.delete(`https://64340de21c5ed06c958dd2da.mockapi.io/users/${id}`).then(({data}) => {
      alert("Удалено!")
      getUsers();
    });
  }
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>ФИО</TableCell>
						<TableCell align="right">ВОЗРАСТ</TableCell>
						<TableCell align="right">ДОЛЖНОСТЬ</TableCell>
						<TableCell align="right">ОПЫТ РАБОТЫ</TableCell>
						<TableCell align="right">ДЕЙСТВИЕ</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow
							key={user.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{user.name}
							</TableCell>
							<TableCell align="right">{user.age}</TableCell>
							<TableCell align="right">{user.job}</TableCell>
							<TableCell align="right">{user.experience}</TableCell>
							<TableCell align="right">
								<Button variant="contained" color="error" onClick={() => removeUser(user.id)}>
									Удалить
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
