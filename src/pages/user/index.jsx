import React, { useEffect, useState } from "react";
import AccountCard from "../../components/AccountCard/AccountCard";
import { API_TEST } from "../../utils/globalConst";

export const getServerSideProps = async (ctx) => {
    try {
      const accountsData = await fetch(
        `${API_TEST}/api/user/accounts/${ctx.query.dni}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!accountsData) {
        return {
          statusCode: 503,
        };
      }
      const  {accounts}  = await accountsData.json();
  
      return {
        props: {
          accounts,
          statusCode: 200,
        },
      };
    } catch (e) {
      ctx.statusCode = 503;
      return {
        props: {
          statusCode: 503,
        },
      };
    }
  };

const index = ({accounts}) => {
  const [userData, setUserData] = useState({
    "": "",
  });

  const setSessionData = async () => {
    setUserData(await JSON.parse(sessionStorage.getItem("userData")));
    
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
