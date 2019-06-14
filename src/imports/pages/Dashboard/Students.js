import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { getStudents } from "../../../services/students";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Students = props => {
    const classes = useStyles();

    const { students } = props
    useEffect(() => {
        if (!props.students) {
            getStudents();
        }

    });
    function FormRow({ name, username }) {
        return (
            <React.Fragment>
                <Grid item xs={4}  >
                    <Card style={{ padding: 20 }}>
                        <CardContent>
                            <div>Name : {name}</div>
                            <br></br>
                            <div>Username : {username}</div>

                        </CardContent>
                        <div style={{ float: 'right' }}>
                            <CardActions>
                                <Button size="small" variant="contained" color="secondary">REMOVE</Button>
                            </CardActions>
                        </div>
                    </Card>

                </Grid>

            </React.Fragment>
        );
    }

    return (
        <div>
            {
                students ?
                    <div>

                        <div className={classes.root}>
                            <Grid container spacing={1}>
                                {
                                    students.map((student, i) => {


                                        return <FormRow key={i} name={student.users_name} username={student.users_uname} />
                                    }
                                    )
                                }
                            </Grid>
                        </div>
                    </div>
                    : "Loading"
            }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { students: state.models.Students };
};

export default connect(mapStateToProps)(Students);
