import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import deleteImg from "../../../Image/delete.png";
import Navbar from "../../Shared/Navbar/Navbar";

const ServiceList = () => {
  const [order, setOrder] = useState([]);
  //this state for page reload auto
  const [removeId, setRemoveId] = useState(0);

  //for delete
  const handleRemove = (id) => {
    // console.log('deleted',id);
    fetch(`https://sleepy-retreat-41418.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log('deleted successfully');
      });
    alert("successfully delete");
    setRemoveId(id);
  };

  useEffect(() => {
    fetch("https://sleepy-retreat-41418.herokuapp.com/getOrder")
      .then((res) => res.json())
      .then((result) => {
        setOrder(result);
      });
  }, [removeId]);
  console.log(order, "here is order");
  return (
    <main>
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <table class="table mt-3">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">NAME</th>
                  <th scope="col">GMAIL</th>
                  <th scope="col">SERVICE</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>

              <tbody>
                {order.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>{data.Service}</td>
                    <td>
                      <img
                        style={{ height: "25px", width: "25px" }}
                        onClick={() => handleRemove(data._id)}
                        src={deleteImg}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceList;
