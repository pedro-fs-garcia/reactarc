import { Moon, Sun, Zap } from "lucide-react";
import BasicTabs from "./BasicTabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";

export default function TabsDemo() {
    const tabItems = [
        {
            value: "tab1",
            label: "Light Theme",
            icon: <Sun size={16} />,
            content: (
                <p className="text-secondary">
                    Light theme content. Use tabs to switch between different sections with smooth animations.
                </p>
            ),
        },
        {
            value: "tab2",
            label: "Dark Theme",
            icon: <Moon size={16} />,
            content: (
                <p className="text-secondary">
                    Dark theme content. Tabs are fully styled with the theme system for consistent appearance.
                </p>
            ),
        },
        {
            value: "tab3",
            label: "Accent",
            icon: <Zap size={16} />,
            content: (
                <p className="text-secondary">
                    Accent content. Add any content inside tabs with full theme support.
                </p>
            ),
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Organize content into switchable sections</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center p-4 text-text">
                    <BasicTabs tabs={tabItems} defaultValue="tab1" />
                </div>
            </CardContent>
        </Card>
    );
}