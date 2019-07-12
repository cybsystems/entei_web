import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

class FileDropzoneArea extends Component {
  render() {
    return (
      <DropzoneArea
        maxFileSize={100000000}
        dropzoneText={this.props.text}
        onChange={this.props.onFileDrop}
      />
    );
  }
}

export default FileDropzoneArea;
