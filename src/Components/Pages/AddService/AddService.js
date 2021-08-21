import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import uploadImg from "../../../Image/upload.png";
import { useHistory } from "react-router-dom";

const AddService = () => {
  const [addService, setAddService] = useState({});
  const history = useHistory();
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const adminService = { ...addService };
    adminService[e.target.name] = e.target.value;
    setAddService(adminService);
  };

  const handleFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", addService.serviceTitle);
    formData.append("description", addService.serviceDescription);
    formData.append("price", addService.servicePrice);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // e.preventDefault();
        }
      })
      .catch((error) => {
        console.error(error);
      });
    alert("data submitted");
    history.push("/");
    e.preventDefault();
  };

  // console.log(addService);
  // console.log(file);

  return (
    <section className="row mt-5">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8" style={{ backgroundColor: "#F4F7FC" }}>
        <form className="row mt-5" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="title">Service title</label>
            <input
              type="text"
              id="title"
              onBlur={handleChange}
              name="serviceTitle"
              class="form-control mb-3"
            />

            <label for="textArea">Description</label>
            <textarea
              class="form-control mb-3"
              id="textArea"
              rows="3"
              name="serviceDescription"
              onBlur={handleChange}
            />

            <label for="price">Price</label>
            <input
              type="number"
              id="price"
              onBlur={handleChange}
              name="servicePrice"
              class="form-control mb-3"
            />
          </div>
          <div className="col-md-6 mt-2">
            <input
              name="serviceFile"
              id="upload"
              onChange={handleFile}
              type="file"
              hidden
              accept="image/*"
            />
            <label for="upload" className="upload-design">
              {" "}
              <img className="upload-img" src={uploadImg} alt="" /> Choose file
            </label>{" "}
            <br />
            <input
              type="submit"
              value="Submit"
              style={{ width: "120px" }}
              className="btn btn-primary ml-4 mt-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
