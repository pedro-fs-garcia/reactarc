import { ChevronRight, Code, Layers, Palette, Sparkles, Zap } from "lucide-react";
import { BaseButton } from "../ui/buttons/BaseButton";
import { globalInfo } from "@/data/globalInfo";

export default function BaseHero() {
    return (
        <section id="hero" className="">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        {globalInfo.name}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                        {globalInfo.slogan}
                    </h1>

                    <p className="text-xl text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
                        {globalInfo.description}
                    </p>

                    <BaseButton
                        variant="outline"
                        size="lg"
                        leftIcon={<Code size={20} className="mr-2" />}
                        rightIcon={<ChevronRight size={20} className="ml-2" />}
                        onClick={() => window.open("https://github.com/pedro-fs-garcia/reactarc", "_blank", "noopener, noreferrer")}
                    >
                        View Documentation
                    </BaseButton>
                </div>
            </div>

            <div className="bg-card/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Palette className="text-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">Theme System</h3>
                            <p className="text-secondary">Multiple pre-built themes with seamless switching capabilities</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Layers className="text-success" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">UI Components</h3>
                            <p className="text-secondary">Comprehensive library of reusable and customizable components</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="text-warning" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">Ready to Use</h3>
                            <p className="text-secondary">Accessibility, responsiveness, and animations built-in</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}