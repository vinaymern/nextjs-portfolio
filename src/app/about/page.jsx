import Navbar from "@/app/navbar/page";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="container grid sm:grid-cols-12">
        <div className="left-part sm:col-span-4 sm:mx-24 md:my-56 my-5 md:fixed">
          <Navbar />
        </div>
        <div className="right-part sm:col-span-10 sm:ml-96 sm:my-46">
          <div className="sm:mt-36 ">
            <p className="sm:ml-20 sm:my-8 ml-5 mr-5 mb-5 text-center text-sm sm:text-xl" style={{ letterSpacing: "4px",lineHeight:'35px'}}>
              I am an Electronics and Communication Engineering graduate with
              proficiency in <span className="text-blue-400">HTML</span>, <span className="text-blue-400">CSS</span>, <span className="text-blue-400">JavaScript</span>, <span className="text-blue-400">React JS</span> for <span className="text-green-400">frontend</span>, and
              <span className="text-blue-400"> Core Java</span>, <span className="text-blue-400">Core Python</span>, <span className="text-red-400">MySQL</span>, <span className="text-red-400">MongoDB</span> for <span className="text-green-400">backend</span>. 
              </p>
              <p className="sm:ml-20 sm:my-8 ml-5 mr-5 mb-5 text-center text-sm sm:text-xl" style={{ letterSpacing: "4px",lineHeight:'35px'}}>Skilled in
              <span className="text-purple-400"> Bootstrap</span>, <span className="text-purple-400">Hibernate</span>, <span className="text-purple-400">Spring</span>, <span className="text-purple-400">Spring Boot</span>, and intermediate in
              <span className="text-amber-400"> Data Structures and Algorithms</span> with Java. Eager to apply my skills
              for organizational advancement.
            </p>
            <div className="flex sm:gap-5 flex-col sm:flex-row justify-center">
              <div className="sm:w-52 sm:h-52 mx-5 text-center sm:text-start">
                <h3 style={{letterSpacing:'2px'}} className="text-green-400 text-xl">Leetcode</h3>
                <p className="text-sm" style={{letterSpacing:'3px',lineHeight:'25px',marginTop:'20px',fontSize:'15px'}}>Solved more than 300+ Problems</p>
                <Link href="https://leetcode.com/vinay_0517/" target="_blank"  style={{fontSize:'18px',color:'lightblue',fontWeight:'bold',letterSpacing:'2px',display:'block',margin:'20px 0px',fontStyle:'italic'}}>Leetcode Profile⚡</Link>
              </div>
              <div className="sm:w-52 sm:h-52 mx-5 text-center sm:text-start">
                <h3 style={{letterSpacing:'2px'}} className="text-green-400 text-xl">Github</h3>
                <p className="text-sm" style={{letterSpacing:'3px',lineHeight:'25px',marginTop:'20px',fontSize:'15px'}}>Published Tech Related Repositories</p>
                <Link href="https://github.com/vinaykumar0410" target="_blank"  style={{fontSize:'18px',color:'lightblue',fontWeight:'bold',letterSpacing:'2px',display:'block',margin:'20px 0px',fontStyle:'italic'}}>Github Profile⚡</Link>
              </div>
              <div className="sm:w-52 sm:h-52 mx-5 text-center sm:text-start">
                <h3 style={{letterSpacing:'2px'}} className="text-green-400 text-xl">Projects</h3>
                <p className="text-sm " style={{letterSpacing:'3px',margin:'20px 0px',lineHeight:'25px',fontSize:'15px'}}>Did some basic projects on various technologies</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}
