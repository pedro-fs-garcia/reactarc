"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Terminal, Play } from 'lucide-react'
import { useEffect, useState, useRef } from "react"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import "highlight.js/styles/github-dark.css"

hljs.registerLanguage("typescript", typescript)

export default function CodingPanel() {
    const [displayedCode, setDisplayedCode] = useState("")
    const [currentLine, setCurrentLine] = useState(0)
    const [isTyping, setIsTyping] = useState(false)
    const [cursor, setCursor] = useState(true)
    const [isComplete, setIsComplete] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 30 })
    const rotateX = useTransform(mouseYSpring, [-300, 300], [5, -5])
    const rotateY = useTransform(mouseXSpring, [-300, 300], [-5, 5])

    const containerRef = useRef<HTMLDivElement>(null)

    const codeLines = [
        "// Agora Vai 360",
        "import { motion, useTransform } from 'framer-motion'",
        "import { useState, useEffect } from 'react'",
        "",
        "export default function Beneficios() {",
        "  const [beneficios, setBeneficios] = useState<string[]>([])",
        "  const [contratarAv, setContratarAv] = useState<boolean>(false)",
        "",
        "  const handleContratar = (iniciar: boolean) => {",
        "    setHireAv(iniciar)",
        "    if (iniciar) {",
        "      setBeneficios([",
        "        'Liberdade de conteúdo',",
        "        'SEO otimizado',",
        "        'Geração de leads',",
        "        'Presença profissional',",
        "      ])",
        "    } else {",
        "      setBeneficios([])",
        "    }",
        "  }",
        "",
        "  return (",
        "    <section className=\"relative min-h-screen\">",
        "      <motion.div",
        "        className=\"bg-gradient-to-br from-slate-950 to-slate-800 p-12 rounded-xl\"",
        "        initial={{ opacity: 0, y: 20 }}",
        "        animate={{ opacity: 1, y: 0 }}",
        "        transition={{ duration: 0.8, ease: 'easeOut' }}",
        "      >",
        "        <h1 className=\"text-5xl font-bold text-yellow-400\">AGORA VAI 360</h1>",
        "        <ul className=\"mt-6 space-y-2 list-disc list-inside text-slate-300\">",
        "          {beneficios.map((item, index) => (",
        "            <li key={index}>{item}</li>",
        "          ))}",
        "        </ul>",

        "        <motion.button",
        "          whileHover={{ scale: 1.05 }}",
        "          onClick={() => handleContratar(true)}",
        "          className=\"mt-8 px-6 py-3 bg-yellow-500 text-black font-medium rounded-md\"",
        "        >",
        "          Iniciar Projeto",
        "        </motion.button>",
        "      </motion.div>",
        "    </section>",
        "  )",
        "}",
    ]

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    useEffect(() => {
        const typeCode = async () => {
            setIsTyping(true)
            setDisplayedCode("")
            setCurrentLine(0)

            for (let lineIndex = 0; lineIndex < codeLines.length; lineIndex++) {
                setCurrentLine(lineIndex)
                const line = codeLines[lineIndex]
                for (let charIndex = 0; charIndex <= line.length; charIndex++) {
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 30 + 15))
                    const currentChar = line.substring(0, charIndex)
                    const linesBeforeCurrent = codeLines.slice(0, lineIndex).join('\n')
                    const currentDisplay = linesBeforeCurrent + (lineIndex > 0 ? '\n' : '') + currentChar
                    setDisplayedCode(currentDisplay)
                }
                await new Promise(resolve => setTimeout(resolve, 100))
            }

            setIsTyping(false)
            setIsComplete(true)
        }

        const timer = setTimeout(typeCode, 1500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCursor(prev => !prev)
        }, 530)
        return () => clearInterval(interval)
    }, [])

    const restartAnimation = () => {
        setIsComplete(false)
        setDisplayedCode("")
        setCurrentLine(0)
        setIsTyping(true)

        setTimeout(() => {
            const typeCode = async () => {
                for (let lineIndex = 0; lineIndex < codeLines.length; lineIndex++) {
                    setCurrentLine(lineIndex)
                    const line = codeLines[lineIndex]
                    for (let charIndex = 0; charIndex <= line.length; charIndex++) {
                        await new Promise(resolve => setTimeout(resolve, Math.random() * 30 + 15))
                        const currentChar = line.substring(0, charIndex)
                        const linesBeforeCurrent = codeLines.slice(0, lineIndex).join('\n')
                        const currentDisplay = linesBeforeCurrent + (lineIndex > 0 ? '\n' : '') + currentChar
                        setDisplayedCode(currentDisplay)
                    }
                    await new Promise(resolve => setTimeout(resolve, 100))
                }
                setIsTyping(false)
                setIsComplete(true)
            }
            typeCode()
        }, 100)
    }

    useEffect(() => {
        hljs.registerLanguage('typescript', typescript)
    }, [])

    const getHighlightedCode = (code: string) => {
        const highlighted = hljs.highlight(code, { language: 'typescript' }).value
        const blinkingCursor = cursor && isTyping
            ? '<span style="background-color: #f59e0b; color: #000; animation: blink 1s step-start 1s infinite;">█</span>'
            : ''
        return highlighted + blinkingCursor
    }


    return (
        <motion.div
            ref={containerRef}
            className="relative w-full h-[600px] rounded-3xl overflow-hidden perspective-1000"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-black/95 backdrop-blur-xl border border-slate-600/30 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-700/50 bg-slate-800/50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">
                        <Terminal className="h-4 w-4" />
                        <span>Beneficios.tsx</span>
                    </div>
                    <div className="flex items-center gap-3 ml-auto">
                        <div className="text-xs text-slate-500">
                            {isTyping ? (
                                <span className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                    Escrevendo...
                                </span>
                            ) : (
                                <span className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    Concluído
                                </span>
                            )}
                        </div>
                        {isComplete && (
                            <motion.button
                                onClick={restartAnimation}
                                className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded text-xs text-slate-300 hover:text-white transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Play className="h-3 w-3" />
                                Replay
                            </motion.button>
                        )}
                    </div>
                </div>
                <div className="p-6 h-[calc(100%-4rem)] overflow-hidden">
                    <div className="font-mono text-sm leading-relaxed h-full overflow-y-auto">
                        <div className="flex">
                            <div className="text-slate-500 text-right pr-4 select-none flex-shrink-0 w-12 border-r border-slate-700/30">
                                {displayedCode.split('\n').map((_, index) => (
                                    <div key={index} className={`h-6 transition-colors duration-200 ${index === currentLine && isTyping ? 'text-yellow-400' : ''}`}>{index + 1}</div>
                                ))}
                            </div>
                            <div className="flex-1 text-slate-200 pl-4">
                                <pre
                                    className="whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{ __html: getHighlightedCode(displayedCode) }}
                                />

                                {/* <pre className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: syntaxHighlight(displayedCode) + (cursor && isTyping ? '<span style="background-color: #f59e0b; color: #000; animation: blink 1s infinite;">█</span>' : '') }} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-blue-500/10 to-purple-500/10 blur-xl -z-10" />
            </div>
        </motion.div>
    )
}

