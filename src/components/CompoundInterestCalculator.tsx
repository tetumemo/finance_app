import React, { useState } from 'react';

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5);
  const [compoundingFrequency, setCompoundingFrequency] = useState<number>(1);
  const [time, setTime] = useState<number>(10);

  const calculateFutureValue = () => {
    const r = rate / 100;
    const n = compoundingFrequency;
    const t = time;
    const futureValue = principal * Math.pow(1 + r / n, n * t);
    return futureValue;
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">複利計算</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">元金 (円)</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">利率 (% / 年)</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">複利回数 (回 / 年)</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={compoundingFrequency}
          onChange={(e) => setCompoundingFrequency(Math.max(1, Number(e.target.value)))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">投資期間 (年)</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            const futureValue = calculateFutureValue();
            alert(`将来価値: ${futureValue.toFixed(2)}円`);
          }}
        >
          将来価値を計算
        </button>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;