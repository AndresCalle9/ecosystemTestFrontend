import React, { useEffect, useState } from "react";
import AccountCard from "../../components/AccountCard/AccountCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import fetchApi from "../../utils/fetchApi";
import s from "../../styles/pages/user.module.scss";
import Link from "next/link";


export const getServerSideProps = async (ctx) => {
  try {
    const accountsData = await fetchApi(
      `api/user/accounts/${ctx.query.dni}`,
      "GET"
    );
    const productsData = await fetchApi(
      `api/user/products/${ctx.query.dni}`,
      "GET"
    );

    if (!accountsData || !productsData) {
      return {
        statusCode: 503,
      };
    }
    const { accounts } = await accountsData.json();
    const { products } = await productsData.json();


    return {
      props: {
        accounts,
        products,
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

const index = ({ accounts, products}) => {
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
    <div className={s.container}>
      <h1>{userData.Name}</h1>
      <div className={s.subcontainer}>
        <h2>Personal Information</h2>
        <p>Dni: {userData.Dni}</p>
      </div>

      <h2>Account Bank Information</h2>
      <div className={s.accountsContainer}>
        {accounts.map((item) => {
          return <AccountCard info={item} key={item.id} dni={userData.Dni} />;
        })}
      </div>
      <h2>Products Requested</h2>
      <div className={s.accountsContainer}>
        {products.map((item) => {
          return <ProductCard info={item.product} status={item.status} date={item.date} key={item.date}/>;
        })}
      </div>
      <Link href = {`/newproduct?dni=${userData.Dni}`} >
        <a>
          <button className="button">Add new product</button>
        </a>
      </Link>
    </div>
  );
};

export default index;
