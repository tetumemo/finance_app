import React, { useState } from 'react';
import { Calculator, BookOpen, Users, Lock, Settings, HelpCircle, DollarSign } from 'lucide-react';
import Sidebar from './components/Sidebar';
import DCFCalculator from './components/DCFCalculator';
import FinancialRatios from './components/FinancialRatios';
import CapitalCost from './components/CapitalCost';
import InvestmentEvaluation from './components/InvestmentEvaluation';
import OptionPricing from './components/OptionPricing';
import CompoundInterestCalculator from './components/CompoundInterestCalculator';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dcf');

  const tabs = [
    { id: 'dcf', name: 'DCF評価', icon: Calculator },
    { id: 'ratios', name: '財務比率', icon: BookOpen },
    { id: 'capital', name: '資本コスト', icon: Users },
    { id: 'investment', name: '投資評価', icon: Lock },
    { id: 'options', name: 'オプション価格', icon: Settings },
    { id: 'compound', name: '複利計算', icon: DollarSign },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dcf':
        return <DCFCalculator />;
      case 'ratios':
        return <FinancialRatios />;
      case 'capital':
        return <CapitalCost />;
      case 'investment':
        return <InvestmentEvaluation />;
      case 'options':
        return <OptionPricing />;
      case 'compound':
        return <CompoundInterestCalculator />;
      default:
        return <div>計算方法を選択してください</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">MBAファイナンス計算機</h1>
          {renderContent()}
        </div>
      </main>
      <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg">
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

export default App;