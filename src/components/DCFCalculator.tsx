import React, { useState } from 'react';

const DCFCalculator: React.FC = () => {
  const [initialCashFlow, setInitialCashFlow] = useState<number>(1000);
  const [discountRate, setDiscountRate] = useState<number>(10);
  const [growthRate, setGrowthRate] = useState<number>(2);
  const [years, setYears] = useState<number>(5);

  const calculateDCF = () => {
    const r = discountRate / 100;
    const g = growthRate / 100;
    let presentValue = 0;

    for (let t = 1; t <= years; t++) {
      const cashFlow = initialCashFlow * Math.pow(1 + g, t - 1);
      presentValue += cashFlow / Math.pow(1 + r, t);
    }

    // 継続価値の計算
    const terminalValue = (initialCashFlow * Math.pow(1 + g, years) * (1 + g)) / (r - g);
    presentValue += terminalValue / Math.pow(1 + r, years);

    return presentValue;
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">DCF評価</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          初年度キャッシュフロー
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={initialCashFlow}
          onChange={(e) => setInitialCashFlow(Number(e.target.value))}
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
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">成長率 (%)</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={growthRate}
          onChange={(e) => setGrowthRate(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">年数</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={years}
          onChange={(e) => setYears(Math.max(1, Number(e.target.value)))}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            const dcf = calculateDCF();
            if (isNaN(dcf)) {
              alert('計算エラー: 入力値を確認してください');
            } else {
              alert(`計算されたDCF: ${dcf.toFixed(2)}円`);
            }
          }}
        >
          DCFを計算
        </button>
      </div>
    </div>
  );
};

export default DCFCalculator;