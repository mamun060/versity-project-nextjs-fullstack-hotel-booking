import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future Destinition',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Exploring the latest trends and technologies in web development.',
    imageUrl: '/blog/one.jpg',
    date: 'August 24, 2024',
  },
  {
    id: 2,
    title: 'Honeymoon at Coxs Bazar',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. A comprehensive guide to getting started with Tailwind CSS.',
    imageUrl: '/blog/two.jpg',
    date: 'July 18, 2024',
  },
  {
    id: 3,
    title: 'Honeymoon at Franch',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Boost the performance of your Next.js applications with these tips.',
    imageUrl: '/blog/three.jpg',
    date: 'June 10, 2024',
  },
  {
    id: 4,
    title: 'Honeymoon at Italy',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Exploring the latest trends and technologies in web development.',
    imageUrl: '/blog/four.jpg',
    date: 'August 24, 2024',
  },
  {
    id: 5,
    title: 'Honeymoon at Japan',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. A comprehensive guide to getting started with Tailwind CSS.',
    imageUrl: '/blog/five.jpg',
    date: 'July 18, 2024',
  },
  {
    id: 6,
    title: 'Honeymoon at Germany',
    description: 'Boost the performance of your Next.js applications with these tips.',
    imageUrl: '/blog/six.jpg',
    date: 'June 10, 2024',
  },
  {
    id: 7,
    title: 'Honeymoon at Thailand',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Boost the performance of your Next.js applications with these tips.',
    imageUrl: '/blog/seven.jpg',
    date: 'June 10, 2024',
  },
];

export default function Blog() {
  return (
    <div className="m-4 bg-gray-100 min-h-screen pt-28">
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
                {/* <p className="text-gray-600 mb-4">{post.description}</p> */}
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
