'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo & Title */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl"></div>
              <Image 
                src="/image/teajump.webp" 
                alt="Chai Cup" 
                width={100} 
                height={100} 
                className="inverImg relative z-10 w-20 h-20 md:w-24 md:h-24 animate-bounce"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-amber-200 bg-clip-text text-transparent">
              Get Me A Chai
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            The platform where <span className="text-amber-400 font-semibold">creators</span> get funded by their <span className="text-purple-400 font-semibold">fans</span>
          </p>
          <p className="text-gray-400 mb-10 text-base md:text-lg">
            Turn your passion into reality, one chai at a time ☕
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 border-2 border-gray-600 hover:border-purple-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10">
                Learn More
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-2xl">✓</span>
              <span>Free to Start</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-2xl">✓</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-2xl">✓</span>
              <span>Instant Withdrawals</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Fund Your Projects With <span className="text-amber-400">Chai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Simple, transparent, and effective. Here&apos;s how creators turn their passion into support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping"></div>
                  <div className="relative bg-gray-900 rounded-full p-4 border-2 border-purple-500/30">
                    <Image 
                      className="w-full h-full object-cover rounded-full" 
                      src="/image/cat.webp" 
                      alt="Create Profile" 
                      width={90} 
                      height={90} 
                    />
                  </div>
                </div>
                <div className="inline-block px-4 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm font-semibold mb-4">
                  Step 1
                </div>
                <h3 className="text-xl font-bold mb-3">Create Your Page</h3>
                <p className="text-gray-400">
                  Set up your creator profile in minutes. Showcase your work and tell your story.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative md:mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping delay-300"></div>
                  <div className="relative bg-gray-900 rounded-full p-4 border-2 border-blue-500/30">
                    <Image 
                      className="w-full h-full object-cover rounded-full" 
                      src="/image/coin1.gif" 
                      alt="Receive Support" 
                      width={90} 
                      height={90} 
                    />
                  </div>
                </div>
                <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4">
                  Step 2
                </div>
                <h3 className="text-xl font-bold mb-3">Share & Receive</h3>
                <p className="text-gray-400">
                  Share your page link anywhere. Your fans can buy you a chai with just a click!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping delay-500"></div>
                  <div className="relative bg-gray-900 rounded-full p-2 border-2 border-amber-500/30 overflow-hidden">
                    <Image 
                      className="w-full h-full object-cover" 
                      src="/image/group.gif" 
                      alt="Community" 
                      width={390} 
                      height={390} 
                    />
                  </div>
                </div>
                <div className="inline-block px-4 py-1 bg-amber-500/20 rounded-full text-amber-400 text-sm font-semibold mb-4">
                  Step 3
                </div>
                <h3 className="text-xl font-bold mb-3">Grow Together</h3>
                <p className="text-gray-400">
                  Build a community of supporters who believe in your vision and want to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 rounded-3xl border border-gray-700/50 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-5xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-400">Creators</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-blue-400 mb-2">50K+</div>
                <div className="text-gray-400">Supporters</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-amber-400 mb-2">₹10L+</div>
                <div className="text-gray-400">Raised</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-green-400 mb-2">0%</div>
                <div className="text-gray-400">Platform Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">See It In Action</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Learn More <span className="text-amber-400">About Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Watch how Get Me A Chai is helping creators around the world achieve their dreams.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-700/50">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/NCBiwGKh50w?si=iqXQaYiabaNhG5AQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Built for <span className="text-amber-400">Creators</span> Like You
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Quick Setup</h3>
              <p className="text-gray-400">Create your page in under 2 minutes. No complicated forms or approvals.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Zero Platform Fees</h3>
              <p className="text-gray-400">Keep 100% of what your fans give you. We believe in supporting creators.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-400">Powered by Razorpay with bank-grade security for all transactions.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Withdrawals</h3>
              <p className="text-gray-400">Get your funds directly to your bank account without delays.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Fan Messages</h3>
              <p className="text-gray-400">Receive heartfelt messages from supporters with every contribution.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-400">Track your earnings, supporters, and growth with detailed insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Get Your First Chai? ☕
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Join thousands of creators who are already receiving support from their fans. 
                It&apos;s free to start and takes less than a minute!
              </p>
              <Link href="/login">
                <button className="bg-white text-purple-600 font-bold px-10 py-5 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                  Create Your Free Page →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
