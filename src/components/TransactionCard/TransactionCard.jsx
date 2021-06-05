import React from "react";
import formatterPeso from "../../utils/formatterPeso";
import formatterUsd from "../../utils/formatterUsd";
import Link from "next/link";

function TransactionCard({ info, dni, acc}) {
  const { amount, currency, date, state, type, id } = info;
  const price =
    currency == "COP" ? formatterPeso(amount) : formatterUsd(amount);
  return (
    <div>
      <h3>Transaction id: {id}</h3>
      <p><b>Amount: </b>{price}</p>
      <p><b>Date: </b>{date}</p>

      <Link href={`/transaction/${id}?dni=${dni}&acc=${acc}`}>
        <a>
          <button>See details</button>
        </a>
      </Link>
    </div>
  );
}

export default TransactionCard;