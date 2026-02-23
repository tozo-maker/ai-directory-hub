export type HighlightBadge = "Most Popular" | "Editor's Pick" | "Trending" | "New";

export type EURiskTier = "Minimal" | "Limited" | "High" | "Unacceptable";

export type PricingModel = "Free" | "Freemium" | "Paid" | "Enterprise";

export interface AITool {
  id: string;
  name: string;
  slug: string;
  logo: string;
  verified: boolean;
  publisher: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  categoryIcon: string;
  highlightBadge?: HighlightBadge;

  // Ratings & metrics
  rating: number;
  reviewCount: number;
  weeklyTrendDelta: number; // percentage, positive = up, negative = down

  // Pricing
  pricingModel: PricingModel;
  price?: string; // e.g., "$20/mo"

  // Feature tags (up to 3)
  featureTags: string[];

  // Compliance & Governance
  euRiskTier: EURiskTier;
  gdprCompliant: boolean;
  trainsOnUserData: boolean;
  complianceScore: number; // 0-100
  dataGovernanceGrade: string; // letter grade: A+, A, B+, B, C, etc.
  transparencyIndex: number; // 0-100

  // Social links
  twitterUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  discordUrl?: string;
}
