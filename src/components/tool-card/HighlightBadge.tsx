import type { HighlightBadge as HighlightBadgeType } from "@/types/tool";

const badgeStyles: Record<HighlightBadgeType, string> = {
  "Most Popular": "bg-blue-50 text-blue-700 border-blue-200",
  "Editor's Pick": "bg-purple-50 text-purple-700 border-purple-200",
  Trending: "bg-orange-50 text-orange-700 border-orange-200",
  New: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const HighlightBadge = ({ badge }: { badge: HighlightBadgeType }) => (
  <span
    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeStyles[badge]}`}
  >
    {badge}
  </span>
);

export default HighlightBadge;
