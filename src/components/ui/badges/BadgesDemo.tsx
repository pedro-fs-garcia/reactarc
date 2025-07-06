import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";
import Badge from "@/components/ui/badges/Badge"
import { useState } from "react";
import { TechBadge } from "./TechBadge";
import { Zap } from "lucide-react";

export default function BadgesDemo() {
    const [badges, setBadges] = useState(["React", "TypeScript", "Tailwind"]);
    const removeBadge = (badgeToRemove: string) => {
        setBadges(badges.filter((badge) => badge !== badgeToRemove))
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Labels and tags with various styles</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Variants</h4>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="error">Error</Badge>
                            <Badge variant="info">Info</Badge>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Sizes</h4>
                        <div className="flex flex-wrap gap-3 items-center">
                            <Badge variant="primary" size="lg" rounded>
                                Large Rounded
                            </Badge>
                            <Badge variant="success" size="sm">
                                Small
                            </Badge>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Removable Badges</h4>
                        <div className="flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge key={badge} variant="primary" removable onRemove={() => removeBadge(badge)}>
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Tech Badges</h4>
                        <div className="flex flex-wrap gap-2">
                            <TechBadge icon={<Zap/>} label="Tech Badge" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}