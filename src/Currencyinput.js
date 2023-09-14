import React from "react";

const CurrencyInput = ({ symbol,selectsymbol, amount, setAmount}) => (
  <div className="field">
    <div className="currency-picker">
      <select value={symbol} onChange={e=>selectsymbol(e.target.value)}>
        <option>USD</option>
        <option>INR</option>
        <option>SGD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>CAD</option>
        <option>AUD</option>
        <option>CNY</option>
        <option>JPY</option>
        <option>NZD</option>
      </select>
    </div>
    <div className="currency-input">
    <input type="text" inputMode="numeric" className="number-input" value={amount} onChange={e=>setAmount(e.target.value)}/>
    </div>
  </div>);


export default CurrencyInput;