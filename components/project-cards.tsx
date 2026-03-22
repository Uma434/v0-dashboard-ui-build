"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Radio, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, Copy } from 'lucide-react'

import { cn } from "@/lib/utils";

type FilterType = "solo" | "teams" | "active" | "completed" | "disputed";

export function ProjectCards() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("teams");

  const filters: Array<{
    id: FilterType;
    label: string;
    icon?: React.ReactNode;
  }> = [
    { id: "solo", label: "Solo", icon: <Radio className="w-4 h-4" /> },
    { id: "teams", label: "Teams", icon: <Users className="w-4 h-4" /> },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
    { id: "disputed", label: "Disputed" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Main Container Card with Contracts Section */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Contracts Header with Filters */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-semibold text-foreground">Contracts</h3>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Solo and Teams Group */}
              <div className="flex gap-2 bg-accent rounded-md ">
                {filters.slice(0, 2).map((filter) => {
                  const isActive = activeFilter === filter.id;
                  const isSolo = filter.id === "solo";

                  return (
                    <Button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      // variant="outline"
                      className={cn(
                        "text-xs sm:text-sm font-medium transition-all flex items-center gap-1",
                        isSolo
                          ? " border-accent text-accent-foreground bg-background hover:bg-accent/10"
                          : isActive
                            ? "bg-accent text-accent-foreground hover:bg-accent/90 border border-accent"
                            : "bg-background text-foreground border border-border hover:bg-muted/30",
                      )}
                      size="sm"
                    >
                      {filter.icon}
                      {filter.label}
                    </Button>
                  );
                })}
              </div>

              {/* Separator */}
              <div className="hidden sm:block h-6 w-px bg-border"></div>

              {/* Active, Completed, Disputed Group */}
              <div className="flex gap-2">
                {filters.slice(2).map((filter) => {
                  const isActive = activeFilter === filter.id;

                  return (
                    <Button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      variant="outline"
                      className={cn(
                        "text-xs sm:text-sm font-medium transition-all flex items-center gap-1",
                        isActive
                          ? "bg-accent text-accent-foreground hover:bg-accent/90 border border-accent"
                          : "bg-background text-foreground border border-border hover:bg-muted/30",
                      )}
                      size="sm"
                    >
                      {filter.icon}
                      {filter.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Search and Recent Activity Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-full">
            <Input
              placeholder="Search product"
              className="pl-10 bg-input text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm whitespace-nowrap"
          >
            Recent activity
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Button>
        </div>

         {/* Project Card - Three Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
          {/* Brand Identity + Landing Page Card */}
          <Card className="rounded-lg border border-border bg-card">
            <CardContent className="p-4 sm:p-6 space-y-3">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-accent text-sm sm:text-base leading-snug">
                    Brand Identity + Landing Page
                  </h4>
                  <Badge className="bg-accent text-accent-foreground text-xs shrink-0 whitespace-nowrap">
                    Active
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  Solo • Ara (Client) • contract id
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Milestones</span>
                  <span className="font-semibold text-foreground">1/4</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-accent rounded-full"></div>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="inline">Next: Logo directions</span>
                  <span className="mx-1 text-muted-foreground">•</span>
                  <span className="inline">due Feb 20, 2026</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Due Date Card */}
          <Card className="rounded-lg border border-border bg-card">
            <CardContent className="p-4 sm:p-6 space-y-3 flex flex-col">
              <h4 className="font-semibold text-accent text-sm sm:text-base">
                Due
              </h4>

              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-foreground font-medium">
                    Mar 15, 2026
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">12 days left</p>
              </div>
            </CardContent>
          </Card>

          {/* Collaboration Card */}
          <Card className="rounded-lg border border-border bg-card">
            <CardContent className="p-4 sm:p-6 space-y-3 flex flex-col">
              <h4 className="font-semibold text-foreground text-sm sm:text-base">
                Collaboration
              </h4>

              <div className="space-y-3 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-gray-400 text-gray-900 text-xs font-semibold flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" />
                    34
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-gray-400 text-gray-900 text-xs font-semibold flex items-center gap-1.5">
                    <Copy className="w-4 h-4" />
                    12
                  </div>
                </div>

                <Button
                  className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm mt-auto"
                  size="sm"
                >
                  Open Workroom
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
