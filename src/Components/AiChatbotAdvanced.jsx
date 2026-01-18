import React, { useState, useEffect, useRef } from 'react';
import { 
  FaRobot, 
  FaTimes, 
  FaCommentDots, 
  FaPaperPlane,
  FaShippingFast,
  FaDollarSign,
  FaFileAlt,
  FaQuestionCircle,
  FaLightbulb,
  FaHeadset
} from 'react-icons/fa';
import { MdLocalShipping, MdTrackChanges } from 'react-icons/md';

const AIChatbotAdvanced = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI Logistics Assistant. I can help you track shipments, get instant quotes, check document requirements, or answer any logistics questions. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Predefined responses based on common logistics queries
    if (lowerQuestion.includes('track') || lowerQuestion.includes('where is')) {
      return {
        id: messages.length + 2,
        text: "To track your shipment, I'll need the tracking number. I can check:\n\n✅ Real-time location\n✅ Estimated delivery time\n✅ Delivery history\n✅ Carrier updates\n\nPlease enter your tracking number or ask about a specific shipment.",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('price') || lowerQuestion.includes('quote') || lowerQuestion.includes('cost')) {
      return {
        id: messages.length + 2,
        text: "I can provide instant price estimates! For accurate quotes, I need to know:\n\n📍 Pickup location\n📍 Delivery destination\n📦 Package dimensions & weight\n🚚 Preferred service type\n\nWould you like me to guide you through getting a detailed quote?",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('document') || lowerQuestion.includes('paperwork')) {
      return {
        id: messages.length + 2,
        text: "**Required Documents Checklist**:\n\n📄 Commercial Invoice\n📋 Packing List\n🚛 Bill of Lading/Air Waybill\n🛂 Customs Declaration\n📝 Certificate of Origin (if exporting)\n⚠️ Hazardous Materials Declaration (if applicable)\n\nNeed help preparing any specific document?",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('delay') || lowerQuestion.includes('late')) {
      return {
        id: messages.length + 2,
        text: "**Common Delay Causes & Solutions**:\n\n🚧 **Weather Delays**: Check real-time weather alerts\n🛃 **Customs Hold**: Ensure all documents are complete\n🚚 **Carrier Issues**: Contact carrier directly for updates\n📦 **Incorrect Address**: Verify delivery details\n\nProvide your tracking number for specific delay analysis.",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
      return {
        id: messages.length + 2,
        text: "Hello! 👋 Welcome to TransChain's AI Assistant. I'm here to help with all your logistics needs. You can ask me about:\n• Shipment tracking\n• Pricing estimates\n• Document requirements\n• Carrier selection\n• Delivery timelines\n\nWhat would you like to know?",
        sender: 'ai',
        timestamp: new Date()
      };
    } else {
      return {
        id: messages.length + 2,
        text: "Thanks for your question! For the most accurate assistance, could you provide more details about:\n\n1. What you're shipping?\n2. Origin and destination?\n3. Urgency/timeline?\n\nOr try these quick options:",
        sender: 'ai',
        timestamp: new Date()
      };
    }
  };

  const quickActions = [
    { icon: <MdTrackChanges />, label: 'Track Shipment', color: 'bg-blue-100 text-blue-700' },
    { icon: <FaDollarSign />, label: 'Get Quote', color: 'bg-green-100 text-green-700' },
    { icon: <FaFileAlt />, label: 'Documents', color: 'bg-amber-100 text-amber-700' },
    { icon: <FaShippingFast />, label: 'Shipping', color: 'bg-purple-100 text-purple-700' },
  ];

  const sampleQuestions = [
    "How to track my package?",
    "What's the cheapest shipping option?",
    "Do I need insurance?",
    "How to prepare customs documents?",
    "What are the delivery hours?"
  ];

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        <FaRobot className="w-6 h-6" />
        <span className="font-medium">AI Assistant</span>
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
          💬
        </span>
      </button>
    );
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] h-[580px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <FaRobot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Logistics Assistant</h3>
                  <p className="text-sm text-blue-100">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Minimize chat"
                >
                  <span className="text-lg">−</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm">{message.text}</div>
                  <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-sky-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block bg-white text-gray-800 shadow-sm rounded-2xl rounded-bl-none px-4 py-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-sm text-gray-500 ml-2">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 pt-2 border-t border-gray-200 bg-white">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-lg flex flex-col items-center justify-center ${action.color} hover:opacity-90 transition-opacity`}
                >
                  <span className="text-lg mb-1">{action.icon}</span>
                  <span className="text-xs font-medium">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Sample Questions */}
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                <FaLightbulb className="w-3 h-3" />
                Try asking:
              </p>
              <div className="flex flex-wrap gap-1">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(question);
                      handleSendMessage({ preventDefault: () => {} });
                    }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="flex gap-2 pb-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your logistics question..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors"
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button - Only show when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <FaRobot className="w-7 h-7" />
            </div>
            <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse border-2 border-white">
              AI
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-gray-900 text-white text-sm rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="font-medium mb-1">AI Logistics Assistant</div>
              <div className="text-gray-300 text-xs">Get instant answers about shipping, tracking, and pricing</div>
              <div className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      )}
    </>
  );
};

export default AIChatbotAdvanced;