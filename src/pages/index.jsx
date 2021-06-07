import React, { useState } from "react";
import fetchApi from "../utils/fetchApi";
import { useRouter } from "next/router";
import swal from "@sweetalert/with-react";
import s from "../styles/pages/home.module.scss";

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
  const [loginFlag, setLoginFlag] = useState(false);

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
    if (res.status === 201) {
      swal({
        title: "Success",
        text: "User created successfully",
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
      setLoginFlag(true);
      setNewUserFlag(false);
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
      const data = await res.json();
      if (res.status === 200) {
        swal({
          title: "Success",
          text: "Login was successfully",
          icon: "success",
          buttons: true,
          dangerMode: false,
        });
        await sessionStorage.setItem("id", data.user._id);
        await sessionStorage.setItem("userData", JSON.stringify(data.user));
        await sessionStorage.setItem("session", true);
        await sessionStorage.setItem("token", data.token);
        router.push(`/user?dni=${data.user.Dni}`);
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
    <div className={s.home}>
      <div className={s.homeButtons}>
        <button className="button" onClick={() => setNewUserFlag(!newUserFlag)}>
          Sing Up
        </button>
        <button className="button" onClick={() => setLoginFlag(!loginFlag)}>
          Log In
        </button>
      </div>
      {newUserFlag && (
        <div className={s.container}>
          <h1>Sing Up</h1>
          <form className={s.form} onSubmit={sendUser}>
            <div className={s.subcontainer}>
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
            </div>
          </form>
        </div>
      )}

      {loginFlag && (
        <div className={s.container}>
          <h1>Log In</h1>
          <form className={s.form} onSubmit={login}>
            <div className={s.subcontainer}>
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
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default index;
