'use client'

import { useState } from 'react'
import DigitalTwinPreview from '@/components/DigitalTwinPreview'
import PlatformConnector from '@/components/PlatformConnector'
import AIContentGenerator from '@/components/AIContentGenerator' // ADD THIS IMPORT

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
            <span className="text-xl font-bold text-slate-800">SparkChat</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="font-medium text-slate-800">Welcome back!</div>
              <div className="text-sm text-slate-500">Ready to grow your presence</div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold">
              U
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6">
            <nav className="space-y-1">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'content', label: 'Content Calendar', icon: '📅' },
                { id: 'automation', label: 'Automation', icon: '⚡' },
                { id: 'analytics', label: 'Analytics', icon: '📈' },
                { id: 'settings', label: 'Settings', icon: '⚙️' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-3 space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Welcome to SparkChat! 🚀</h1>
              <p className="text-blue-100">Your AI social media co-pilot is ready to learn your style and automate your growth.</p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column - Platform Connections */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-slate-800 mb-4">Connect Your Platforms</h2>
                  <PlatformConnector />
                </div>
                
                {/* AI Content Generator */}
                <AIContentGenerator />
              </div>

              {/* Right Column - Digital Twin */}
              <div>
                <DigitalTwinPreview />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}