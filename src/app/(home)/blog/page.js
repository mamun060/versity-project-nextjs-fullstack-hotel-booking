import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    description: 'Exploring the latest trends and technologies in web development.',
    imageUrl: '/blog/one.jpg',
    date: 'August 24, 2024',
  },
  {
    id: 2,
    title: 'Tailwind CSS: The Ultimate Guide',
    description: 'A comprehensive guide to getting started with Tailwind CSS.',
    imageUrl: '/blog/two.jpg',
    date: 'July 18, 2024',
  },
  {
    id: 3,
    title: 'Next.js Performance Tips',
    description: 'Boost the performance of your Next.js applications with these tips.',
    imageUrl: '/blog/three.jpg',
    date: 'June 10, 2024',
  },
  {
    id: 4,
    title: 'The Future of Web Development',
    description: 'Exploring the latest trends and technologies in web development.',
    imageUrl: '/blog/four.jpg',
    date: 'August 24, 2024',
  },
  {
    id: 5,
    title: 'Tailwind CSS: The Ultimate Guide',
    description: 'A comprehensive guide to getting started with Tailwind CSS.',
    imageUrl: '/blog/five.jpg',
    date: 'July 18, 2024',
  },
  {
    id: 6,
    title: 'Next.js Performance Tips',
    description: 'Boost the performance of your Next.js applications with these tips.',
    imageUrl: '/blog/six.jpg',
    date: 'June 10, 2024',
  },
  {
    id: 7,
    title: 'Next.js Performance Tips',
    description: 'Boost the performance of your Next.js applications with these tips.',
    imageUrl: '/blog/seven.jpg',
    date: 'June 10, 2024',
  },
];

export default function Blog() {
  return (
    <div className="m-4 bg-gray-100 min-h-screen mt-[100px]">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={640}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
