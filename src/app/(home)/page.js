import Search from "@/components/search/Search";


export default function Home() {
    return (
        <div>
            <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
                <div className="container items-center pb-12 ">
                    <div className="col-span-7">
                        <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
                            Hotel for memorable moments rich in emotions
                        </h1>
                        <p className="my-2 text-[#5f5e5e] text-center">
                            We have 459 rooms spread throuout Indonesia with room
                            standards equivalent to 5 star hotels.
                        </p>
                        <Search />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Luxurious Rooms</h3>
                    <p className="text-gray-600">
                        Enjoy our luxurious rooms equipped with modern amenities and stylish decor.
                    </p>
                    </div>
                    <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Fine Dining</h3>
                    <p className="text-gray-600">
                        Savor gourmet meals prepared by top chefs in our elegant dining areas.
                    </p>
                    </div>
                    <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Spa and Wellness</h3>
                    <p className="text-gray-600">
                        Relax and rejuvenate with our world-class spa and wellness treatments.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-[#F6F3E9] py-16">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 lg:mb-0 flex-1">
                    <blockquote className="text-gray-700">
                        <p>The best hotel experience I have ever had! The rooms were luxurious, and the service was impeccable.</p>
                        <footer className="mt-4 text-gray-600">— John Doe</footer>
                    </blockquote>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 lg:mb-0 flex-1">
                    <blockquote className="text-gray-700">
                        <p>I loved the spa and wellness center. It was the perfect way to unwind after a day of exploring.</p>
                        <footer className="mt-4 text-gray-600">— Jane Smith</footer>
                    </blockquote>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                    <blockquote className="text-gray-700">
                        <p>Fantastic dining experience! The food was amazing, and the ambiance was perfect.</p>
                        <footer className="mt-4 text-gray-600">— Mark Johnson</footer>
                    </blockquote>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}
