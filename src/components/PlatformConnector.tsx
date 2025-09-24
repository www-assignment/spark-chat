'use client'

import { useState } from 'react'

interface Platform {
  id: string
  name: string
  icon: string
  color: string
  connected: boolean
}

export default function PlatformConnector() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'instagram', name: 'Instagram', icon: '📸', color: 'bg-pink-500', connected: false },
    { id: 'youtube', name: 'YouTube', icon: '🎬', color: 'bg-red-500', connected: false },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'bg-black', connected: false },
    { id: 'telegram', name: 'Telegram', icon: '📢', color: 'bg-blue-400', connected: false }
  ])

  const toggleConnection = (platformId: string) => {
    setPlatforms(platforms.map(p => 
      p.id === platformId ? { ...p, connected: !p.connected } : p
    ))
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {platforms.map(platform => (
        <div
          key={platform.id}
          className={`border-2 rounded-2xl p-4 transition-all cursor-pointer ${
            platform.connected
              ? 'border-green-400 bg-green-50'
              : 'border-slate-200 hover:border-slate-300'
          }`}
          onClick={() => toggleConnection(platform.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${platform.color}`}>
                <span className="text-lg">{platform.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{platform.name}</h3>
                <p className={`text-sm ${platform.connected ? 'text-green-600' : 'text-slate-500'}`}>
                  {platform.connected ? 'Connected' : 'Click to connect'}
                </p>
              </div>
            </div>
            <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-400' : 'bg-slate-300'}`}></div>
          </div>
        </div>
      ))}
    </div>
  )
}