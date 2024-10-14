import React, { useState } from 'react';

const InvestmentEvaluation: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000000);
  const [cashFlows, setCashFlows] = useState<number[]>([]);
  const [discountRate, setDiscountRate] = useState<number>(10);

  const calculateNPV = () => {
    let npv = -initialInvestment;
    for (let i = 0; i < cashFlows.length; i++) {
      npv += cashFlows[i] / Math.pow(1 + discountRate / 100, i + 1);
    }
    return npv;
  };

  const calculateIRR = () => {
    const guess = 0.1;
    const cashFlowsWithInitial = [-initialInvestment, ...cashFlows];
    const f = (rate: number) =>
      cashFlowsWithInitial.reduce((acc, val, i) => acc + val / Math.pow(1 + rate, i), 0);
    const df = (rate: number) =>
      cashFlowsWithInitial.reduce(
        (acc, val, i) => acc - (i * val) / Math.pow(1 + rate, i + 1),
        0
      );
    let x0 = guess;
    let x1 = 0;
    const maxIterations = 100;
    const tolerance = 0.00001;
    for (let i = 0; i < maxIterations; i++) {
      const y = f(x0);
      if (Math.abs(y) < tolerance) {
        return x0 * 100;
      }
      x1 = x0 - y / df(x0);
      if (Math.abs(x1 - x0) < tolerance) {
        return x1 * 100;
      }
      x0 = x1;
    }
    return NaN;
  };

  const calculatePaybackPeriod = () => {
    let cumulativeCashFlow = -initialInvestment;
    for (let i = 0; i < cashFlows.length; i++) {
      cumulativeCashFlow += cashFlows[i];
      if (cumulativeCashFlow >= 0) {
        return i + 1 + (cumulativeCashFlow - cashFlows[i]) / cashFlows[i];
      }
    }
    return Infinity;
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">投資評価</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">初期投資額</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          キャッシュフロー（カンマ区切り）
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="200000, 250000, 300000, 350000, 400000"
          onChange={(e) => setCashFlows(e.target.value.split(',').map(Number))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">割引率 (%)</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => alert(`NPV: ${calculateNPV().toFixed(2)}円`)}
        >
          NPVを計算
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => alert(`IRR: ${calculateIRR().toFixed(2)}%`)}
        >
          IRRを計算
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => alert(`回収期間: ${calculatePaybackPeriod().toFixed(2)}年`)}
        >
          回収期間を計算
        </button>
      </div>
    </div>
  );
};

export default InvestmentEvaluation;