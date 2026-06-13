import { Bot, Send } from "lucide-react";

export function LiveDemo() {
  return (
    <section className="bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Experience Himana AI in Action
        </h2>

        {/* Embedded Chatbot Preview */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
          {/* Chat Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">Himana AI Demo</p>
                <p className="text-sm text-gray-400">Try asking about properties</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Demo Chat Area */}
          <div className="bg-gray-900 rounded-2xl p-6 min-h-[300px] mb-4 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-[#2563EB] bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <Bot className="w-10 h-10 text-[#2563EB]" />
              </div>
              <p className="text-gray-400 text-lg">
                Start a conversation to see how our AI qualifies leads
              </p>
            </div>
          </div>

          {/* Demo Input */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2563EB] transition-colors"
              disabled
            />
            <button className="bg-[#2563EB] px-6 py-4 rounded-xl hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8">
          This is a live preview. Book a demo to see the full experience.
        </p>
      </div>
    </section>
  );
}
