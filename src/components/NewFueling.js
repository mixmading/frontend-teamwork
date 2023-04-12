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
      // Clear input fields
      setText('');
      setEuro('');
      setLitre('');
      setkWh('');
      setkm('');
    }
  return (
    <>
    <h3>Add New Fueling</h3>
    <form onSubmit={onSubmit}>

      <div className="form-control">
        <label htmlFor="text">Car type</label><br />
        <input type="radio" id="petrol" name="car_type" value="Petrol" checked />
        <label htmlFor="petrol" style={{marginRight: '20px'}}>Petrol</label>
        <input type="radio" id="electric" name="car_type" value="Electric" />
        <label htmlFor="electric">Electric</label>
      </div>

      <div className="form-control">
        <label htmlFor="text">Car name</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
        placeholder="Enter car name..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount-euro">Cost €</label>
        <input type="number" value={Euro} onChange={(e) => setEuro(e.target.value)}
        placeholder="Enter price in €..." />
      </div>
    
      <div className="form-control">
        <label htmlFor="amount-litre">Litre amount</label>
        <input type="number" value={Litre} onChange={(e) => setLitre(e.target.value)}
        placeholder="Enter the amount of fuel in litres..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount-kWh">Amount charged</label>
        <input type="number" value={kWh} onChange={(e) => setkWh(e.target.value)}
        placeholder="Enter charging amount in kWh ..." />
      </div>

      <div className="form-control">
        <label htmlFor="amount-km">Amount driven</label>
        <input type="number" value={km} onChange={(e) => setkm(e.target.value)}
        placeholder="Enter km amount driven between fuelings..." />
      </div>
      <button className="btn">Submit</button>
    </form>
    </>
    )
}
