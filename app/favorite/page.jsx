import Link from "next/link";
import "../globals.css";
import Image from "next/image";


export default function Favorite() {
  return (
    <div className="favorite">
      <div className="favoriteText">
        <h3>Achievement</h3>
        <h1>My favorite Projects</h1>
        <p>Explore my favorite projects that showcase my skills and creativity. Each project presents a unique challenge and demonstrates my commitment to quality and innovation. Discover what inspires me and how I approach design and development!</p>
        <Link href="/">Explore More <span>→</span></Link>
      </div>
      <div className="favoriteBox">
        <Link href="/">xxxxxxxxxxxxxx <Image width={30} height={30} src="/images/arrowup.svg" /></Link>
        <Link href="/">xxxxxxxxxxxxxx <Image width={30} height={30} src="/images/arrowup.svg" /></Link>
        <Link href="/">xxxxxxxxxxxxxx <Image width={30} height={30} src="/images/arrowup.svg" /></Link>
      </div>

    </div>
  )
}