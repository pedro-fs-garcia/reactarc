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
      "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-background border border-light p-1 shadow-sm",
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
      `
      relative inline-flex items-center justify-center whitespace-nowrap
      rounded-lg px-5 py-2 text-base font-semibold transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus
      text-primary hover:bg-primary-50
      data-[state=active]:text-color-primary data-[state=active]:bg-primary-100
      data-[state=active]:after:absolute data-[state=active]:after:left-4 data-[state=active]:after:right-4
      data-[state=active]:after:-bottom-0.5 data-[state=active]:after:h-0.5
      data-[state=active]:after:rounded-full data-[state=active]:after:bg-color-primary data-[state=active]:after:content-['']
      `,
      className
    )}
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
      "mt-4 rounded-xl p-6 border border-light bg-background shadow-inner min-h-[80px] text-primary",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
