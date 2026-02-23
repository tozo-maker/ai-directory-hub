import { useState } from "react";
import { Bookmark, GitCompare, TrendingUp, TrendingDown, BadgeCheck, Twitter, Github, Linkedin, MessageCircle } from "lucide-react";
import { icons } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AITool } from "@/types/tool";
import StarRating from "./StarRating";
import HighlightBadge from "./HighlightBadge";
import { EURiskBadge, GDPRBadge, DataTrainingBadge } from "./ComplianceBadges";
import GovernanceMetrics from "./GovernanceMetrics";

const ToolCard = ({ tool }: { tool: AITool }) => {
  const [expanded, setExpanded] = useState(false);

  const CategoryIcon = icons[tool.categoryIcon as keyof typeof icons];

  return (
    <Card
      className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Card Face — Always visible */}
      <div className="flex flex-col gap-3 p-5">
        {/* Header */}
        <div className="flex items-start gap-3">
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="h-11 w-11 shrink-0 rounded-xl bg-muted object-cover"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate text-base font-semibold text-foreground">{tool.name}</h3>
              {tool.verified && <BadgeCheck size={16} className="shrink-0 text-blue-500" />}
            </div>
            <p className="truncate text-xs text-muted-foreground">{tool.publisher}</p>
          </div>
          {tool.highlightBadge && (
            <div className="shrink-0">
              <HighlightBadge badge={tool.highlightBadge} />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {tool.shortDescription}
        </p>

        {/* Category chip */}
        <div className="flex items-center gap-1.5">
          {CategoryIcon && <CategoryIcon size={13} className="text-muted-foreground" />}
          <span className="text-xs font-medium text-muted-foreground">{tool.category}</span>
        </div>

        {/* Metrics bar */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <div className="flex items-center gap-1.5">
            <StarRating rating={tool.rating} />
            <span className="text-muted-foreground">({tool.reviewCount.toLocaleString()})</span>
          </div>
          <div className={`flex items-center gap-0.5 font-medium ${tool.weeklyTrendDelta >= 0 ? "text-emerald-600" : "text-red-500"}`}>
            {tool.weeklyTrendDelta >= 0 ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {Math.abs(tool.weeklyTrendDelta)}%
          </div>
          <Badge variant="secondary" className="h-5 px-1.5 text-[11px] font-medium">
            {tool.price || tool.pricingModel}
          </Badge>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5">
          {tool.featureTags.map((tag) => (
            <span key={tag} className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            <Bookmark size={14} /> Neural Vault
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            <GitCompare size={14} /> Compare
          </Button>
        </div>
      </div>

      {/* Progressive Disclosure — Expanded section */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 pb-5 pt-4">
            {/* Compliance badges */}
            <div className="mb-3 flex flex-wrap gap-1.5">
              <EURiskBadge tier={tool.euRiskTier} />
              <GDPRBadge compliant={tool.gdprCompliant} />
              {tool.trainsOnUserData && <DataTrainingBadge />}
            </div>

            {/* Governance metrics */}
            <GovernanceMetrics
              complianceScore={tool.complianceScore}
              dataGovernanceGrade={tool.dataGovernanceGrade}
              transparencyIndex={tool.transparencyIndex}
            />

            {/* Full description */}
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {tool.fullDescription}
            </p>

            {/* Social links */}
            <div className="mt-3 flex gap-1">
              {tool.twitterUrl && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={tool.twitterUrl} target="_blank" rel="noopener noreferrer"><Twitter size={14} /></a>
                </Button>
              )}
              {tool.githubUrl && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={14} /></a>
                </Button>
              )}
              {tool.linkedinUrl && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={tool.linkedinUrl} target="_blank" rel="noopener noreferrer"><Linkedin size={14} /></a>
                </Button>
              )}
              {tool.discordUrl && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={tool.discordUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={14} /></a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
