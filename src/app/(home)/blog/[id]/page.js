const blogPosts = [
    {
      id: 1,
      title: 'The Future Destion',
      description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Exploring the latest trends and technologies in web development.',
      imageUrl: 'blog/one.jpg',
      date: 'August 24, 2024',
    },
    {
      id: 2,
      title: 'Honeymoon at Coxs Bazar',
      description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. A comprehensive guide to getting started with Tailwind CSS.',
      imageUrl: 'blog/two.jpg',
      date: 'July 18, 2024',
    },
    {
      id: 3,
      title: 'Honeymoon at Franch',
      description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Boost the performance of your Next.js applications with these tips.',
      imageUrl: 'blog/three.jpg',
      date: 'June 10, 2024',
    },
    {
      id: 4,
      title: 'Honeymoon at Italy',
      description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Exploring the latest trends and technologies in web development.',
      imageUrl: 'blog/four.jpg',
      date: 'August 24, 2024',
    },
    {
      id: 5,
      title: 'Honeymoon at Japan',
      description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. A comprehensive guide to getting started with Tailwind CSS.',
      imageUrl: 'blog/five.jpg',
      date: 'July 18, 2024',
    },
    {
      id: 6,
      title: 'Honeymoon at Germany',
      description: 'Boost the performance of your Next.js applications with these tips.',
      imageUrl: 'blog/six.jpg',
      date: 'June 10, 2024',
    },
    {
      id: 7,
      title: 'Honeymoon at Thailand',
      description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Boost the performance of your Next.js applications with these tips.',
      imageUrl: 'blog/seven.jpg',
      date: 'June 10, 2024',
    },
];
  
export default function BlogDetails({params}) {
    const { id } = params;
    const blogPost = blogPosts.find((post) => post.id === Number(id));
  
    if (!blogPost) {
      return <p>Blog post not found.</p>;
    }

  console.log();
  
  return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full mx-4 lg:mx-0 py-12 px-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={`../${blogPost.imageUrl}`} className="w-full h-64 object-cover" />
        <div className="p-8">
            <p className="text-gray-500 mb-8 text-center">{blogPost.date}</p>
            <h1 className="text-4xl font-bold mb-4 text-center">{blogPost.title}</h1>
            <p className="text-gray-700 leading-relaxed">{blogPost.description}</p>
        </div>
        </div>
    </div>
  );
}
