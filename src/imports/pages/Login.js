import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useLoginStyles } from "./utils/css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { isLogin } from "../../services/login";
import { connect } from 'react-redux'
import { history } from 'react-router-dom'

const Login = (props) => {

	const classes = useLoginStyles();
	const [credentials, setCredentials] = useState({ userName: '', passWord: '' })

	const onLogin = (e) => {
		e.preventDefault()
		isLogin(credentials)
	}
	useEffect(() => {

		if (props.user) {

			props.history.push("/dashboard")
		}
	});

	return (
		<Container maxWidth="xs" >
			<div style={{ marginTop: '20%' }}>
				<Card style={{ padding: 20 }}>
					<CardContent>
						<CssBaseline />
						<div>
							<div className={classes.paper}>
								<Avatar className={classes.avatar}>
									<LockOutlinedIcon />
								</Avatar>
								<Typography component="h1" variant="h5">
									Sign in
							</Typography>
								<form onSubmit={onLogin} className={classes.form}  >
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										autoFocus
										onChange={(e) => {
											const userName = e.target.value
											setCredentials(prevState => ({ userName: userName, passWord: prevState.passWord }));
										}}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										onChange={(e) => {
											const passWord = e.target.value
											setCredentials(prevState => ({ userName: prevState.userName, passWord: passWord }));
										}}
										autoComplete="current-password"
									/>

									<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
										Sign In
									</Button>
								</form>
							</div>
						</div>
					</CardContent>

				</Card>
			</div>
		</Container>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { user: state.models.Users }
}

export default connect(
	mapStateToProps,
)(Login)