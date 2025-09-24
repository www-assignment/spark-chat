'use client'

import { useState } from 'react'
import { aiService } from '../lib/aiService'

export default function AIContentGenerator() {
  const [topic, setTopic] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('instagram')
  const [ideas, setIdeas] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCaption, setGeneratedCaption] = useState('')

  const generateIdeas = async () => {
    if (!topic.trim()) return
    
    setIsGenerating(true)
    try {
      const newIdeas = await aiService.generateContentIdeas(topic, selectedPlatform)
      setIdeas(newIdeas)
      setGeneratedCaption('')
    } catch (error) {
      console.error('Error generating ideas:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const generateCaption = async (idea: string) => {
    setIsGenerating(true)
    try {
      const caption = await aiService.generateCaption(idea, selectedPlatform)
      setGeneratedCaption(caption)
    } catch (error) {
      console.error('Error generating caption:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">AI Content Generator</h2>
      
      {/* Input Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">What's your content topic?</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., digital marketing, cooking tips, fitness routines"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Platform</label>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="tiktok">TikTok</option>
          </select>
        </div>
        
        <button
          onClick={generateIdeas}
          disabled={isGenerating || !topic.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          {isGenerating ? '🤖 AI Thinking...' : '✨ Generate Content Ideas'}
        </button>
      </div>

      {/* Generated Ideas */}
      {ideas.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800">AI-Generated Ideas:</h3>
          {ideas.map((idea, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
              <p className="text-slate-700 mb-2">{idea}</p>
              <button
                onClick={() => generateCaption(idea)}
                disabled={isGenerating}
                className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded font-medium hover:bg-blue-100 transition-colors"
              >
                Generate Caption
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Generated Caption */}
      {generatedCaption && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">AI-Generated Caption:</h4>
          <p className="text-blue-700 whitespace-pre-wrap">{generatedCaption}</p>
          <button className="mt-2 text-sm bg-white text-blue-600 px-3 py-1 rounded border border-blue-300 hover:bg-blue-50 transition-colors">
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  )
}