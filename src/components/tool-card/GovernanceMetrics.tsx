import { Progress } from "@/components/ui/progress";

interface GovernanceMetricsProps {
  complianceScore: number;
  dataGovernanceGrade: string;
  transparencyIndex: number;
}

const GovernanceMetrics = ({ complianceScore, dataGovernanceGrade, transparencyIndex }: GovernanceMetricsProps) => (
  <div className="grid grid-cols-3 gap-3">
    <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-2">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Compliance</span>
      <span className="text-lg font-bold text-foreground">{complianceScore}</span>
      <Progress value={complianceScore} className="mt-1 h-1" />
    </div>
    <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-2">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">GDVR</span>
      <span className="text-lg font-bold text-foreground">{dataGovernanceGrade}</span>
    </div>
    <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-2">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Transparency</span>
      <span className="text-lg font-bold text-foreground">{transparencyIndex}</span>
      <Progress value={transparencyIndex} className="mt-1 h-1" />
    </div>
  </div>
);

export default GovernanceMetrics;
