import { Inter } from "next/font/google";
import "../globals.css";
import { dbConnect } from "@/database/service/mongo";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Hotel Booking Application",
  description: "The best online booking platform",
};

export default async function RootLayout({ children }) {
  // Database connect 
  await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="flex items-center justify-center h-16 shadow-lg border-b border-orange-800 ">
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                </div>
                <div className=" px-5 pt-10">
                    <ul className=" list-none p-0 m-0 flex flex-col gap-4">
                        <li className=" bg-orange-800 text-[16px] font-semibold py-2 rounded-md text-center shadow-lg hover:bg-orange-700 hover:cursor-pointer transition-all hover:scale-[1.05]">Users</li>
                        <li className=" bg-orange-800 text-[16px] font-semibold py-2 rounded-md text-center shadow-lg hover:bg-orange-700 hover:cursor-pointer transition-all hover:scale-[1.05]">Hotels</li>
                        <li className=" bg-orange-800 text-[16px] font-semibold py-2 rounded-md text-center shadow-lg hover:bg-orange-700 hover:cursor-pointer transition-all hover:scale-[1.05]">Bookings</li>
                        <li className=" bg-orange-800 text-[16px] font-semibold py-2 rounded-md text-center shadow-lg hover:bg-orange-700 hover:cursor-pointer transition-all hover:scale-[1.05]">Amenties</li>
                        <li className=" bg-orange-800 text-[16px] font-semibold py-2 rounded-md text-center shadow-lg hover:bg-orange-700 hover:cursor-pointer transition-all hover:scale-[1.05]">Review</li>
                        <li className=" bg-orange-800 text-[16px] font-semibold py-2 rounded-md text-center shadow-lg hover:bg-orange-700 hover:cursor-pointer transition-all hover:scale-[1.05]">Ratings</li>
                    </ul>
                </div>
            </aside>
            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-gray-100 flex flex-wrap items-center justify-between px-6 shadow-lg border-b border-black">
                    <div className="text-lg font-semibold">Top Bar</div>
                    <div>
                        <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Logout</button>
                    </div>
                </header>
                <main className="flex-1 p-6 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
      </body>
    </html>
  );
}
