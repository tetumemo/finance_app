import React, { useState } from 'react';

const CapitalCost: React.FC = () => {
  const [debtCost, setDebtCost] = useState<number>(5);
  const [equityCost, setEquityCost] = useState<number>(10);
  const [debtWeight, setDebtWeight] = useState<number>(40);
  const [equityWeight, setEquityWeight] = useState<number>(60);
  const [taxRate, setTaxRate] = useState<number>(25);

  const [riskFreeRate, setRiskFreeRate] = useState<number>(2);
  const [beta, setBeta] = useState<number>(1.2);
  const [marketReturn, setMarketReturn] = useState<number>(8);

  const calculateWACC = () => {
    const wacc =
      (debtCost / 100) * (debtWeight / 100) * (1 - taxRate / 100) +
      (equityCost / 100) * (equityWeight / 100);
    return wacc * 100;
  };

  const calculateCAPM = () => {
    return riskFreeRate + beta * (marketReturn - riskFreeRate);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">資本コスト計算</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">WACC</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">負債コスト (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={debtCost}
              onChange={(e) => setDebtCost(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">株主資本コスト (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={equityCost}
              onChange={(e) => setEquityCost(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">負債比率 (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={debtWeight}
              onChange={(e) => setDebtWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">株主資本比率 (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={equityWeight}
              onChange={(e) => setEquityWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">法人税率 (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
            />
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => alert(`WACC: ${calculateWACC().toFixed(2)}%`)}
        >
          WACCを計算
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">CAPM</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">リスクフリーレート (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={riskFreeRate}
              onChange={(e) => setRiskFreeRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">ベータ</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              step="0.1"
              value={beta}
              onChange={(e) => setBeta(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">市場リターン (%)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={marketReturn}
              onChange={(e) => setMarketReturn(Number(e.target.value))}
            />
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => alert(`CAPM: ${calculateCAPM().toFixed(2)}%`)}
        >
          CAPMを計算
        </button>
      </div>
    </div>
  );
};

export default CapitalCost;