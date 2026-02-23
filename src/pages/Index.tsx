import { Search } from "lucide-react";
import ToolCard from "@/components/tool-card/ToolCard";
import { mockTools } from "@/data/mockTools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            AI Directory
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Discover, compare, and evaluate AI tools with transparency and compliance insights.
          </p>
          <div className="relative mt-5 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mockTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
