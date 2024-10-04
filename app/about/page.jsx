import Link from "next/link";
import "../globals.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="about">
        <h1>ABOUT</h1>
        <p>I'm 25-year-old front-end developer. After completing my front-end software training at Acun Medya Akademi, I am now specializing further in front-end development. My portfolio showcases the projects I’ve worked on during my training, highlighting my growing expertise and dedication to building modern, responsive web applications.</p>
        <h3>Proficient in</h3>
        <div className="aboutText">
          <Link href="/" ><Image width={45} height={45} src="/images/HTML.png" />HTML</Link>
          <Link href="/"><Image width={45} height={45} src="/images/CSS-Logo.png" />CSS</Link>
          <Link href="/"><Image width={45} height={45} src="/images/js.png" />JAVASCRİPT</Link>
          <Link href="/"><Image width={45} height={45} src="/images/react.png" />REACT</Link>
          <Link href="/"><Image width={45} height={45} src="/images/nextjs.png" />NEXT.JS</Link>
        </div>
      </div>
    </>
  )
}