import React from "react";
import fetchApi from "../../utils/fetchApi";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import Link from "next/link";
import s from "../../styles/pages/account.module.scss"


export const getServerSideProps = async (ctx) => {
  try {
    const transactionsData = await fetchApi(`api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`, "GET");

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
    <div className={s.container}>
    <h2>Transactions of account id: {account_id}</h2>
    <Link href = {`/mean?acc=${account_id}&dni=${dni}`} >
        <a>
          <button className="button">Get transaction´s mean</button>
        </a>
      </Link>
    <div className={s.transactionsContainer}>
    {transactions.map((item) => {
      return <TransactionCard info={item} key={item.id} dni={dni} acc={account_id}/>;
    })}
    </div>
  </div>
  );
}

export default transactions;
