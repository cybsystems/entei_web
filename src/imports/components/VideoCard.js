import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function VideoCard({ video, onVideoRemove, onVideoShow }) {
  const { videos_title, videos_desc, videos_id } = video;
  const url = video ? `http://bhoomi.pe.hu/entei/${video.videos_url}` : "";
  return (
    <React.Fragment>
      <Card style={{ padding: 20 }}>
        <CardContent>
          <center>
            <video width="500" controls>
              <source src={url} type="video/mp4" />
            </video>
          </center>
          <div>Name : {videos_title}</div>
          <br></br>
          <div>Description : {videos_desc}</div>
        </CardContent>
        <div style={{ float: "right" }}>
          <CardActions>
            <Button
              onClick={() => {
                onVideoShow(videos_id);
              }}
              size="small"
              variant="contained"
              color="primary"
            >
              SHOW
            </Button>
            <Button
              onClick={() => {
                onVideoRemove(videos_id);
              }}
              size="small"
              variant="contained"
              color="secondary"
            >
              REMOVE
            </Button>
          </CardActions>
        </div>
      </Card>
    </React.Fragment>
  );
}
