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
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
