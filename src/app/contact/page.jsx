"use client"
import Navbar from "@/app/navbar/page";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="container grid sm:grid-cols-12">
        <div className="left-part sm:col-span-4 sm:mx-24 md:my-56 my-5 md:fixed">
          <Navbar />
        </div>
        <div className="right-part sm:col-span-10 sm:ml-96 sm:my-46">
            <section className="sm:mt-28 text-center">
                <form action='https://formspree.io/f/xvoeozer' method="post">
                    <h1 style={{letterSpacing:'2px'}} className="text-xl sm:my-4 text-green-400 font-medium">Contact Me</h1>
                    <input type="text" required style={{letterSpacing:"3px"}} className="bg-black border border-blue-300 p-2 rounded-lg mx-10 my-2 w-3/4"  placeholder="Your Full Name" />
                    <input type="email" required style={{letterSpacing:"3px"}} className="bg-black border border-blue-300 p-2 rounded-lg mx-10 my-2 w-3/4"  placeholder="Your Email" />
                    <textarea name="message" required style={{letterSpacing:"3px"}}  placeholder="Your Message" id="message" cols="23" rows="10" className="bg-black border border-blue-300 p-2 rounded-lg mx-10 my-2 w-3/4">
                    </textarea><br />
                    <button type="submit" style={{letterSpacing:'2px'}} className="text-green-400 p-3 border border-green-400 rounded-lg">Send Message</button>
                </form>
            </section>
            <footer className="flex justify-evenly sm:my-10 my-5">
                <em className="text-xl">Reach out on <Link style={{letterSpacing:'3px'}} className="font-medium text-blue-400 text-xl" href='https://www.linkedin.com/in/vinaykumar0517/' target="_blank">LinkedIn</Link></em>
            </footer>
        </div>
      </div>
    </>
  );
}
