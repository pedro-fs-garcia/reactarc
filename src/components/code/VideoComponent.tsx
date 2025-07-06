import { motion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import { useState } from "react"

type Props = {
    videoUrl: string
}

export default function VideoComponent({ videoUrl }: Props) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true)
    const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

    const toggleVideo = () => {
        if (videoRef) {
            if (isVideoPlaying) {
                videoRef.pause()
            } else {
                videoRef.play()
            }
            setIsVideoPlaying(!isVideoPlaying)
        }
    }

    return (
        <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <video
                ref={setVideoRef}
                className="w-full h-[500px] lg:h-[600px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=600&width=500"
            >
                <source src={videoUrl} type="video/mp4" />
                <source src="/services-video.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
            </video>

            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            {/* Controles do vídeo */}
            <motion.button
                onClick={toggleVideo}
                className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full p-3 text-white hover:bg-slate-800/80 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                {isVideoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </motion.button>

            {/* Label do vídeo */}
            <motion.div
                className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Projetos únicos
                </div>
            </motion.div>

            {/* Borda decorativa */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-yellow-400/30 via-transparent to-blue-400/30 pointer-events-none" />
        </motion.div>
    )
}