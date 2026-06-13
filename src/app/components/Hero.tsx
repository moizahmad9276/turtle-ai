import { MessageSquare, Users, Calendar, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-[#0F172A] text-white py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              AI Agents Built to Automate Your Business.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Himana AI designs and deploys AI agents that handle customer conversations, qualify leads, book appointments, and automate workflows — integrated into your existing tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                Book a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0F172A] transition-all">
                See Use Cases
              </button>
            </div>
            <p className="text-gray-400 text-sm pt-4">
              Fast setup. Secure. Scalable.
            </p>
          </div>

          {/* Right Side - AI Dashboard Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">AI Agent Dashboard</p>
                    <p className="text-xs text-gray-400">Live & Active</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Chat Widget Preview */}
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-400 mb-3">Chat Widget Preview</p>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-3 h-3" />
                    </div>
                    <div className="bg-gray-800 rounded-lg rounded-tl-none p-3 text-sm">
                      How can I help you today?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#2563EB] rounded-lg rounded-tr-none p-3 text-sm max-w-[200px]">
                      I need information about your services
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Captured Fields */}
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-400 mb-3">Lead Captured</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Name:</span>
                    <span>John Smith</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Email:</span>
                    <span>john@company.com</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Intent:</span>
                    <span className="text-green-400">Qualified</span>
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-3">Active Integrations</p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">CRM</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">Calendar</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">Email</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                    <span className="sr-only">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-[#2563EB] opacity-20 blur-3xl -z-10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
