import React, { useState } from "react";
import { toast } from "react-toastify";
import authService from "../../services/authService";
import { apiEndPoint } from "../../config.json";
import { useEffect } from "react";
function FormUserEdit({ user }) {
  const initial = {
    phone: user.phone,
    address: user.address ? user.address : "",
    avatar: user.avatar ? apiEndPoint + user.avatar : "",
  };
  const [inputs, setInputs] = useState({});
  const [preview, setPreview] = useState("");
  const handleChange = (e) => {
    const userInputs = { ...inputs };
    userInputs[e.currentTarget.name] = e.currentTarget.value;
    setInputs(userInputs);
  };
  const handleUpload = (e) => {
    const userInputs = { ...inputs };
    userInputs.avatar = e.currentTarget.files[0];
    setPreview(URL.createObjectURL(e.currentTarget.files[0]));
    setInputs(userInputs);
  };
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    console.log("Submit");
    try {
      await authService.editMe(inputs);
      toast.success("User edited!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid inputs");
      }
      if (error.response && error.response.status === 401) {
        toast.error("Your session have ended");
      }
    }
  };

  const getInitialInputs = () => {
    setInputs(initial);
    setPreview(initial.avatar);
  };

  useEffect(() => {
    getInitialInputs();
  }, [user]);
  return (
    <>
      <button
        type="button"
        className="btn user-info-edit my-1"
        data-toggle="modal"
        data-target="#editUserInfo"
      >
        <i className="fas fa-edit"></i> Edit your info
      </button>

      <div
        className="modal fade"
        id="editUserInfo"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editUserInfoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editUserLabel">
                {user.name}
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => handleSubmit(e, user._id)}>
                <div className="form-group">
                  <label htmlFor="editPhone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    defaultValue={inputs.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="editAddress">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    defaultValue={inputs.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="editAvatar">Avatar</label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="avatar"
                    onChange={handleUpload}
                  />
                  <img
                    src={preview}
                    alt=""
                    style={{
                      width: "100px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-save mx-1">
                  <i className="fas fa-save"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-close mx-1"
                  data-dismiss="modal"
                  onClick={() => setInputs(initial)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </form>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormUserEdit;
