import React, { useState } from "react";
import Rest from "../../utils/serverSetup";

const InputImage = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  const onChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  const onUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", selectedFile);

    let res = await Rest.imagePost("/common/imageUpload", formData);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={onUpload}>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default InputImage;
