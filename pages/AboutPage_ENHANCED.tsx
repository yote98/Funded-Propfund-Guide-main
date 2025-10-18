import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">About Funded Program Guide</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in navigating the world of proprietary trading firms. 
            We research, we analyze, we guide you to success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-md p-8 mb-12">
        <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
          <p>
            Welcome to Funded Program Guide, your number one source for navigating the world of proprietary trading firms. We are dedicated to giving you the very best, with a focus on dependability, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2023, Funded Program Guide has come a long way from its beginnings. When we first started out, our passion for helping other traders find legitimate and fair funding opportunities drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online resource. We now serve traders all over the world, and are thrilled to be a part of the fair-trade wing of the proprietary trading industry.
          </p>
          <h2 className="text-2xl font-bold text-slate-800 mt-6 mb-3">Our Mission</h2>
          <p>
            Our mission is simple: to provide traders with the most accurate, unbiased, and up-to-date information on prop trading firms. We believe that with the right information, every trader can find a firm that matches their style, strategy, and goals, empowering them to take their trading career to the next level.
          </p>
          <p>
            We hope you enjoy our reviews and comparisons as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to reach out.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-slate-50 to-teal-50 border border-slate-200 rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about prop trading firms? Need help choosing the right firm for your strategy? 
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Email Us</h3>
                <p className="text-slate-600">support@fundedprogramguide.com</p>
                <p className="text-xs text-slate-400 mt-1">Updated: {new Date().toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Response Time</h3>
                <p className="text-slate-600">Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Location</h3>
                <p className="text-slate-600">Global - Serving Traders Worldwide</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a 
                href="https://twitter.com/fundedprogramguide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/fundedprogramguide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@fundedprogramguide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Discord */}
              <a 
                href="https://discord.gg/fundedprogramguide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/fundedprogramguide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-6 border-t border-slate-200">
          <p className="text-slate-600 mb-4">Ready to start your funded trading journey?</p>
          <a 
            href="/compare" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-slate-900 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300"
          >
            Compare Prop Firms
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
