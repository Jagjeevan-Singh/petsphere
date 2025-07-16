import React, { useState } from 'react';
import { MessageCircle, Phone, AlertCircle, HelpCircle, Book, Heart, Send, Zap, Headphones } from 'lucide-react';

const supportOptions = [
  {
    id: 'emergency',
    title: '🚨 Emergency Support',
    description: 'Immediate help for pet emergencies',
    icon: AlertCircle,
    color: 'bg-primary',
    bgColor: 'bg-red-50',
    action: 'Call Emergency Line',
  },
  {
    id: 'chat',
    title: '💬 Live Chat',
    description: '24/7 chat with pet care experts',
    icon: MessageCircle,
    color: 'bg-secondary',
    bgColor: 'bg-teal-50',
    action: 'Start Chat',
  },
  {
    id: 'call',
    title: '📞 Phone Support',
    description: 'Speak directly with our team',
    icon: Phone,
    color: 'bg-accent',
    bgColor: 'bg-blue-50',
    action: 'Call Now',
  },
  {
    id: 'faq',
    title: '❓ FAQ & Tips',
    description: 'Common questions and care guides',
    icon: HelpCircle,
    color: 'bg-warning',
    bgColor: 'bg-yellow-50',
    action: 'Browse FAQ',
  },
];

const careGuides = [
  { id: 1, title: 'First Aid for Pets', category: 'Emergency', icon: '🏥', color: 'text-primary' },
  { id: 2, title: 'Vaccination Schedule', category: 'Health', icon: '💉', color: 'text-secondary' },
  { id: 3, title: 'Feeding Guidelines', category: 'Nutrition', icon: '🍖', color: 'text-success' },
  { id: 4, title: 'Exercise & Play', category: 'Wellness', icon: '🎾', color: 'text-accent' },
];

const SupportScreen: React.FC = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div 
        className="relative bg-gradient-to-r from-primary to-red-400 px-4 py-6"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold mb-2">Help & Support 💝</h2>
          <p className="text-white text-sm opacity-90">We're here for you and your pets 24/7</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Support Options */}
        <div className="space-y-4 my-4">
          {supportOptions.map((option) => (
            <div
              key={option.id}
              className={`${option.bgColor} rounded-2xl p-5 shadow-sm`}
            >
              <div className="flex items-center mb-3">
                <div className={`${option.color} p-2 rounded-xl mr-3`}>
                  <option.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800">{option.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{option.description}</p>
              <button 
                className={`${option.color} text-white px-4 py-2 rounded-full font-bold text-sm`}
                onClick={() => {
                  if (option.id === 'chat') {
                    setShowChat(true);
                  } else {
                    console.log('Support option pressed:', option.id);
                  }
                }}
              >
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Status Section */}
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5 mb-4">
          <div className="flex items-center mb-3">
            <div className="bg-green-500 p-2 rounded-xl mr-3">
              <Zap size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-green-800">Support Status</h3>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-700 text-sm">All channels online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white px-3 py-2 rounded-full self-start">
            <Headphones size={16} className="text-green-500 mr-2" />
            <span className="text-green-500 text-sm font-semibold">Avg. response: 2-3 min</span>
          </div>
        </div>

        {/* Pet Care Guides */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">📚 Pet Care Guides</h3>
          <p className="text-sm text-gray-600 mb-4">Quick access to helpful resources</p>
          
          <div className="grid grid-cols-2 gap-4">
            {careGuides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <div className={`bg-gray-50 p-3 rounded-2xl mb-3 inline-block`}>
                  <span className="text-2xl">{guide.icon}</span>
                </div>
                <h4 className="font-bold text-sm text-gray-800 mb-2">{guide.title}</h4>
                <div className="bg-gray-50 px-2 py-1 rounded-xl inline-block">
                  <span className={`text-xs font-semibold ${guide.color}`}>{guide.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Quick Actions</h3>
          
          <div className="space-y-3">
            <button className="w-full bg-white rounded-2xl p-4 flex items-center shadow-sm">
              <div className="bg-gray-50 p-3 rounded-xl mr-4">
                <Book size={18} className="text-accent" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-800">View My Tickets</div>
                <div className="text-sm text-gray-600">Track support requests</div>
              </div>
            </button>
            
            <button className="w-full bg-white rounded-2xl p-4 flex items-center shadow-sm">
              <div className="bg-gray-50 p-3 rounded-xl mr-4">
                <Heart size={18} className="text-primary" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-800">Rate Our Service</div>
                <div className="text-sm text-gray-600">Help us improve</div>
              </div>
            </button>
          </div>
        </div>

        {/* Chat Section */}
        {showChat && (
          <div className="bg-white rounded-2xl shadow-lg mb-6">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="bg-teal-50 p-2 rounded-xl mr-3">
                  <MessageCircle size={18} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Live Chat Support</h4>
                  <p className="text-sm text-green-500">Online now</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChat(false)}
                className="bg-gray-100 px-3 py-1 rounded-2xl text-sm font-semibold text-gray-600"
              >
                Close
              </button>
            </div>
            
            <div className="p-4 min-h-[120px]">
              <div className="bg-teal-50 p-3 rounded-2xl max-w-[85%]">
                <p className="text-sm text-gray-800 leading-relaxed">
                  Hello! 👋 How can I help you with your pet today?
                </p>
              </div>
            </div>
            
            <div className="flex items-end p-4 border-t border-gray-100">
              <textarea
                className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-gray-50 resize-none"
                placeholder="Type your message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                rows={1}
              />
              <button 
                className={`ml-2 p-3 rounded-2xl ${
                  chatMessage.trim() ? 'bg-secondary' : 'bg-gray-300'
                }`}
                onClick={handleSendMessage}
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportScreen;