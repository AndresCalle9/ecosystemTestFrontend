import React, { useState } from "react";
import fetchApi from "../../utils/fetchApi";
import formatterPeso from "../../utils/formatterPeso";
import formatterUsd from "../../utils/formatterUsd";
import s from "../../styles/pages/mean.module.scss"

export const getServerSideProps = async (ctx) => {
  
      return {
        props: {
          dni: ctx.query.dni,
          acc: ctx.query.acc,
          statusCode: 200,
        },
      };
    
  };

function index({acc,dni}) {
  const [reportFlag, setReportFlag] = useState(false);
  const [dates, setDates] = useState({
    initial: "",
    end: "",
  });
  const [price, setPrice] = useState(0)

  const handleDate = (e) => {
    setDates({
      ...dates,
      [e.target.name]: e.target.value,
    });
  };

  const sendDates = async () => {
    const meanData = await fetchApi(
      `api/user/accounts/transaction/mean/${acc}/${dni}`,
      "POST",
      dates
    );
    const {mean, currency} = await meanData.json();
    setPrice(currency == "COP" ? formatterPeso(mean): formatterUsd(mean));
    setReportFlag(!reportFlag);
  };

  return (
    <div className={s.container}>
      <h1>Transaction media</h1>
      <div className={s.datesInputs}>
        <h3 htmlFor="">Select dates</h3>
        <label htmlFor="initial">Initial Date</label>
        <input type="date" name="initial" id="initial" onChange={handleDate} />
        <label htmlFor="end">Final date</label>
        <input type="date" name="end" id="end" onChange={handleDate} />
        <button className="button" onClick={sendDates}>Generate mean</button>
      </div>
      {reportFlag && (
          <div className={s.report}>
              <h2>Media period</h2>
              <p><b>Media: </b>{price}</p>
          </div>
      )}
    </div>
  );
}

export default index;
