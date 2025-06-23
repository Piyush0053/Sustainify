import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📚' },
    { id: 'recycling', name: 'Recycling Tips', icon: '♻️' },
    { id: 'environment', name: 'Environment', icon: '🌱' },
    { id: 'technology', name: 'Technology', icon: '🔬' },
    { id: 'sustainability', name: 'Sustainability', icon: '🌍' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Plastic Recycling: AI-Powered Solutions',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way we sort and process plastic waste, making recycling more efficient than ever.',
      category: 'technology',
      readTime: '5 min read',
      date: '2024-01-15',
      image: '🤖',
      gradient: 'from-blue-400 to-cyan-600',
      featured: true
    },
    {
      id: 2,
      title: '10 Creative Ways to Upcycle Household Items',
      excerpt: 'Transform your everyday waste into beautiful, functional items with these innovative upcycling ideas that anyone can try at home.',
      category: 'recycling',
      readTime: '7 min read',
      date: '2024-01-12',
      image: '🎨',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      id: 3,
      title: 'The Hidden Environmental Cost of E-Waste',
      excerpt: 'Understanding the environmental impact of electronic waste and why proper e-waste recycling is crucial for our planet\'s future.',
      category: 'environment',
      readTime: '6 min read',
      date: '2024-01-10',
      image: '📱',
      gradient: 'from-red-400 to-pink-600'
    },
    {
      id: 4,
      title: 'Building a Circular Economy: Success Stories from India',
      excerpt: 'Explore inspiring examples of how Indian companies and communities are creating sustainable business models through circular economy principles.',
      category: 'sustainability',
      readTime: '8 min read',
      date: '2024-01-08',
      image: '🔄',
      gradient: 'from-purple-400 to-indigo-600'
    },
    {
      id: 5,
      title: 'Zero Waste Living: A Beginner\'s Guide',
      excerpt: 'Start your journey towards a zero-waste lifestyle with practical tips and strategies that make a real difference.',
      category: 'sustainability',
      readTime: '4 min read',
      date: '2024-01-05',
      image: '🌿',
      gradient: 'from-green-400 to-teal-600'
    },
    {
      id: 6,
      title: 'Smart Recycling: IoT Sensors in Waste Management',
      excerpt: 'How Internet of Things technology is making waste collection more efficient and helping cities become smarter.',
      category: 'technology',
      readTime: '6 min read',
      date: '2024-01-03',
      image: '📡',
      gradient: 'from-orange-400 to-red-600'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainability <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed about the latest trends in recycling, sustainability, and environmental technology. 
            Learn how to make a positive impact on our planet.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && featuredPost && (
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Featured Article</h2>
            </div>
            <div className={`bg-gradient-to-r ${featuredPost.gradient} p-1 rounded-xl`}>
              <div className="bg-black rounded-lg p-8 hover-lift cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-4xl">{featuredPost.image}</span>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Featured Article</div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{featuredPost.date}</span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <button className="btn btn-primary">
                      Read Full Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center">
                      <span className="text-8xl">{featuredPost.image}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'all' ? regularPosts : filteredPosts).map((post) => (
            <article key={post.id} className="card hover-lift cursor-pointer group">
              <div className={`w-full h-48 bg-gradient-to-br ${post.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-6xl">{post.image}</span>
              </div>
              
              <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="capitalize">{post.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
                  Read More
                </button>
                <svg className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest sustainability tips, recycling guides, 
              and environmental news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;