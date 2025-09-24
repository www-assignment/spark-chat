'use client' // ADD THIS LINE AT THE TOP

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
            <span className="text-2xl font-bold text-white">SparkChat</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-blue-200 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-blue-200 hover:text-white transition">Pricing</a>
            <a href="#about" className="text-blue-200 hover:text-white transition">About</a>
          </div>
          <button 
            onClick={() => router.push('/dashboard')} // FIXED: Using router instead of window.location
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Your Social Media
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AI Co-Pilot</span>
        </h1>
       <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
  SparkChat doesn&apos;t just automate—it learns, adapts, and grows with you. 
  Meet your digital twin that handles the work while you focus on what matters.
</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => router.push('/dashboard')} // FIXED: Using router
            className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Start Free Trial
          </button>
          <button className="border border-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Digital Twin Technology</h3>
            <p className="text-blue-200">Your AI partner that learns your brand voice and makes intelligent decisions.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">All Platforms Unified</h3>
            <p className="text-blue-200">Manage Instagram, YouTube, TikTok, and more from one powerful dashboard.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Content That Trends</h3>
            <p className="text-blue-200">AI that predicts viral trends and creates platform-optimized content automatically.</p>
          </div>
        </div>
      </section>
    </div>
  )
}