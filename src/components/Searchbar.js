import React, { useState } from 'react';

const transactions = [
  { id: 1, text: 'Suzuki Swift', Euro: 200, Litre: 150, kWh: 0, km: 450, type_id: 'petrol' },
  { id: 2, text: 'BMW x5', Euro: 150, Litre: 100, kWh: 0, km: 300, type_id: 'petrol' },
  { id: 3, text: 'Peugeot 208', Euro: 250, Litre: 300, kWh: 0, km: 450, type_id: 'petrol' },
  { id: 4, text: 'Toyota Aygo', Euro: 150, Litre: 200, kWh: 0, km: 600, type_id: 'petrol' },
  { id: 5, text: 'Polestar 2', Euro: 80, Litre: 0, kWh: 50, km: 200, type_id: 'electric' },
  { id: 6, text: 'Tesla Model 3', Euro: 120, Litre: 0, kWh: 80, km: 250, type_id: 'electric' }
];

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredTransactions = transactions.filter(transaction => {
      const modelMatch = transaction.text.toLowerCase().startsWith(searchText);
      return modelMatch;
    });
    setFilteredTransactions(filteredTransactions);
    setSearchQuery(searchText);
  };

  return (
    <div>
      <input id="search-input" type="text" value={searchQuery} onChange={handleSearch} placeholder="Search by model"/>
      {searchQuery && (
        <div id="transactions-container">
          {filteredTransactions.map(transaction => (
            <div key={transaction.text}>
              <span>{transaction.text}</span>
              <div>
                <p>Euro: {transaction.Euro}</p>
                <p>Litre: {transaction.Litre}</p>
                <p>kWh: {transaction.kWh}</p>
                <p>km: {transaction.km}</p>
                <p>Type: {transaction.type_id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
