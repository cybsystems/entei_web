import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getVideos, removeVideo } from "../../../services/videos";
import Button from "@material-ui/core/Button";
import VideoDialog from "../../components/VideoDialog";

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

const Videos = props => {
    const { videos } = props;
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        if (!videos) {
            getVideos();
        }
    });
    function VideoCard({ video }) {
        const { videos_title, videos_desc, videos_id } = video;

        return (
            <React.Fragment>

                <Card style={{ padding: 20 }}>
                    <CardContent>
                        <div>Name : {videos_title}</div>
                        <br></br>
                        <div>Discription : {videos_desc}</div>
                    </CardContent>
                    <div style={{ float: "right" }}>
                        <CardActions>

                            <Button
                                onClick={() => {
                                    onVideoShow(videos_id)
                                }}
                                size="small"
                                variant="contained"
                                color="primary">
                                SHOW
							</Button>
                            <Button
                                onClick={() => {
                                    onVideoRemove(videos_id);
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

    const onVideoRemove = id => {
        removeVideo(id)
    };

    const onVideoShow = id => {
        const video = videos.filter((video) => video.videos_id == id)
        setShowVideo(true);
    }
    const onDialogClose = () => setShowVideo(false)
    return (
        <div>
            {videos ? (
                <div>

                    <VideoDialog open={showVideo}  onDialogClose={onDialogClose} />

                    <div className="row">
                        <Grid container spacing={1}>
                            {videos.map((video, i) => {
                                return (
                                    <div key={i} className="col-lg-3 col-sm-12 col-md-6 mt-5">
                                        <VideoCard video={video} />
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
    return { videos: state.models.Videos };
};

export default connect(mapStateToProps)(Videos);
