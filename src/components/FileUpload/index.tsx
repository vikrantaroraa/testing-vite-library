import React from "react";
import { FileUpload } from "canary-design";

function FileUploadExample() {
  return (
    <div>
      <FileUpload
        multiple
        getFiles={(files: unknown) => {
          console.log("files from getFiles: ", files);
        }}
        showImageWall={true}
        showDeleteIcon={true}
        dragging
      />
    </div>
  );
}

export { FileUploadExample };
