import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center gap-1 rounded-xl bg-surface border border-light p-1 shadow-sm transition-colors",
      "w-full sm:w-auto",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "TabsTrigger cursor-pointer relative inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2",
      "text-muted hover:text-primary hover:bg-surface",
      "disabled:pointer-events-none disabled:opacity-50",
      "min-w-fit",
      className
    )}
    style={{
      '--tab-active-bg': 'var(--color-surface-elevated)',
      '--tab-active-text': 'var(--color-text-primary)',
      '--tab-hover-bg': 'var(--color-surface)',
      '--tab-hover-text': 'var(--color-primary)',
    } as React.CSSProperties}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "TabsContent mt-4 rounded-xl p-4 sm:p-6 border border-light shadow-inner min-h-[80px]",
      "text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
      "bg-surface",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
