import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	borderRadius: "50%",
	p: 4,
};

export default function BasicModal(getUsers) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [data, setData] = React.useState({ name: "", avatar: "" });

	function onChangeName(props) {
		const { name, value } = props;
		setData({ ...data, [name]: value });
	}

	function changeImg(img) {
		setData({ ...data, avatar: img });
	}

	function onSubmit() {
		axios
			.post("https://64340de21c5ed06c958dd2da.mockapi.io/users", data)
			.then(() => {
				alert("Success");
				handleClose();
        getUsers()
        setData({name: "", avatar: ""})
			});
	}

	return (
		<div>
			<Button
				onClick={handleOpen}
				variant="contained"
				color="secondary"
				size="large"
			>
				Добавить Пользователья
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box style={style}>
					<div
						style={{
							background: "white",
							display: "flex",
							justifyContent: "center",
							textAlign: "center",
							padding: "30px",
						}}
					>
						<form>
							<TextField
								style={{ width: "200px", margin: "5px" }}
								type="text"
								label="ФИО"
								name="name"
								onChange={(e) => onChangeName(e.target)}
								variant="outlined"
								value={data.name}
							/>
							<TextField
								style={{ width: "200px", margin: "5px" }}
								type="text"
								label="Возраст"
								name="age"
								onChange={(e) => onChangeName(e.target)}
								variant="outlined"
								value={data.age}
							/>
							<TextField
								style={{ width: "200px", margin: "5px" }}
								type="text"
								label="Должность"
								name="job"
								onChange={(e) => onChangeName(e.target)}
								variant="outlined"
								value={data.job}
							/>
							<TextField
								style={{ width: "200px", margin: "5px" }}
								type="text"
								label="Опыт работы"
								name="experience"
								onChange={(e) => onChangeName(e.target)}
								variant="outlined"
								value={data.experience}
							/>
							<br />
							<Button
								variant="contained"
								color="primary"
								disabled={!data.name && !data.age && !data.job && !data.experience}
								onClick={onSubmit}
							>
								save
							</Button>
						</form>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
