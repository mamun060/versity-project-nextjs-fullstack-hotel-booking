
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
    <Link href="/">
      <Image 
        src="/logo.png" 
        alt="Stay Swift Logo" 
        width={120}
        height={200} />
    </Link>

    <ul>
      <li>
        <Link href="#">Recommended Places</Link>
      </li>

      <li>
        <Link href="/about">About Us</Link>
      </li>

      <li>
        <Link href="/contact">Contact us</Link>
      </li>

      <li>
        <Link href="/bookings">Bookings</Link>
      </li>

      <li>
        <Link href="/login" class="login">Login</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar