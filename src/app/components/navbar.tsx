"use client";

import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-xl font-bold text-blue-600">Amanda Lucchi Silvestre</span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-500 focus:outline-none lg:hidden"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Links */}
                    <div className="hidden lg:flex space-x-6">
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            Sobre Mim
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-blue-600">
                            Serviços
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contato
                        </Link>
                        <Link href="/appointments" className="text-gray-700 hover:text-blue-600">
                            Atendimentos Feitos
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
                            Sobre Nós
                        </Link>
                        <Link href="/services" className="block py-2 text-gray-700 hover:text-blue-600">
                            Serviços
                        </Link>
                        <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">
                            Contato
                        </Link>
                        <Link href="/appointments" className="block py-2 text-gray-700 hover:text-blue-600">
                            Agendamentos
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}