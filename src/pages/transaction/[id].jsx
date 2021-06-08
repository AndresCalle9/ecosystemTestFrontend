import React from "react";
import fetchApi from "../../utils/fetchApi";

import formatterPeso from "../../utils/formatterPeso";
import formatterUsd from "../../utils/formatterUsd";
import s from "../../styles/pages/transaction.module.scss"

export const getServerSideProps = async (ctx) => {
  try {

    const transactionData = await fetchApi(`api/user/accounts/transaction/${ctx.params.id}/${ctx.query.dni}/${ctx.query.acc}`, "GET");

    if (!transactionData) {
      return {
        statusCode: 503,
      };
    }
    const { transactionDetails } = await transactionData.json();

    return {
      props: {
        transactionDetails,
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

function transaction({ transactionDetails }) {
  const { amount, currency, date, state, type, id } = transactionDetails;
  const price =
    currency == "COP" ? formatterPeso(amount) : formatterUsd(amount);
  return (
    <div className={s.container}>
      <h2>Transaction id {id}</h2>
      <p>
        <b>Status: </b>
        {state ? "Successfull" : "Pending"}
      </p>
      <p>
        <b>Amount: </b>
        {price}
      </p>
      <p>
        <b>Date: </b>
        {date}
      </p>
      <p>
        <b>Type: </b>
        {type}
      </p>
    </div>
  );
}

export default transaction;
