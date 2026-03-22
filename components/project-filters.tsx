'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FilterType = 'solo' | 'teams' | 'active' | 'completed' | 'disputed';

interface ProjectFiltersProps {
  onFilterChange?: (filter: FilterType) => void;
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('solo');

  const filters: Array<{ id: FilterType; label: string }> = [
    { id: 'solo', label: 'Solo' },
    { id: 'teams', label: 'Teams' },
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
          className={cn(
            'text-xs sm:text-sm font-medium transition-all',
            activeFilter === filter.id
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'bg-muted text-foreground hover:bg-muted/80'
          )}
          size="sm"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
