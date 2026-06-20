import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

type Plan = {
  name: string;
  tagline: string;
  setup: string;
  monthly: string;
  saving: string;
  featured?: boolean;
  features: { text: string; included: boolean }[];
};

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<FormState>;

// Icons always use same colors regardless of card background
function GreenCheck() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#22c55e" fillOpacity="0.2" />
      <path d="M6.5 10.2l2.3 2.3 4.7-4.7" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RedCross() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#ef4444" fillOpacity="0.15" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function QuoteModal({ plan, onClose, t }: { plan: Plan; onClose: () => void ,t: (key: string) => string;}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = t("quote.nameRequired");
    if (!form.email.trim()) {
      newErrors.email = t("quote.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t("quote.emailInvalid");
    }
    if (!form.company.trim()) newErrors.company = t("quote.companyRequired");
    if (!form.message.trim()) newErrors.message = t("quote.messageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-[#0a1f14] border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${
      errors[field] ? "border-red-500 focus:border-red-400" : "border-gray-700 focus:border-[#2d9e6b]"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#1E293B] border border-gray-700 rounded-3xl p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
                <path d="M6 16.5l7 7 13-13" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t("quote.successTitle")}</h3>
            <p className="text-gray-400">
              {t("quote.successMessage")}{" "}
              <span className="text-[#2d9e6b] font-semibold">{plan.name}</span> {t("quote.successPlan")}
            </p>
            <button onClick={onClose} className="mt-6 bg-[#2d9e6b] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1a7a50] transition-all">
              {t("quote.close")}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#2d9e6b] uppercase tracking-wider">{t("pricing.getQuote")}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{plan.name} {t("quote.plan")}</h3>
              <p className="text-gray-400 text-sm mt-1">{plan.setup} {t("pricing.setup")} · {plan.monthly}{t("pricing.perMonth")}</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t("quote.name")}</label>
                <input type="text" placeholder="Jane Smith" value={form.name}
                  onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                  className={inputClass("name")} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t("quote.email")}</label>
                <input type="email" placeholder="jane@turtleai.com" value={form.email}
                  onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                  className={inputClass("email")} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t("quote.company")}</label>
                <input type="text" placeholder="TurtleAI" value={form.company}
                  onChange={e => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: undefined }); }}
                  className={inputClass("company")} />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t("quote.message")}</label>
                <textarea placeholder={t("quote.messagePlaceholder")} value={form.message}
                  onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
                  rows={3} className={`${inputClass("message")} resize-none`} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              <button onClick={handleSubmit}
                className="w-full bg-[#2d9e6b] text-white py-4 rounded-xl font-semibold hover:bg-[#1a7a50] transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50">
                {t("quote.send")}
              </button>
              <p className="text-center text-xs text-gray-500">{t("quote.responseTime")}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  // Default active is Growth (featured)
  const [activePlan, setActivePlan] = useState<string>("Growth");
   const { t } = useLanguage();

  const allFeatures = [
  t("pricing.feature.singleChannel"),
  t("pricing.feature.basicLead"),
  t("pricing.feature.emailNotif"),
  t("pricing.feature.standardSupport"),
  t("pricing.feature.500conv"),
  t("pricing.feature.multiChannel"),
  t("pricing.feature.crmCalendar"),
  t("pricing.feature.advancedLead"),
  t("pricing.feature.prioritySupport"),
  t("pricing.feature.2000conv"),
  t("pricing.feature.customFlows"),
  t("pricing.feature.unlimitedChannels"),
  t("pricing.feature.fullCustom"),
  t("pricing.feature.dedicatedManager"),
  t("pricing.feature.whiteLabel"),
  t("pricing.feature.unlimitedConv"),
  t("pricing.feature.analytics"),
  t("pricing.feature.aiTraining"),
];

const starterIncluded = new Set([
  t("pricing.feature.singleChannel"),
  t("pricing.feature.basicLead"),
  t("pricing.feature.emailNotif"),
  t("pricing.feature.standardSupport"),
  t("pricing.feature.500conv"),
]);

