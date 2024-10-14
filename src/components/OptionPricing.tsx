import React, { useState } from 'react';

const OptionPricing: React.FC = () => {
  const [spotPrice, setSpotPrice] = useState<number>(100);
  const [strikePrice, setStrikePrice] = useState<number>(100);
  const [timeToExpiration, setTimeToExpiration] = useState<number>(1);
  const [riskFreeRate, setRiskFreeRate] = useState<number>(0.05);
  const [volatility, setVolatility] = useState<number>(0.2);

  const calculateBlackScholes = () => {
    const d1 =
      (Math.log(spotPrice / strikePrice) +
        (riskFreeRate + (volatility * volatility) / 2) * timeToExpiration) /
      (volatility * Math.sqrt(timeToExpiration));
    const d2 = d1 - volatility * Math.sqrt(timeToExpiration);

    const callPrice =
      spotPrice * cumulativeNormalDistribution(d1) -
      strikePrice * Math.exp(-riskFreeRate * timeToExpiration) * cumulativeNormalDistribution(d2);

    const putPrice =
      strikePrice * Math.exp(-riskFreeRate * timeToExpiration) * cumulativeNormalDistribution(-d2) -
      spotPrice * cumulativeNormalDistribution(-d1);

    return { callPrice, putPrice };
  };

  const cumulativeNormalDistribution = (x: number) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp((-x * x) / 2);
    let prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (x > 0) {
      prob = 1 - prob;
    }
    return prob;
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">オプション価格計算（ブラック・ショールズモデル）</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">原資産価格</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={spotPrice}
            onChange={(e) => setSpotPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">行使価格</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={strikePrice}
            onChange={(e) => setStrikePrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">満期までの期間（年）</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            step="0.1"
            value={timeToExpiration}
            onChange={(e) => setTimeToExpiration(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">リスクフリーレート</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            step="0.01"
            value={riskFreeRate}
            onChange={(e) => setRiskFreeRate(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">ボラティリティ</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            step="0.01"
            value={volatility}
            onChange={(e) => setVolatility(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            const { callPrice, putPrice } = calculateBlackScholes();
            alert(
              `コールオプション価格: ${callPrice.toFixed(2)}円\n` +
              `プットオプション価格: ${putPrice.toFixed(2)}円`
            );
          }}
        >
          オプション価格を計算
        </button>
      </div>
    </div>
  );
};

export default OptionPricing;