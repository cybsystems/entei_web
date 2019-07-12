import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import {
    InputLabel,
    Input,
    FormHelperText,
    Container
} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FileDropzoneArea from "./FileDropzoneArea";

export default class VideoUploadForm extends Component {
    state = {
        selectedClass: 0,
        selectedCategory: 0,
        title: "",
        desc: ""
    };
    constructor() {
        super();
        this.files = [];
    }
    onFileDrop = files => {
        this.files = files;
    };
    onUploadClicked = () => {
        const { title, selectedCategory, selectedClass, desc } = this.state
        this.props.onUploadClicked({ files: this.files, title, desc, selectedCategory, selectedClass });
    };
    render() {
        return (
            <React.Fragment>
                <Card style={{ paddingBottom: 20 }}>
                    <CardHeader title="Upload Video" />
                    <Divider variant="middle" />

                    <CardContent style={{ width: "100%" }}>
                        <Container style={{ marginLeft: "10%" }}>
                            <div className="row">
                                <FormControl style={{ width: "40%" }}>
                                    <InputLabel htmlFor="my-input">Video Title</InputLabel>
                                    <Input
                                        id="my-input"
                                        ref="title"
                                        aria-describedby="my-helper-text"
                                        onChange={e => {
                                            this.setState({ title: e.target.value });
                                        }}
                                    />
                                </FormControl>
                                <FormControl style={{ width: "40%", marginLeft: 20 }}>
                                    <InputLabel htmlFor="my-input">Video Description</InputLabel>
                                    <Input
                                        onChange={e => {
                                            this.setState({ desc: e.target.value });
                                        }}
                                        id="my-input"
                                        ref="desc"
                                        aria-describedby="my-helper-text"
                                    />
                                </FormControl>
                            </div>
                            <div className="row" style={{ marginTop: "2%" }}>
                                <FormControl style={{ width: "40%" }}>
                                    <InputLabel htmlFor="age-helper">Select Class</InputLabel>
                                    <Select
                                        onChange={event => {
                                            this.setState({ selectedClass: event.target.value });
                                        }}
                                        value={this.state.selectedClass}
                                    >
                                        <MenuItem value="0">
                                            <em>None</em>
                                        </MenuItem>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((std, i) => (
                                            <MenuItem key={i} value={std}>
                                                {std}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl style={{ width: "40%", marginLeft: 20 }}>
                                    <InputLabel htmlFor="age-helper">Select Category</InputLabel>
                                    <Select
                                        onChange={event => {
                                            this.setState({ selectedCategory: event.target.value });
                                        }}
                                        value={this.state.selectedCategory}
                                    >
                                        <MenuItem value="0">
                                            <em>None</em>
                                        </MenuItem>
                                        {[
                                            { label: "Marathi Med.", value: "MARATHI_MED" },
                                            { label: "Semi English Med.", value: "SEMI_ENGLISH_MED" },
                                            { label: "CBSCE", value: "CBSCE" },
                                            { label: "ICSE", value: "ICSE" }
                                        ].map((item, i) => (
                                            <MenuItem key={i} value={item.value}>
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </Container>

                        <div style={{ margin: "5%" }}>
                            <FileDropzoneArea
                                onFileDrop={this.onFileDrop}
                                text="Drag and drop an video file here or click"
                            />
                        </div>
                    </CardContent>

                    <Divider variant="middle" />
                    <CardContent>
                        <div style={{ float: "right" }}>
                            <Button
                                size="lg"
                                onClick={this.onUploadClicked}
                                variant="contained"
                                color="secondary"
                            >
                                Upload
              </Button>
                        </div>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}
