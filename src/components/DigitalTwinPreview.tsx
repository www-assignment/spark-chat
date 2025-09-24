'use client'

import { useState, useEffect } from 'react'

export default function DigitalTwinPreview() {
  const [activePlatform, setActivePlatform] = useState('instagram')
  const [isLearning, setIsLearning] = useState(true)

  const platformStats = {
    instagram: { posts: 24, engagement: '4.2%', growth: '+12%' },
    youtube: { posts: 8, engagement: '8.1%', growth: '+23%' },
    tiktok: { posts: 15, engagement: '12.7%', growth: '+45%' }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLearning(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-6 border border-blue-500/30">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold">Your Digital Twin Preview</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isLearning ? 'bg-green-400' : 'bg-blue-400'}`}></div>
          <span className="text-blue-300 text-sm">{isLearning ? 'Learning...' : 'Analyzing...'}</span>
        </div>
      </div>

      {/* Platform Selector */}
      <div className="flex space-x-2 mb-4">
        {['instagram', 'youtube', 'tiktok'].map(platform => (
          <button
            key={platform}
            onClick={() => setActivePlatform(platform)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              activePlatform === platform
                ? 'bg-blue-500 text-white'
                : 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
            }`}
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </button>
        ))}
      </div>

      {/* Stats Display */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{platformStats[activePlatform as keyof typeof platformStats].posts}</div>
          <div className="text-blue-300 text-xs">Posts Scheduled</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{platformStats[activePlatform as keyof typeof platformStats].engagement}</div>
          <div className="text-blue-300 text-xs">Engagement Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{platformStats[activePlatform as keyof typeof platformStats].growth}</div>
          <div className="text-blue-300 text-xs">This Month</div>
        </div>
      </div>

      {/* AI Activity Feed */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2 text-blue-200 text-sm">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span>Optimized posting time for {activePlatform}</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-200 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>Generated 3 content ideas based on trends</span>
        </div>
      </div>
    </div>
  )
}