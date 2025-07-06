import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";
import { MessageCircle, User } from "lucide-react";
import CtaButton from "./CtaButton";
import { BaseButton } from "./BaseButton";

export default function ButtonsDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">B</span>
                    </div>
                    Buttons
                </CardTitle>
                <CardDescription>Various button styles and states for different use cases</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4 items-center">
                    <BaseButton variant="primary" size="md" leftIcon={<User size={16} />}>
                        Primary Button
                    </BaseButton>
                    <BaseButton variant="secondary" size="md">
                        Secondary
                    </BaseButton>
                    <BaseButton variant="outline" size="md">
                        Outline
                    </BaseButton>
                    <BaseButton variant="ghost" size="md">
                        Ghost
                    </BaseButton>
                    <BaseButton variant="danger" size="md">
                        Danger
                    </BaseButton>
                    <CtaButton text="Call to Action" primaryIcon secondaryIcon />
                    <a
                        href="https://wa.me/5512999999999?text=Hello! I'd like to know more."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center font-semibold transition-all duration-200 select-none focus:outline-none focus-ring px-4 py-2 text-base rounded-lg text-white"
                        style={{ background: "linear-gradient(90deg, #25D366 0%, #128C7E 100%)" }}
                    >
                        <MessageCircle size={16} className="mr-2" />
                        WhatsApp
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}