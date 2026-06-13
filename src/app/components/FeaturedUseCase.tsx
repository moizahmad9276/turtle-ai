import { useEffect, useState } from "react";
import { Zap, TrendingUp, Clock } from "lucide-react";

// Declare Voiceflow types for TypeScript
declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: unknown) => void;
        open: () => void;
        close: () => void;
      };
    };
  }
}

export function FeaturedUseCase() {
  const [chatLoaded, setChatLoaded] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
    if (window.voiceflow?.chat) {
      setChatLoaded(true);
      clearInterval(interval);
    }
  }, 300);
  return () => clearInterval(interval);
}, []);

  // Function to programmatically open the chat widget
  const openChat = () => {
    if (window.voiceflow?.chat) {
      try {
        window.voiceflow.chat.open();
      } catch (error) {
        console.error('Failed to open Voiceflow chat:', error);
      }
    }
  };

  const results = [
    {
      icon: Zap,
      label: "80% faster response time"
    },
    {
      icon: TrendingUp,
      label: "3x more qualified leads"
    },
    {
      icon: Clock,
      label: "24/7 automated support"
    }
  ];

  return (
    <section id="demo" className="bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#2563EB] bg-opacity-20 px-6 py-2 rounded-full mb-6">
            <span className="text-[#2563EB] font-semibold">Featured Use Case</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real Estate AI Lead Agent
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automatically qualify buyers, answer property questions, capture contact details, and schedule viewings — 24/7 without human intervention.
          </p>
        </div>

        {/* Live Demo Chat Panel */}
        {/* <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl mb-12">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">Live Interactive Demo</p>
                <p className="text-sm text-gray-400">Real Estate Lead Agent</p>
              </div>
            </div>
            {chatLoaded && !loadError && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Ready</span>
              </div>
            )}
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 min-h-[350px] flex items-center justify-center">
            {loadError ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <Bot className="w-10 h-10 text-red-400" />
                </div>
                <p className="text-red-400 text-lg">
                  Failed to load demo
                </p>
                <p className="text-gray-500 text-sm">
                  Please refresh the page or contact support
                </p>
              </div>
            ) : !chatLoaded ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#2563EB] bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <Bot className="w-10 h-10 text-[#2563EB] animate-pulse" />
                </div>
                <p className="text-gray-400 text-lg">
                  Loading interactive demo...
                </p>
                <p className="text-gray-500 text-sm">
                  Get ready to see AI lead qualification in action
                </p>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-[#2563EB] bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-10 h-10 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg font-semibold mb-2">
                    Demo Ready to Launch
                  </p>
                  <p className="text-gray-500 text-sm">
                    Click the button below or the chat bubble in the bottom-right corner to start the interactive demo
                  </p>
                </div>
                <button
                  onClick={openChat}
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  <MessageCircle className="w-5 h-5" />
                  Open Demo Chat
                </button>
              </div>
            )}
          </div>
        </div> */}

        {/* Results Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#2563EB] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <p className="font-semibold text-lg">{result.label}</p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openChat}
            className="bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            Open Demo Chat
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0F172A] transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
