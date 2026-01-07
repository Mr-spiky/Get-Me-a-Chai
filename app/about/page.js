'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Image 
              src="/image/teajump.webp" 
              alt="Chai Cup" 
              width={80} 
              height={80} 
              className="inverImg animate-bounce"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            About Get Me A Chai
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering creators worldwide to turn their passion into reality, one chai at a time. 
            We believe every great idea deserves a chance to flourish.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Fueling Dreams with <span className="text-amber-400">Chai</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Get Me A Chai is more than just a crowdfunding platform – it&apos;s a community where 
                creators and supporters come together. We provide a simple, transparent, and 
                effective way for artists, developers, writers, and innovators to receive 
                support from their fans.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you&apos;re building the next big app, creating stunning artwork, or writing 
                your first novel, your supporters can buy you a chai to keep you going!
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/login">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 transition-all duration-300 hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-900/50 rounded-2xl">
                    <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
                    <div className="text-gray-400 text-sm">Active Creators</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
                    <div className="text-gray-400 text-sm">Supporters</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-2xl">
                    <div className="text-4xl font-bold text-amber-400 mb-2">₹1M+</div>
                    <div className="text-gray-400 text-sm">Funded</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-2xl">
                    <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
                    <div className="text-gray-400 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Simple as Making <span className="text-amber-400">Chai</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Create Your Page</h3>
                <p className="text-gray-400">
                  Sign up and set up your creator profile in minutes. Add your bio, 
                  social links, and customize your page to reflect your brand.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Share With Fans</h3>
                <p className="text-gray-400">
                  Share your unique page link with your audience across social media, 
                  videos, or anywhere your fans can find you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Receive Support</h3>
                <p className="text-gray-400">
                  Your fans can buy you a chai with just a few clicks. Receive 
                  payments directly and keep creating what you love!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Built for <span className="text-amber-400">Creators</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2">Zero Platform Fees</h3>
              <p className="text-gray-400 text-sm">Keep more of what you earn. We believe creators deserve every rupee.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Instant Payments</h3>
              <p className="text-gray-400 text-sm">Get your funds quickly with secure Razorpay integration.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-bold mb-2">Custom Profiles</h3>
              <p className="text-gray-400 text-sm">Make your page uniquely yours with customization options.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">Fan Messages</h3>
              <p className="text-gray-400 text-sm">Receive heartfelt messages from your supporters with every chai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">What We <span className="text-amber-400">Stand For</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-400">We prioritize building meaningful connections between creators and their supporters.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
              <p className="text-gray-400">Your data and transactions are protected with industry-standard security measures.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">We continuously improve our platform to give creators the best tools possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-[url('/image/pattern.png')] opacity-10"></div>
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Join thousands of creators who are already receiving support from their fans. 
                It only takes a minute to get started!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                  <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                    Start Free Today
                  </button>
                </Link>
                <Link href="/">
                  <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We&apos;re here to help! Reach out to us anytime and we&apos;ll get back to you as soon as possible.
          </p>
          <a 
            href="mailto:support@getmeachai.com" 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            support@getmeachai.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
