import { Shield, ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";
import type { EURiskTier } from "@/types/tool";

const riskTierConfig: Record<EURiskTier, { color: string; icon: React.ReactNode }> = {
  Minimal: { color: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: <ShieldCheck size={12} /> },
  Limited: { color: "bg-amber-50 text-amber-700 border-amber-200", icon: <Shield size={12} /> },
  High: { color: "bg-orange-50 text-orange-700 border-orange-200", icon: <ShieldAlert size={12} /> },
  Unacceptable: { color: "bg-red-50 text-red-700 border-red-200", icon: <AlertTriangle size={12} /> },
};

export const EURiskBadge = ({ tier }: { tier: EURiskTier }) => {
  const config = riskTierConfig[tier];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${config.color}`}>
      {config.icon} EU: {tier}
    </span>
  );
};

export const GDPRBadge = ({ compliant }: { compliant: boolean }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
      compliant ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-700 border-red-200"
    }`}
  >
    <ShieldCheck size={12} />
    GDPR {compliant ? "✓" : "✗"}
  </span>
);

export const DataTrainingBadge = () => (
  <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
    <AlertTriangle size={12} /> Trains on Data
  </span>
);
