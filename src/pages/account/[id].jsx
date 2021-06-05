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
    console.log(transactionsData)
    const  {transactions}  = await transactionsData.json();

    return {
      props: {
        transactions: transactions,
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

function transactions({ transactions }) {
  console.log(transactions);
  return (
    <div>
    <h3>Transactions</h3>
    <div>
    {transactions.transactions.map((item) => {
      return <TransactionCard info={item} key={item.id} />;
    })}
    </div>
  </div>
  );
}

export default transactions;
