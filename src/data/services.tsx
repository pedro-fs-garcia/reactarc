import { Zap, PenTool, MousePointerClick, Layers } from "lucide-react";

export const services = [
  {
    icon: <Zap size={20} className="text-primary" />,
    title: "Faster Development",
    description: "With ReactArc, you can build modern interfaces faster, reducing project delivery times.",
    features: ["Reusable Components", "Optimized Boilerplate", "Fast Builds"],
  },
  {
    icon: <PenTool size={20} className="text-primary" />,
    title: "Easily Adaptable Design",
    description: "Layouts can be customized to match different styles, brands, and client requirements.",
    features: ["Consistent UI/UX", "Theme Support", "Tailwind Integration"],
  },
  {
    icon: <MousePointerClick size={20} className="text-primary" />,
    title: "Interactive Experience",
    description: "Components with smooth animations, responsiveness, and high interactivity delight your users.",
    features: ["Framer Motion Animations", "Visual Feedback", "Accessible Components"],
  },
  {
    icon: <Layers size={20} className="text-primary" />,
    title: "Easy Maintenance",
    description: "Organized code, independent components, and TypeScript typing make evolving your project simple and safe.",
    features: ["Modular Structure", "Testable Components", "Clear Documentation"],
  },
];
