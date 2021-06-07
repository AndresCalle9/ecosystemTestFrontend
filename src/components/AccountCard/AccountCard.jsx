import React from 'react'
import formatterPeso from "../../utils/formatterPeso";
import formatterUsd from "../../utils/formatterUsd";
import Link from "next/link";
import s from "./AccountCard.module.scss"



function AccountCard({info, dni}) {
    const { amount, currency, id} = info;
    const price = currency == "COP" ? formatterPeso(amount): formatterUsd(amount);
  return (
    <div className = {s.card}>
        <h3>Account id: {id}</h3>
      <p><b>Balance: </b>{price}</p>
      <p><b>Currency: </b>{currency}</p>
      <Link href={`/account/${id}?dni=${dni}`}>
      <a>
          <button className="button">See transactions</button>
      </a>
      </Link>
    </div>
  );
}

export default AccountCard
