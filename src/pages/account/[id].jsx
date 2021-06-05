import React from "react";
import { API_TEST } from "../../utils/globalConst";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

export const getServerSideProps = async (ctx) => {
  try {
    const transactionsData = await fetch(
      `${API_TEST}/api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!transactionsData) {
      return {
        statusCode: 503,
      };
    }
    const  {transactions}  = await transactionsData.json();

    return {
      props: {
        transactions,
        dni: ctx.query.dni,
        account_id: ctx.params.id,
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

function transactions({ transactions, dni, account_id }) {
  return (
    <div>
    <h1>Transactions of account id: {account_id}</h1>
    <div>
    {transactions.map((item) => {
      return <TransactionCard info={item} key={item.id} dni={dni} acc={account_id}/>;
    })}
    </div>
  </div>
  );
}

export default transactions;
