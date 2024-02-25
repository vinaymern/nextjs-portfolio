import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="container bg-black text-white">
        <ul
          style={{ letterSpacing: "4px" }}
          className="flex items-center flex-col sm:gap-5 gap-2 cursor-pointer font-medium sm:text-2xl"
        >
          <li className=" hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-blue-500">
            <Link href="/about">About</Link>
          </li>
          <li className=" hover:text-blue-500">
            <Link href="/education">Education</Link>
          </li>
          <li className=" hover:text-blue-500 ">
            <Link href="/skills">Skills</Link>
          </li>
          <li className=" hover:text-blue-500 ">
            <Link href="/projects">Projects</Link>
          </li>
          <li className=" hover:text-blue-500 ">
            <Link href="/contact">Get in Touch</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
