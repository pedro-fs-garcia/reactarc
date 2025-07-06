import BasicCard from "@/components/cards/BasicCard";
import { AnimatedText } from "./AnimatedText";
import CopyText from "./CopyText";

export default function TextsDemo() {
    return (
        <section id="texts-demo" className="text-primary">
            <BasicCard
                icon={<span className="text-primary font-bold text-sm">T</span>}
                title="Texts Components"
                description="Various ways to layout and display texts"
            >
                <div className="flex flex-wrap gap-4 items-center">
                    <div>
                        <h3 className="font-semibold">Copy text</h3>
                        <CopyText text={"A field with text that can be easily copied."} />
                    </div>
                    <div>
                        <h3 className="font-semibold">Animated Text</h3>
                        <AnimatedText>
                            Text that will be animated the first time it shows on screen. Works better for short titles.
                        </AnimatedText>
                    </div>
                </div>
            </BasicCard>
        </section>
    )
}