'use client';

import { ArrowRight, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function ProjectCards() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Contracts Header with Search */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Contracts</h3>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-sm">
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
            className="text-xs sm:text-sm"
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
      </div>

      {/* Project Card - Three Column Layout */}
      <div className="rounded-lg border border-border bg-card/50 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {/* Brand Identity + Landing Page Card */}
          <Card className="border-0 rounded-none">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Brand Identity + Landing Page
                  </h4>
                  <Badge className="bg-accent text-accent-foreground text-xs shrink-0">
                    Active
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Solo • Ara (Client) • contract id
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Milestones</span>
                  <span className="font-semibold text-foreground">1/4</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-accent rounded-full"></div>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span>Next: Logo directions</span>
                  <span className="text-foreground">•</span>
                  <span>due Feb 20, 2026</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Due Date Card */}
          <Card className="border-0 rounded-none">
            <CardContent className="p-4 sm:p-6 space-y-4 flex flex-col">
              <h4 className="font-semibold text-foreground text-sm sm:text-base">
                Due
              </h4>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-foreground font-medium">Mar 15, 2026</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  12 days left
                </p>
              </div>

              {/* Spacing for alignment */}
              <div className="pt-6"></div>
            </CardContent>
          </Card>

          {/* Collaboration Card */}
          <Card className="border-0 rounded-none">
            <CardContent className="p-4 sm:p-6 space-y-4 flex flex-col">
              <h4 className="font-semibold text-foreground text-sm sm:text-base">
                Collaboration
              </h4>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                      A
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                      M
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-muted-foreground">+</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-muted text-foreground text-xs font-medium">
                      12
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm"
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
