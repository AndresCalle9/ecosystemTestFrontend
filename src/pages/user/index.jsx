import React, { useEffect, useState } from "react";
import AccountCard from "../../components/AccountCard/AccountCard";


const index = () => {
  const [userData, setUserData] = useState({
    "": "",
  });
  const [accounts, setAccounts] = useState([0]);

  const setSessionData = async () => {
    let data = await JSON.parse(sessionStorage.getItem("userData"));
    setUserData(data);
    if (data.Accounts) {
      setAccounts(data.Accounts);
    }
  };

  useEffect(() => {
    setSessionData();
  }, []);

  return (
    <div>
      <h1>{userData.Name}</h1>
      <div>
        <h3>Personal Information</h3>
        <p>Dni: {userData.Dni}</p>
      </div>

      <div>
        <h3>Account Bank Information</h3>
        {accounts.map((item) => {
          return <AccountCard info={item} key={item.id} dni={userData.Dni} />;
        })}
      </div>
    </div>
  );
};

export default index;
