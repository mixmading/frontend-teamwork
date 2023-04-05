import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewFueling = () => {
    const [text, setText] =useState('');
    const [Euro, setEuro] =useState('');
    const [Litre, setLitre] =useState('');
    const [kWh, setkWh] =useState('');
    const [km, setkm]  =useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        Euro: +Euro,
        Litre: +Litre,
        kWh: +kWh,
        km: +km
      }

      addTransaction(newTransaction);
    }
  return (
    <>
    <h3>Add new fueling</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Car name</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
        placeholder="Enter car name..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount-euro">Amount €</label>
        <input type="number" value={Euro} onChange={(e) => setEuro(e.target.value)}
        placeholder="Enter fueling price in €..." />
      </div>
    
      <div className="form-control">
        <label htmlFor="amount-litre">Amount litre</label>
        <input type="number" value={Litre} onChange={(e) => setLitre(e.target.value)}
        placeholder="Enter amount of filled litres..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount-kWh">Amount charged</label>
        <input type="number" value={kWh} onChange={(e) => setkWh(e.target.value)}
        placeholder="Enter chaging amount in kWh ..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount-km">Amount drived</label>
        <input type="number" value={km} onChange={(e) => setkm(e.target.value)}
        placeholder="Enter km amount drived between fueling..." />
      </div>
      <button className="btn">Add fueling</button>
    </form>
    </>
    )
}
