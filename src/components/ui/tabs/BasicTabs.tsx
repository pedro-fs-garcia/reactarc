import React, { useState } from "react";
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
}

export default function BasicTabs({ tabs, defaultValue, className }: ReusableTabsProps) {
    const [tab, setTab] = useState(defaultValue || (tabs[0]?.value ?? ""));

    return (
        <Tabs value={tab} onValueChange={setTab} className={`w-full text-text ${className || ""}`} >
            <TabsList>
                {tabs.map(({ value, label, icon }) => (
                    <TabsTrigger key={value} value={value} className="flex items-center gap-2 px-3 py-2 rounded-t hover:bg-primary">
                        {icon}
                        <span>{label}</span>
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(({ value, content }) => (
                <TabsContent key={value} value={value} className="mt-4">
                    {content}
                </TabsContent>
            ))}
        </Tabs>
    )
};
