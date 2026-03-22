'use client';

import { useState } from 'react';
import { Users, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FilterType = 'solo' | 'teams' | 'active' | 'completed' | 'disputed';

interface ProjectFiltersProps {
  onFilterChange?: (filter: FilterType) => void;
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('solo');

  const filters: Array<{ id: FilterType; label: string; icon?: React.ReactNode }> = [
    { id: 'solo', label: 'Solo', icon: <Radio className="w-4 h-4" /> },
    { id: 'teams', label: 'Teams', icon: <Users className="w-4 h-4" /> },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
    { id: 'disputed', label: 'Disputed' },
  ];

  const handleFilterClick = (filterId: FilterType) => {
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          variant={activeFilter === filter.id ? 'default' : 'outline'}
          className={cn(
            'text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5',
            activeFilter === filter.id
              ? 'bg-accent text-accent-foreground hover:bg-accent/90 border-accent'
              : 'bg-background text-foreground hover:bg-muted/50 border-border'
          )}
          size="sm"
        >
          {filter.icon}
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
