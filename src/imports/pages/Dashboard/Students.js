import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getStudents,removeStudent } from "../../../services/students";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const Students = props => {
	const classes = useStyles();
	const { students } = props;
	useEffect(() => {
		if (!props.students) {
			getStudents();
		}
	});
	function FormRow({ student }) {
		const { users_name, users_uname, users_id } = student;

		return (
			<React.Fragment>
				<Card style={{ padding: 20 }}>
					<CardContent>
						<div>Name : {users_name}</div>
						<br></br>
						<div>Username : {users_uname}</div>
					</CardContent>
					<div style={{ float: "right" }}>
						<CardActions>
							<Button
								onClick={() => {
									onRemoveStudent(users_id);
								}}
								size="small"
								variant="contained"
								color="secondary">
								REMOVE
							</Button>
						</CardActions>
					</div>
				</Card>
			</React.Fragment>
		);
	}

	const onRemoveStudent = id => {
		removeStudent(id);
	};

	return (
		<div>
			{students ? (
				<div>
					<div className="row">
						<Grid container spacing={1}>
							{students.map((student, i) => {
								return (
									<div key={i} className="col-lg-3 col-sm-12 col-md-6 mt-5">
										<FormRow   student={student} />
									</div>
								);
							})}
						</Grid>
					</div>
				</div>
			) : (
				"Loading"
			)}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { students: state.models.Students };
};

export default connect(mapStateToProps)(Students);
