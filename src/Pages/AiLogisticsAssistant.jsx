import React, { useState, useEffect, useRef } from 'react';
import { 
  FaRobot, 
  FaCommentDots, 
  FaPaperPlane, 
  FaTruck, 
  FaFileAlt, 
  FaClock,
  FaQuestionCircle,
  FaLightbulb,
  FaDollarSign,
  FaRoute
} from 'react-icons/fa';
import { MdDocumentScanner } from 'react-icons/md';

const AILogisticsAssistant = ({ routeData }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI Logistics Assistant. I can help with transport questions, pricing breakdowns, document requirements, or any logistics queries. What would you like to know?",
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

  const quickQuestions = [
    "Explain the cost breakdown",
    "What truck type should I use?",
    "List required documents",
    "How to reduce delays?",
    "What's the best route option?"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    handleSendMessage({ preventDefault: () => {} });
  };

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
    }, 1000);
  };

  const generateAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Predefined responses
    if (lowerQuestion.includes('cost') || lowerQuestion.includes('price')) {
      return {
        id: messages.length + 2,
        text: "Based on your route, here's the detailed cost breakdown:\n\n🚛 **Vehicle Cost**: $450-550 (Medium truck, 24 hours)\n⛽ **Fuel**: $320-380 (245km @ 6km/L diesel)\n🛣️ **Tolls**: $45-60 (NH expressways)\n📦 **Handling**: $180-220 (5 stops with labor)\n📄 **Documentation**: $25-35 (e-way bill, permits)\n\n**Total**: $1020-1245\n\n💡 *Tip: Booking 48h in advance saves 15%*",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('truck') || lowerQuestion.includes('vehicle')) {
      return {
        id: messages.length + 2,
        text: "For your shipment:\n\n✅ **Recommended**: 20ft Container Truck\n• Capacity: 14-16 MT\n• Ideal for: Palletized goods, machinery\n• Cost: $450/day\n\n🔄 **Alternatives**:\n1. **Mini Truck** (5-7 MT) - $280/day\n2. **Trailer** (20-24 MT) - $680/day\n\n🔍 *Consider: Road restrictions, cargo type, delivery windows*",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('document') || lowerQuestion.includes('paper')) {
      return {
        id: messages.length + 2,
        text: "**Required Documents**:\n\n1. 📄 **E-Way Bill** (Mandatory for >₹50,000)\n2. 🚛 **Vehicle RC & Insurance**\n3. 📋 **Delivery Challan** (3 copies)\n4. 🏢 **Invoice with GST**\n5. 📝 **Consignment Note**\n6. 🛡️ **Material Safety Sheet** (if hazardous)\n\n⏰ *Generate e-way bill 2 hours before dispatch*",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('delay') || lowerQuestion.includes('time')) {
      return {
        id: messages.length + 2,
        text: "**Common Delay Factors**:\n\n🚧 **Traffic**: Peak hours (8-10 AM, 5-7 PM) add 30-45 min\n🛃 **Checkpoints**: 15-20 min per stop\n⛈️ **Weather**: Rain adds 20% travel time\n📋 **Document Checks**: Keep papers ready\n\n✅ **Tips to Avoid**:\n• Start before 7 AM\n• Use expressways when possible\n• Keep documents digital\n• Monitor weather alerts",
        sender: 'ai',
        timestamp: new Date()
      };
    } else if (lowerQuestion.includes('route') || lowerQuestion.includes('optimize')) {
      return {
        id: messages.length + 2,
        text: "**Route Optimization Tips**:\n\n🗺️ **Current Route**: 245km, 5.3h\n🚀 **Optimized**: 225km, 4.8h (possible)\n\n💡 **Suggestions**:\n1. Use NH48 instead of SH17 (saves 20km)\n2. Avoid city center during 4-6 PM\n3. Combine nearby deliveries\n4. Consider backhaul opportunities\n\n📊 **Potential Savings**: $85-120 & 45 minutes",
        sender: 'ai',
        timestamp: new Date()
      };
    } else {
      return {
        id: messages.length + 2,
        text: "I understand you're asking about logistics. For specific queries about:\n• **Pricing** - I can break down costs\n• **Vehicles** - I'll recommend truck types\n• **Documents** - I'll list requirements\n• **Delays** - I'll suggest solutions\n• **Routes** - I can optimize paths\n\nWhat specific aspect would you like to know more about?",
        sender: 'ai',
        timestamp: new Date()
      };
    }
  };

  return (
    <div className="ai-assistant">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg">
          <FaRobot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">AI Logistics Assistant</h3>
          <p className="text-sm text-gray-600">Ask about transport, pricing, or documents</p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 h-96 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-sky-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
              }`}
            >
              <div className="whitespace-pre-line">{message.text}</div>
              <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-sky-200' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="text-left mb-4">
            <div className="inline-block bg-white text-gray-800 shadow-sm rounded-2xl rounded-bl-none px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
          <FaLightbulb className="w-4 h-4" />
          Quick questions:
        </p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about transport, pricing, or documents..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors"
        >
          <FaPaperPlane className="w-5 h-5" />
        </button>
      </form>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex flex-col items-center">
            <FaTruck className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Truck Type</span>
          </button>
          <button className="p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center">
            <MdDocumentScanner className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Documents</span>
          </button>
          <button className="p-3 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors flex flex-col items-center">
            <FaClock className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Timeline</span>
          </button>
          <button className="p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex flex-col items-center">
            <FaDollarSign className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Cost</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AILogisticsAssistant;