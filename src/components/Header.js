import React from 'react';
import '../scripts/Header.css';
import HeaderScript from '../scripts/HeaderScript';

export const Header = () => {
  return (
    <h2>
      <div className="header">
        <h1 style={{ fontFamily: 'Times New Roman  ' }}>Car Expense Tracker</h1>
    </div>
      <div className="content"></div>
      <HeaderScript />
     
    </h2>
  )
}