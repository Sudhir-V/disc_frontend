'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../services/api';
import Modal from '../../components/ui/Modal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const [identifier, setIdentifier] = useState('');
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({ isOpen: false, title: '', message: '' });

    // Redirect if already logged in
    useEffect(() => {
        const userId = localStorage.getItem('disc_user_id');
        if (userId) {
            router.push('/dashboard');
        }
    }, [router]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // Indian phone number validation (10 digits starting with 6-9)
        const indianPhoneRegex = /^[6-9]\d{9}$/;
        return indianPhoneRegex.test(phone);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!identifier) {
            setModal({
                isOpen: true,
                title: 'Missing Information',
                message: 'Please enter your email or phone number.'
            });
            return;
        }

        // Validate format
        const isEmail = identifier.includes('@');

        if (isEmail) {
            if (!validateEmail(identifier)) {
                setModal({
                    isOpen: true,
                    title: 'Invalid Email',
                    message: 'Please enter a valid email address.'
                });
                return;
            }
        } else {
            // Remove any non-digit characters for phone validation
            const cleanedPhone = identifier.replace(/\D/g, '');
            if (!validatePhone(cleanedPhone)) {
                setModal({
                    isOpen: true,
                    title: 'Invalid Phone Number',
                    message: 'Please enter a valid 10-digit phone number (starting with 6-9).'
                });
                return;
            }
        }

        setLoading(true);

        try {
            const data = await login(identifier);

            if (data && data.user) {
                // Store user info
                localStorage.setItem('disc_user_id', data.user._id);
                localStorage.setItem('disc_user_phone', data.user.phone || '');
                localStorage.setItem('disc_user_email', data.user.email || '');
                localStorage.setItem('disc_user_name', data.user.name || '');
                if (data.token) {
                    localStorage.setItem('disc_auth_token', data.token);
                }
                router.push('/dashboard');
            }
        } catch (error) {
            // Handle different error responses
            if (error.response) {
                // Server responded with an error
                if (error.response.status === 404) {
                    setModal({
                        isOpen: true,
                        title: 'Access Denied',
                        message: 'You are not an authenticated user. Please contact your support team.'
                    });
                } else if (error.response.status === 400) {
                    // Validation error from backend
                    setModal({
                        isOpen: true,
                        title: 'Invalid Input',
                        message: error.response.data.message || 'Invalid email or phone number format.'
                    });
                } else {
                    setModal({
                        isOpen: true,
                        title: 'Error',
                        message: 'Failed to login. Please try again.'
                    });
                }
            } else if (error.request) {
                // Request was made but no response received
                setModal({
                    isOpen: true,
                    title: 'Connection Error',
                    message: 'Unable to connect to server. Please check your internet connection.'
                });
            } else {
                // Something else happened
                setModal({
                    isOpen: true,
                    title: 'Error',
                    message: 'An unexpected error occurred. Please try again.'
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white via-green-50 to-green-100 relative overflow-hidden text-zinc-900">
            {/* Logo - Top Left */}
            <div className="absolute top-8 left-8 z-20">
                <Image
                    src="/logo-new.png"
                    alt="Inqisity Logo"
                    width={120}
                    height={36}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Back Button - Top Right */}
            <button
                onClick={() => router.push('/')}
                className="absolute top-8 right-8 z-20 flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors cursor-pointer"
            >
                <ArrowLeft size={20} />
                <span className="font-medium">Back</span>
            </button>

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/40 blur-[120px] rounded-full mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-200/40 blur-[120px] rounded-full mix-blend-multiply" />
            </div>

            <Modal
                isOpen={modal.isOpen}
                onClose={() => setModal({ ...modal, isOpen: false })}
                title={modal.title}
                message={modal.message}
            />

            <div className="z-10 w-full max-w-md">
                <div className="glass-panel p-8 md:p-12 rounded-3xl border border-green-200 shadow-xl backdrop-blur-xl bg-white/70">
                    <div className="text-center mb-10">
                        {/* Powered by Watermark */}
                        <div className="mb-6 flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium mb-0.5">Powered by</span>
                            <img
                                src="/powered-by.png"
                                alt="Powered By Logo"
                                className="h-5 object-contain animate-pulse"
                            />
                        </div>

                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-600 mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-zinc-500 font-light">
                            Enter your email or phone number to continue
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                                <Mail size={20} />
                            </span>
                            <input
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                placeholder="Email or Phone Number"
                                className="w-full bg-white border border-zinc-200 rounded-xl px-12 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-lg shadow-sm"
                                autoFocus
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !identifier}
                            className="w-full bg-zinc-900 text-white font-bold text-lg py-4 rounded-xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 shadow-lg flex items-center justify-center gap-2 group hover:shadow-xl hover:bg-black"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <LoadingSpinner size="sm" color="white" />
                                    <span>Logging in...</span>
                                </div>
                            ) : (
                                <>
                                    Login
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
