import React from 'react'
import formatterPeso from "../../utils/formatterPeso";
import formatterUsd from "../../utils/formatterUsd";
import Link from "next/link";

function TransactionCard({info}) {
    const { amount, currency, date, state, type, id} = info;
    const price = currency == "COP" ? formatterPeso(amount): formatterUsd(amount);
    return (
        <div>
        <h2>Account id: {info.id}</h2>
        </div>
    )
}

export default TransactionCard
