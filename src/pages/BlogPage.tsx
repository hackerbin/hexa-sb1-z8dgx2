import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the software development process and what it means for developers and businesses.',
    author: 'Alice Johnson',
    date: '2023-05-15',
    category: 'Technology Trends',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Best Practices for Secure Cloud Computing',
    excerpt: 'Learn about the latest best practices for ensuring the security of your cloud-based applications and data.',
    author: 'Bob Smith',
    date: '2023-05-10',
    category: 'Cloud Computing',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'The Rise of Low-Code Development Platforms',
    excerpt: 'Discover how low-code platforms are changing the landscape of software development and enabling faster application delivery.',
    author: 'Carol Williams',
    date: '2023-05-05',
    category: 'Development Tools',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 4,
    title: 'Optimizing Mobile App Performance',
    excerpt: 'Tips and techniques for improving the performance of your mobile applications to enhance user experience.',
    author: 'David Brown',
    date: '2023-04-30',
    category: 'Mobile Development',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
  },
  {
    id: 5,
    title: 'The Impact of 5G on IoT Development',
    excerpt: 'Explore how the rollout of 5G networks is set to revolutionize Internet of Things (IoT) development and create new opportunities.',
    author: 'Emma Davis',
    date: '2023-04-25',
    category: 'IoT',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
  },
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || post.category === selectedCategory)
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Hexa Blog</h1>
      <p className="text-xl text-center mb-12">
        Stay up-to-date with the latest trends and insights in software development and technology.
      </p>

      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} | {post.date} | {post.category}
              </p>
              <p className="mb-4">{post.excerpt}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-xl mt-8">No articles found matching your search criteria.</p>
      )}
    </div>
  );
};

export default BlogPage;