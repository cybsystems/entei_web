import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getVideos, removeVideo } from "../../../services/videos";
import VideoDialog from "../../components/VideoDialog";
import VideoUploadForm from "../../components/VideoUploadForm";
import VideoCard from "../../components/VideoCard";
import LinearProgress from '@material-ui/core/LinearProgress';

const Videos = props => {
    const { videos } = props;

    const [showVideo, setShowVideo] = useState({ open: false, selectedVideo: null })
    const [uploadPercentage, setUploadPercentage] = useState(0);

    useEffect(() => {
        if (!videos) {
            getVideos();
        }
    });



    const onVideoRemove = id => {
        removeVideo(id)
    };

    const onVideoShow = id => {
        const video = videos.filter((video) => video.videos_id == id)[0]
        setShowVideo(prevState => ({ selectedVideo: video, open: true }));
    }
    const onUploadClicked = ({ files, title, desc, selectedCategory, selectedClass }) => {
        let file = files[0];
        let formData = new FormData();
        formData.append("file", file);
        formData.append("info", JSON.stringify({ vname: title, category: selectedCategory, class: selectedClass, desc: desc }));
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => { getVideos() }, false);
        ajax.upload.addEventListener("progress", (event) => {
            let percent = (event.loaded / event.total) * 100;
            setUploadPercentage(() => { return percent == 100 ? 0 : percent })
        }
            , false);
        ajax.open("POST", "http://bhoomi.pe.hu/entei/upload.php");
        ajax.send(formData);
    }

    const onDialogClose = () => setShowVideo((prevState) => ({ open: false }))
    return (
        <div>
            {uploadPercentage ?
                <LinearProgress variant="determinate" value={uploadPercentage} /> : ''}

            <VideoUploadForm onUploadClicked={onUploadClicked} />

            {videos ? (
                <div>

                    <VideoDialog video={showVideo.selectedVideo} open={showVideo.open} onDialogClose={onDialogClose} />

                    <div className="row">
                        <Grid container spacing={1}>
                            {videos.map((video, i) => {
                                return (
                                    <div key={i} className="col-lg-6 col-sm-12 col-md-12 mt-5">
                                        <VideoCard onVideoShow={onVideoShow} onVideoRemove={onVideoRemove} video={video} />
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
