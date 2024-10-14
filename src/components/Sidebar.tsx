import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface SidebarProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="mt-5 px-2">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md cursor-pointer ${
              activeTab === tab.id
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <tab.icon
              className={`mr-4 h-6 w-6 ${
                activeTab === tab.id ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
              }`}
            />
            {tab.name}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;