const growthIncluded = new Set([
  t("pricing.feature.singleChannel"),
  t("pricing.feature.basicLead"),
  t("pricing.feature.emailNotif"),
  t("pricing.feature.standardSupport"),
  t("pricing.feature.500conv"),
  t("pricing.feature.multiChannel"),
  t("pricing.feature.crmCalendar"),
  t("pricing.feature.advancedLead"),
  t("pricing.feature.prioritySupport"),
  t("pricing.feature.2000conv"),
  t("pricing.feature.customFlows"),
]);

  const plans: Plan[] = [
  {
    name: t("pricing.starter.name"),
    tagline: t("pricing.starter.tagline"),
    setup: "$600",
    monthly: "$79",
    saving: `${t("pricing.save")} $3,421${t("pricing.perMonth")}`,
    features: allFeatures.map(f => ({ 
      text: f, 
      included: starterIncluded.has(f) 
    })),
  },
  {
    name: t("pricing.growth.name"),
    tagline: t("pricing.growth.tagline"),
    setup: "$1,500",
    monthly: "$149",
    saving: `${t("pricing.save")} $3,351${t("pricing.perMonth")}`,
    featured: true,
    features: allFeatures.map(f => ({ 
      text: f, 
      included: growthIncluded.has(f) 
    })),
  },
  {
    name: t("pricing.pro.name"),
    tagline: t("pricing.pro.tagline"),
    setup: "$3,000+",
    monthly: "$299",
    saving: `${t("pricing.save")} $3,201${t("pricing.perMonth")}`,
    features: allFeatures.map(f => ({ 
      text: f, 
      included: true 
    })),
  },
];

  return (
    <section id="pricing" className="bg-[#0a1f14] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3">{t("pricing.title")}</h2>
        <p className="text-center text-gray-400 mb-20 text-sm">
          {t("pricing.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => {
            const isActive = activePlan === plan.name;

            return (
              <div key={plan.name} className="relative pt-5">

                {/* Savings bubble — top RIGHT corner, above the card */}
                <div className="absolute -top-3 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/40 whitespace-nowrap">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                      <path d="M8 1v14M3 6l5-5 5 5M3 10l5 5 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {plan.saving}
                  </span>
                </div>

                <div
                  onClick={() => setActivePlan(plan.name)}
                  className={`rounded-3xl p-8 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-br from-[#2d9e6b] to-[#1a7a50] border-2 border-white shadow-2xl shadow-emerald-500/40 scale-[1.02]"
                      : "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-[#2d9e6b] hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-[1.01]"
                  }`}
                >
                  {/* Most Popular badge — only when Growth is active */}
                  {plan.featured && isActive && (
                    <div className="text-center mb-5">
                      <span className="bg-white text-[#2d9e6b] px-4 py-1 rounded-full text-sm font-semibold">
                        {t("pricing.mostPopular")}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-4 ${isActive ? "text-blue-100" : "text-gray-400"}`}>
                      {plan.tagline}
                    </p>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold">
                        {plan.setup}{" "}
                        <span className={`text-lg font-normal ${isActive ? "text-blue-200" : "text-gray-400"}`}>
                          {t("pricing.setup")}
                        </span>
                      </p>
                      <p className="text-2xl font-semibold">
                        {plan.monthly}
                        <span className={`text-base font-normal ${isActive ? "text-blue-200" : "text-gray-400"}`}>
                          {t("pricing.perMonth")}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Features — icons always same green/red, text adapts */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        {feature.included ? <GreenCheck /> : <RedCross />}
                        <p className={`text-sm leading-relaxed ${
                          feature.included
                            ? "text-white"
                            : isActive ? "text-emerald-300 opacity-50" : "text-gray-500"
                        }`}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(plan);
                    }}
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${
                      isActive
                        ? "bg-white text-[#2d9e6b] hover:bg-gray-100 shadow-lg"
                        : "bg-[#2d9e6b] text-white hover:bg-[#1a7a50] shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                    }`}
                  >
                    {t("pricing.getQuote")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 mt-16 text-sm">
          {t("pricing.footer")}
        </p>
      </div>

      {selectedPlan && (
        <QuoteModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} t={t} />
      )}
    </section>
  );
}