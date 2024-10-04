import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import About from "./about/page";
import Favorite from "./favorite/page";



export default function Home() {

  return (
    <>
      <div className="hero">
        <div className="heroimg">
          <Image width={700} height={900} src="/images/ben.jpeg" />
        </div>
        <div className="heroText">
          <h3>Hello, I am</h3>
          <h1>Alex Pricope</h1>
          <h2>I am Front-end Developer</h2>
          <p>Within this portfolio, you'll find a curated
            collection of my best work</p>
          <button>View Project <span>→</span></button>
          <div className="heroBtn">
            <Link href="https://www.linkedin.com/in/kemal-%C3%B6zalp-793403300/"> <Image width={45} height={45} src="/images/linkedinn.png" /> Linkedin <span>→</span></Link>
            <Link href="https://github.com/kemalozlp"> <Image width={45} height={45} src="/images/github.svg" />GitHub <span>→</span></Link>
          </div>
        </div>
      </div>
      <About />
      <Favorite />
    </>
  );
}
