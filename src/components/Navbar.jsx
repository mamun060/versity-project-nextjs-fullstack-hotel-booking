
import Link from "next/link"
import Image from "next/image"
import { auth } from "../../auth"
import Logout from '../components/auth/Logout';

const Navbar =  async ({sideMenu = true}) => {
  const session = await auth();
  return (
    <nav>
    <Link href="/">
      <Image 
        src="/logo.png" 
        alt="Stay Swift Logo" 
        width={120}
        height={200} />
    </Link>

    {
      sideMenu && (
      <ul>
        <li className=" shadow px-4 py-2 rounded-sm">
          <Link href="/blog">Recommended Places</Link>
        </li>

        <li className=" shadow px-4 py-2 rounded-sm">
          <Link href="/about">About Us</Link>
        </li>

        <li className=" shadow px-4 py-2 rounded-sm">
          <Link href="/contact">Contact us</Link>
        </li>

        <li className=" shadow px-4 py-2 rounded-sm">
          <Link href="/bookings">Bookings</Link>
        </li>
        <li> 
        {
          session?.user ? (
            <div>
              <span className=" mx-1">{session?.user?.name}</span>
              <span> | </span>
              <span>
                <Logout />
              </span>
            </div>
          ) : 
          (
            <Link href="/login" className="login">Login</Link>
          )
        }
        </li>
        
      </ul>
      )
    }
  </nav>
  )
}

export default Navbar