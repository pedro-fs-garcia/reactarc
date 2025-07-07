import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";

interface TabItem {
    value: string;
    label: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
}

interface ReusableTabsProps {
    tabs: TabItem[];
    defaultValue?: string;
    className?: string;
    orientation?: "horizontal" | "vertical";
}

export default function BasicTabs({ 
    tabs, 
    defaultValue, 
    className,
    orientation = "horizontal" 
}: ReusableTabsProps) {
    const defaultTab = defaultValue || (tabs[0]?.value ?? "");

    return (
        <Tabs 
            defaultValue={defaultTab} 
            orientation={orientation}
            className={`w-full ${className || ""}`}
        >
            <TabsList className="w-full sm:w-auto justify-start sm:justify-center overflow-x-auto">
                {tabs.map(({ value, label, icon }) => (
                    <TabsTrigger 
                        key={value} 
                        value={value} 
                        className="flex items-center gap-2 px-3 py-2 min-w-fit whitespace-nowrap"
                    >
                        {icon && <span className="flex-shrink-0">{icon}</span>}
                        <span className="hidden sm:inline">{label}</span>
                        <span className="sm:hidden">{icon || label.charAt(0)}</span>
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(({ value, content }) => (
                <TabsContent 
                    key={value} 
                    value={value} 
                    className="mt-4 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
                >
                    {content}
                </TabsContent>
            ))}
        </Tabs>
    );
}
