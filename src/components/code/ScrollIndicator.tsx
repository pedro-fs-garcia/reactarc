import { motion } from "framer-motion";

export default function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
        >
            <motion.div
                className="w-6 h-10 border-2 border-yellow-400/60 rounded-full flex justify-center cursor-pointer hover:border-yellow-400 transition-colors"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <motion.div
                    className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </motion.div>
    )
}