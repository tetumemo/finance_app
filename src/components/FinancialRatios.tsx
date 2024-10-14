import React, { useState } from 'react';

const FinancialRatios: React.FC = () => {
  const [currentAssets, setCurrentAssets] = useState<number>(0);
  const [currentLiabilities, setCurrentLiabilities] = useState<number>(0);
  const [totalAssets, setTotalAssets] = useState<number>(0);
  const [totalLiabilities, setTotalLiabilities] = useState<number>(0);
  const [netIncome, setNetIncome] = useState<number>(0);
  const [shareholdersEquity, setShareholdersEquity] = useState<number>(0);

  const calculateRatios = () => {
    const currentRatio = currentAssets / currentLiabilities;
    const debtRatio = totalLiabilities / totalAssets;
    const roe = netIncome / shareholdersEquity;
    const roa = netIncome / totalAssets;

    return { currentRatio, debtRatio, roe, roa };
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">財務比率</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">流動資産</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={currentAssets}
            onChange={(e) => setCurrentAssets(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">流動負債</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={currentLiabilities}
            onChange={(e) => setCurrentLiabilities(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">総資産</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={totalAssets}
            onChange={(e) => setTotalAssets(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">総負債</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={totalLiabilities}
            onChange={(e) => setTotalLiabilities(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">当期純利益</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={netIncome}
            onChange={(e) => setNetIncome(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">株主資本</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={shareholdersEquity}
            onChange={(e) => setShareholdersEquity(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            const ratios = calculateRatios();
            alert(
              `流動比率: ${ratios.currentRatio.toFixed(2)}\n` +
              `負債比率: ${ratios.debtRatio.toFixed(2)}\n` +
              `ROE: ${ratios.roe.toFixed(2)}\n` +
              `ROA: ${ratios.roa.toFixed(2)}`
            );
          }}
        >
          比率を計算
        </button>
      </div>
    </div>
  );
};

export default FinancialRatios;