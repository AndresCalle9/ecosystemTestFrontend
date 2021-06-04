import React, { useState } from "react";
import fetchApi from "../utils/fetchApi";
import { useRouter } from "next/router";
import swal from "@sweetalert/with-react";

const index = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    dni: "",
    password: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    dni: "",
    password: "",
  });
  const [newUserFlag, setNewUserFlag] = useState(false);
  const [loginFlag, setloginFlag] = useState(false);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputLoginChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const sendUser = async (e) => {
    e.preventDefault();

    const res = await fetchApi("api/user/create", "POST", user);
    console.log(res);
    if (res.status === 201) {
      swal({
        title: "Success",
        text: "User created successfully",
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
      router.push("/");
    } else {
      swal({
        title: "Error",
        text: "Something went wrong, please try again",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      router.push("/");
    }
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await fetchApi("api/user/login", "POST", loginInfo);
      if (res.status === 200) {
        swal({
          title: "Success",
          text: "Login was successfully",
          icon: "success",
          buttons: true,
          dangerMode: false,
        });
        router.push("/user");
      } else {
        swal({
          title: "Error",
          text: "Dni or Password invalid",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
        router.push("/");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      {newUserFlag && (
        <div>
          <h1>Sing Up</h1>
          <form onSubmit={sendUser}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              required
            />
            <label>Dni</label>
            <input
              type="text"
              placeholder="Dni"
              name="dni"
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              required
            />
            <button className="button" type="submit">
              Create User
            </button>
          </form>
        </div>
      )}

      {loginFlag && (
        <div>
          <h1>Log In</h1>
          <form onSubmit={login}>
            <label>Dni</label>
            <input
              type="text"
              placeholder="Dni"
              name="dni"
              onChange={handleInputLoginChange}
              required
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleInputLoginChange}
              required
            />
            <button className="button" type="submit">
              Log In
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default index;
