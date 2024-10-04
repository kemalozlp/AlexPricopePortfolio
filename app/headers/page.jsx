import Link from "next/link";
import "../globals.css";

export default function Headers() {
  return (
    <div className="Headers">
      <Link href="/">Alex Pricope</Link>
      <div className="headersurls">
        <Link href="">
          Home
        </Link>

        <Link href="">
          About
        </Link>

        <Link href="">
          Achievement
        </Link>

        <Link href="">
          Our Skills
        </Link>

        <Link href="">
          Services
        </Link>

        <Link href="">
          Portfolio
        </Link>

        <Link href="">
          Contact
        </Link>
      </div>

      <button className="headerBtn" >View CV</button>

    </div>
  )

}