import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/cards/card";

interface ReusableCardProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

export default function BasicCard({
    icon,
    title,
    description,
    children,
    footer,
    className,
}: ReusableCardProps) {
    return (
        <Card className={`bg-background text-text ${className || ""}`}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {icon && (
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            {icon}
                        </div>
                    )}
                    <span>{title}</span>
                </CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>{children}</CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    )
}
