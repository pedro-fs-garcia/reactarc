import { Building2, Leaf, Moon, Sun, Sunset } from "lucide-react"
// Update the import path below if the Card component is located elsewhere
import { Card, CardContent } from "@/components/cards/card"

export default function ThemesDemo() {
    const themes = [
        { name: "Light", icon: <Sun className="text-yellow-400" />, description: "Clean and bright interface" },
        { name: "Dark", icon: <Moon className="text-blue-500" />, description: "Easy on the eyes" },
        { name: "Corporate", icon: <Building2 className="text-gray-700" />, description: "Professional look" },
        { name: "Nature", icon: <Leaf className="text-green-600" />, description: "Organic and fresh" },
        { name: "Sunset", icon: <Sunset className="text-orange-500" />, description: "Warm and inviting" },
    ]
    return (
        <section className="" >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {themes.map((theme) => (
                        <Card
                            key={theme.name}
                            className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-background-100 shadow-md mx-auto mb-4">
                                    {theme.icon}
                                </div>
                                <h3 className="font-semibold text-primary mb-2">{theme.name}</h3>
                                <p className="text-sm text-secondary">{theme.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Theme Preview Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <div className="w-6 h-6 bg-primary rounded-md"></div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Primary Card</h3>
                                    <p className="text-sm text-secondary">Example card component</p>
                                </div>
                            </div>
                            <p className="text-tertiary text-sm leading-relaxed">
                                This card demonstrates the theme system colors with smooth transitions and hover effects.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-primary mb-4">Semantic States</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-success rounded-full"></div>
                                    <span className="text-success text-sm font-medium">Success State</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                                    <span className="text-warning text-sm font-medium">Warning State</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-error rounded-full"></div>
                                    <span className="text-error text-sm font-medium">Error State</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-info rounded-full"></div>
                                    <span className="text-info text-sm font-medium">Info State</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-primary mb-4">Glass Effect</h3>
                            <p className="text-secondary text-sm">
                                Card with glass effect using backdrop-filter and transparency for modern aesthetics.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Gradient Showcase */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-2xl">
                        <h3 className="font-bold text-xl mb-3">Primary Gradient</h3>
                        <p className="text-white/90">Beautiful gradient using primary theme colors for impactful sections.</p>
                    </div>
                    <div className="bg-gradient-warm rounded-2xl p-8 text-white shadow-2xl">
                        <h3 className="font-bold text-xl mb-3">Warm Gradient</h3>
                        <p className="text-white/90">Warm gradient using accent colors for engaging call-to-action areas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}