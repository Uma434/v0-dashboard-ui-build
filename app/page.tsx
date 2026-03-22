import { DashboardHeader } from '@/components/dashboard-header';
import { ProjectFilters } from '@/components/project-filters';
import { ProjectCards } from '@/components/project-cards';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />

      {/* Main Content */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-balance text-foreground">
            Active Projects
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Track delivery work: milestones, deadlines, revisions, messages, files, and resolution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8">
          <ProjectFilters />
        </div>

        {/* Project Cards */}
        <ProjectCards />
      </div>
    </main>
  );
}
