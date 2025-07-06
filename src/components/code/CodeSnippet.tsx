import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export const CodeSnippet = ({ delay }: any) => (
    <motion.div
        className="absolute top-20 right-10 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 font-mono text-sm shadow-2xl max-w-sm"
        initial={{ opacity: 0, y: -50, rotateX: -30 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
    >
        <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">React Component</span>
        </div>
        <div className="space-y-2">
            <div className="text-blue-300">const <span className="text-yellow-300">Website</span> = {`() =>`} {`{`}</div>
            <div className="ml-4 text-green-300">return (</div>
            <div className="ml-8 text-purple-300">&lt;motion.div</div>
            <div className="ml-12 text-slate-300">className="<span className="text-orange-300">premium</span>"</div>
            <div className="ml-12 text-slate-300">animate={`{`}<span className="text-yellow-300">awesome</span>{`}`}</div>
            <div className="ml-8 text-purple-300">/&gt;</div>
            <div className="ml-4 text-green-300">)</div>
            <div className="text-blue-300">{`}`}</div>
        </div>
    </motion.div>
)