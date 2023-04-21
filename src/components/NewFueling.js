import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const NewFueling = () => {
  const [text, setText] = useState('');
  const [Euro, setEuro] = useState('');
  const [Litre, setLitre] = useState('');
  const [kWh, setkWh] = useState('');
  const [km, setkm] = useState('');
  const [carType, setCarType] = useState('petrol');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text.substring(0, 20),
      Euro: +Euro.substring(0, 4),
      Litre: +Litre.substring(0, 4),
      kWh: +kWh.substring(0, 4),
      km: +km.substring(0, 4),
      type_id: carType
    }

    addTransaction(newTransaction);
    
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
          <label htmlFor="text"><strong>Car type</strong></label><br />
          <input type="radio" name="car_type" value="petrol" checked={carType === 'petrol'} onChange={(e) => setCarType(e.target.value)} />
          <label htmlFor="petrol" style={{ marginRight: '20px', marginLeft: '10px'}}>Petrol</label>
          <input type="radio" name="car_type" value="electric" checked={carType === 'electric'} onChange={(e) => setCarType(e.target.value)} />
          <label htmlFor="electric" style={{ marginRight: '20px', marginLeft: '10px'}}>Electric</label>
        </div>

        <div className="form-control">
          <label htmlFor="text"><b>Car model (max 20 characters)</b></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value.substring(0, 20))}
            placeholder="Enter car model..." maxLength={20} />
        </div>

        <div className="form-control">
          <label htmlFor="amount-euro"><b>Cost € (max 4 characters)</b></label>
          <input type="number" value={Euro} onChange={(e) => setEuro(e.target.value.substring(0, 4))}
            placeholder="Enter price in €..." maxLength={4} />
        </div>

        <div className="form-control">
          <label htmlFor="amount-litre"><b>Litre amount (max 4 characters)</b></label>
          <input type="number" value={Litre} onChange={(e) => setLitre(e.target.value.substring(0, 4))}
            placeholder="Enter the amount of fuel in litres..." maxLength={4} />
        </div>

        <div className="form-control">
          <label htmlFor="amount-kWh"><b>Amount charged (max 4 characters)</b></label>
          <input type="number" value={kWh} onChange={(e) => setkWh(e.target.value.substring(0, 4))}
            placeholder="Enter charging amount in kWh ..." maxLength={4} />
        </div>

        <div className="form-control">
          <label htmlFor="amount-km"><b>Amount driven (max 4 characters)</b></label>
          <input type="number" value={km} onChange={(e) => setkm(e.target.value.substring(0, 4))}
            placeholder="Enter km amount driven between fuelings..." maxLength={4} />
        </div>
        <button className="btn">Submit</button>
    </form>
    </>
    )
}
