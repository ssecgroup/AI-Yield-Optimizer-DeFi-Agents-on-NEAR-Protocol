import React from 'react';
import { Brain, TrendingUp, Shield, BarChart2, ArrowRight, Database, Zap } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Yield Optimization on
              <span className="text-indigo-600"> NEAR Protocol</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Maximize your DeFi returns with intelligent automation. Our AI continuously analyzes and optimizes your yield farming strategy for the best possible returns.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">$245M+</div>
              <div className="text-gray-600">Total Value Locked</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">15.8%</div>
              <div className="text-gray-600">Average APY</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Intelligent Yield Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Driven Analytics"
              description="Advanced machine learning algorithms analyze market conditions and predict optimal yield farming strategies."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Automated Rebalancing"
              description="Smart contracts automatically reallocate funds to maximize returns based on real-time market data."
            />
            <FeatureCard
              icon={Shield}
              title="Risk Management"
              description="Sophisticated risk assessment protocols ensure your assets are protected while maximizing yields."
            />
            <FeatureCard
              icon={BarChart2}
              title="Performance Tracking"
              description="Detailed analytics and reporting to monitor your portfolio's performance in real-time."
            />
            <FeatureCard
              icon={Database}
              title="Multi-Protocol Support"
              description="Access yield opportunities across multiple DeFi protocols on NEAR ecosystem."
            />
            <FeatureCard
              icon={Zap}
              title="Gas Optimization"
              description="Smart transaction batching and timing to minimize gas fees and maximize efficiency."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Yield?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already maximizing their DeFi returns with AI-powered optimization.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Start Farming Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">AI Yield Optimizer</h3>
              <p className="text-sm">
                Intelligent DeFi automation platform powered by advanced AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>Yield Farming</li>
                <li>Liquidity Pools</li>
                <li>Staking</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>API</li>
                <li>Security</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 AI Yield Optimizer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;