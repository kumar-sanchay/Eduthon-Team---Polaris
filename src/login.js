import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

export default function Login() {
	const [userName, setUserName] = useState("");
	console.log(userName);
	const [password, setPassword] = useState("");
	console.log(password);
	const submit = () => {
		const data = { userName, password };
		console.log(data);
	};
	const handleUserName = (event) => {
		setUserName(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div className=" jumbotron d-flex-column justify-content-center align-items-center">
			<h1>Login</h1>
			<div className="Login">
				<TextField variant="standard" placeholder="Username" margin="normal" required onChange={handleUserName} value={userName} />
				<TextField variant="standard" placeholder="Password" margin="normal" required type="password" onChange={handlePassword} value={password} />

				<div className="Button">
					<Button variant="contained" color="primary" onClick={submit}>
						Log In
					</Button>
				</div>
			</div>
		</div>
	);
}
