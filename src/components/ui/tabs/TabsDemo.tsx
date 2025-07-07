import { Settings, User, Bell } from "lucide-react";
import BasicTabs from "./BasicTabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";

export default function TabsDemo() {
    const settingsTabs = [
        {
            value: "profile",
            label: "Profile",
            icon: <User size={16} />,
            content: (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">User Profile</h3>
                    <p className="text-secondary">Manage your profile settings and preferences.</p>
                </div>
            ),
        },
        {
            value: "notifications",
            label: "Notifications",
            icon: <Bell size={16} />,
            content: (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Notification Settings</h3>
                    <p className="text-secondary">Configure your notification preferences.</p>
                </div>
            ),
        },
        {
            value: "settings",
            label: "Settings",
            icon: <Settings size={16} />,
            content: (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">General Settings</h3>
                    <p className="text-secondary">Adjust your application settings.</p>
                </div>
            ),
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Organize content into switchable sections with theme support and responsive design</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {/* Settings Tabs */}
                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-4">Settings Example</h4>
                        <BasicTabs tabs={settingsTabs} defaultValue="profile" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}