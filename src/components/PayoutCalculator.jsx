import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRate, addPayout } from '../redux/payoutSlice';

function PayoutCalculator() {
  const [rate, setLocalRate] = useState(0);
  const dispatch = useDispatch();

  const handleSetRate = () => {
    dispatch(setRate(rate));
  };

  const handleAddPayout = () => {
    dispatch(addPayout({ author: 'Author1', amount: rate * 5 }));
  };

  return (
    <div>
      <h2>Payout Calculator</h2>
      <input
        type="number"
        placeholder="Rate"
        value={rate}
        onChange={(e) => setLocalRate(e.target.value)}
      />
      <button onClick={handleSetRate}>Set Rate</button>
      <button onClick={handleAddPayout}>Add Payout</button>
    </div>
  );
}

export default PayoutCalculator;