import { Camera, Sparkles, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold text-primary-900">PhotoBuddy</span>
          </div>
          <div className="space-x-4">
            <button className="text-secondary-600 hover:text-secondary-900 font-medium">
              Sign In
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-secondary-900 mb-6 text-balance">
            Photography meets AI
          </h1>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto text-balance">
            Share your photos, connect with photographers, and let AI help you create stunning content with feedback, suggestions, and smart editing tools.
          </p>
          <div className="space-x-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
              Start Sharing
            </button>
            <button className="border border-secondary-300 hover:border-secondary-400 text-secondary-700 px-8 py-3 rounded-lg text-lg font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">AI-Powered Feedback</h3>
            <p className="text-secondary-600">Get instant feedback on your photos with AI-generated suggestions for composition, lighting, and editing.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Photography Community</h3>
            <p className="text-secondary-600">Connect with fellow photographers, share your work, and discover amazing photography from around the world.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Smart Tools</h3>
            <p className="text-secondary-600">Auto-tag your photos, generate captions, and get editing suggestions powered by advanced AI technology.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Ready to elevate your photography?</h2>
          <p className="text-secondary-600 mb-6">Join thousands of photographers using AI to improve their craft.</p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
            Join PhotoBuddy
          </button>
        </div>
      </main>
    </div>
  )
}
