'use client';

import { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Marketplace', 'Dashboard'];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground">
            <span className="text-xs font-bold text-background">H</span>
          </div>
          <span className="hidden text-lg font-bold sm:inline">
            <span className="text-foreground">Hustle</span>
            <span className="ml-1 text-accent">Hustle</span>
          </span>
          <span className="sm:hidden text-lg font-bold">
            <span className="text-foreground">H</span>
            <span className="text-accent">H</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              className={cn(
                'text-sm font-medium',
                item === 'Dashboard'
                  ? 'text-accent underline'
                  : 'text-foreground/70 hover:text-foreground'
              )}
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex relative w-64">
          <Input
            placeholder="Search here"
            className="pl-10 bg-muted/50"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Notification & Profile */}
          <Button
            variant="ghost"
            size="icon"
          >
            <Bell className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-8 h-8 bg-accent text-accent-foreground"
          >
            <span className="text-xs font-bold">U</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden border-t border-border px-4 py-3">
        <div className="relative">
          <Input
            placeholder="Search here"
            className="pl-10 bg-muted/50 text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="w-full justify-start text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Button>
          ))}
        </nav>
      )}

      {/* Divider */}
      <div className="h-1 bg-accent"></div>
    </header>
  );
}
