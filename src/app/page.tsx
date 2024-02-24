import Navbar from "@/app/navbar/page";

export default function Home() {
  return (
    <>
      <div className="container grid sm:grid-cols-12">
        <div className="left-part sm:col-span-4 sm:mx-24 md:my-56 my-5 md:fixed">
          <Navbar />  
        </div>
        <div className="right-part sm:col-span-10 sm:ml-96 sm:my-46">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <h1 className="sm:text-9xl sm:my-16 text-6xl mb-5">👋🏻</h1>
            <h1 style={{ letterSpacing: "5px" }} className="font-medium sm:text-4xl sm:mt-10 mx-auto mb-5 ">
              Hey I am <span className="hover:text-green-500">Vinay <span className="hover:text-blue-500">Kumar</span></span>
            </h1>
          </div>  

          <p
            style={{ letterSpacing: "4px",lineHeight:'35px'}}
            className="sm:ml-20 sm:my-10 sm:text-xl mx-5 text-center sm:text-start text-sm"
          >
            Skilled in{" "}
            <span className="text-red-300" >Java Full Stack</span>,{" "}
            <span className="text-blue-300" >React JS</span>,{" "}
            <span className="text-purple-300" >MERN Stack</span>, and{" "}
            <span className="text-lime-300" >Flutter</span>, I&apos;ve built
            responsive portfolios and robust applications.{" "}
          </p>
          <p
            style={{ letterSpacing: "4px",lineHeight:'35px'}}
            className="sm:ml-20 sm:my-10 sm:text-xl my-5 mx-5 text-center sm:text-start text-sm"
          >
            {" "}
            I&apos;m eager to leverage my skills and contribute to innovative
            projects. Let&apos;s connect and create something awesome together!{" "}
          </p>
        </div>
      </div>
    </>
  );
}
