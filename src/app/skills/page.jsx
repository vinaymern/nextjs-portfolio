

import Navbar from "@/app/navbar/page";

export default function Skills() {
  return (
    <>
      <div className="container bg-black text-white grid sm:grid-cols-12">
      <div className="left-part sm:col-span-4 sm:mx-24 md:my-56 my-5 md:fixed">
          <Navbar />
        </div>
        <div className="right-part sm:col-span-10 sm:ml-96 sm:my-46">
          <div className="flex sm:flex-row flex-col sm:mt-28">
          <div className="frontend sm:w-1/3 text-center rounded-lg">
              <h1 style={{letterSpacing:'5px'}} className="text-purple-400 my-3 font-medium text-xl">FRONTEND</h1>
              <ul>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Html</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Css</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Javascript</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Bootstrap</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">React Js</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Flutter</li>
              </ul>
          </div>
          <div className="frontend sm:w-1/3 text-center rounded-lg">
              <h1 style={{letterSpacing:'5px'}} className="text-purple-400 my-3 font-medium text-xl">DATABASE</h1>
              <ul>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">MySQL</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">MongoDB</li>
              </ul>
              <h1 style={{letterSpacing:'5px'}} className="text-purple-400 my-3 font-medium text-xl">BASICS</h1>
              <ul>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">MERN Stack</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Next Js</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Tailwind Css</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Spring Boot</li>
              </ul>
          </div>
          <div className="backend sm:w-1/3 text-center rounded-lg">
            <h1 style={{letterSpacing:'5px'}} className="text-purple-400 my-3 font-medium text-xl">BACKEND</h1>
            <ul>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Java</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Python</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Jdbc</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Hibernate</li>   
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Jsp Servlets</li>
                <li style={{letterSpacing:'5px'}} className="my-4 border sm:w-auto sm:mx-2 w-1/2 mx-auto border-blue-300 rounded-lg sm:text-xl p-2">Spring Core</li>
              </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
