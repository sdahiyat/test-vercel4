import { Camera, Sparkles, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">PhotoBuddy</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Share Photos.
            <span className="text-blue-600"> Get AI Insights.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Connect with photographers worldwide and let AI help you improve your craft.
            Get instant feedback, editing suggestions, and creative inspiration.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700">
              Start Sharing
            </button>
            <button className="text-lg font-semibold text-gray-900 hover:text-gray-600">
              Learn more →
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Everything photographers need
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From AI-powered feedback to a thriving community
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">AI Photo Analysis</h3>
              <p className="mt-2 text-gray-600">
                Get instant feedback on composition, lighting, and technical aspects of your photos.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Smart Editing</h3>
              <p className="mt-2 text-gray-600">
                Receive personalized editing suggestions and auto-generated captions for social media.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Photographer Community</h3>
              <p className="mt-2 text-gray-600">
                Connect with fellow photographers, share work, and discover inspiring content.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to elevate your photography?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of photographers using AI to improve their craft.
          </p>
          <div className="mt-8">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700">
              Start Free Trial
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Free plan includes 10 uploads per month. Premium starts at $10/month.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
