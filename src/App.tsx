import React, { useState } from 'react';
import { ShoppingBag, Stethoscope, Home, MessageCircle } from 'lucide-react';
import ShopScreen from './screens/ShopScreen';
import ConsultScreen from './screens/ConsultScreen';
import BoardingScreen from './screens/BoardingScreen';
import SupportScreen from './screens/SupportScreen';

type TabType = 'shop' | 'consult' | 'boarding' | 'support';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('shop');

  const renderScreen = () => {
    switch (activeTab) {
      case 'shop':
        return <ShopScreen />;
      case 'consult':
        return <ConsultScreen />;
      case 'boarding':
        return <BoardingScreen />;
      case 'support':
        return <SupportScreen />;
      default:
        return <ShopScreen />;
    }
  };

  const tabs = [
    { id: 'shop' as TabType, name: 'Shop', icon: ShoppingBag },
    { id: 'consult' as TabType, name: 'Consult', icon: Stethoscope },
    { id: 'boarding' as TabType, name: 'Boarding', icon: Home },
    { id: 'support' as TabType, name: 'Support', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 pb-20">
        {renderScreen()}
      </div>

      {/* Bottom Tab Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-red-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon 
                  size={24} 
                  className={`mb-1 ${isActive ? 'text-primary' : 'text-gray-500'}`}
                  strokeWidth={2}
                />
                <span className={`text-xs font-semibold ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`}>
                  {tab.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;