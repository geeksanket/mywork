import React, { useState, useRef, useEffect } from 'react'

interface Message {
    id: string
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
}

// SVG Icons
const MessageCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
)

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
)

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
)

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Sup dawg, watt you doin\' here? Need some help? Go for it!!! ?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue('')
        setIsLoading(true)

        try {
            const response = await fetch(
                'https://sankeyy.app.n8n.cloud/webhook/portfolio-ai',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: inputValue,
                    }),
                }
            )

            let data = ''
            try {
                const contentType = response.headers.get('content-type')
                if (contentType?.includes('application/json')) {
                    const jsonData = await response.json()
                    data = typeof jsonData === 'string' ? jsonData : JSON.stringify(jsonData)
                } else {
                    data = await response.text()
                }
            } catch (parseError) {
                console.error('Error parsing response:', parseError)
                data = 'I received your message but had trouble processing the response.'
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data || 'I received your message but couldn\'t generate a response.',
                sender: 'bot',
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            const errorText = error instanceof Error ? error.message : String(error)
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: `Error: ${errorText}`,
                sender: 'bot',
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 w-80 h-[400px] bg-white rounded-xl shadow-lg flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-200 border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#5d8a62] text-white px-4 py-3 flex justify-between items-center">
                        <h3 className="font-medium text-sm">Helper</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-black/10 rounded transition-colors"
                            aria-label="Close chat"
                        >
                            <XIcon />
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                <div
                                    className={`max-w-[85%] px-3 py-2 rounded-2xl ${message.sender === 'user'
                                            ? 'bg-[#5d8a62] text-white rounded-br-sm'
                                            : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                                        }`}
                                >
                                    <p className="text-[14px] leading-relaxed">{message.text}</p>
                                    <span
                                        className={`text-[10px] mt-1 block ${message.sender === 'user'
                                                ? 'text-white/80'
                                                : 'text-gray-400'
                                            }`}
                                    >
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                                    <div className="flex space-x-1.5">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form
                        onSubmit={sendMessage}
                        className="border-t border-gray-100 p-3 bg-white"
                    >
                        <div className="flex gap-2 items-center bg-gray-50 rounded-full border border-gray-200 p-1 pl-3">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Message..."
                                disabled={isLoading}
                                className="flex-1 bg-transparent text-sm focus:outline-none disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputValue.trim()}
                                className="bg-[#5d8a62] hover:bg-[#47694b] text-white p-2 rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                                aria-label="Send message"
                            >
                                <SendIcon />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 w-12 h-12 bg-[#5d8a62] hover:bg-[#47694b] text-white rounded-full shadow-md transition-colors duration-200 flex items-center justify-center z-50"
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? <XIcon /> : <MessageCircleIcon />}
            </button>
        </>
    )
}