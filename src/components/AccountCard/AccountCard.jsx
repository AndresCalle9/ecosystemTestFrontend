import React from 'react'
import formatterPeso from "../../utils/formatterPeso";
import formatterUsd from "../../utils/formatterUsd";
import Link from "next/link";



function AccountCard({info, dni}) {
    const { amount, currency, id} = info;
    const price = currency == "COP" ? formatterPeso(amount): formatterUsd(amount);
  return (
    <div >
        <h2>Account id: {id}</h2>
      <p><b>Balance: </b>{price}</p>
      <p><b>Currency: </b>{currency}</p>
      <Link href={`/account/${id}?dni=${dni}`}>
      <a>
          <button>See transactions</button>
      </a>
      </Link>
    </div>
  );
}

export default AccountCard
