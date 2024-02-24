
import Navbar from "@/app/navbar/page";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="container grid sm:grid-cols-12">
      <div className="left-part sm:col-span-4 sm:mx-24 md:my-56 my-5 md:fixed">
          <Navbar />
        </div>
        <div className="right-part sm:col-span-10 sm:ml-96 sm:my-46">
          <div className="flex sm:flex-row gap-5 flex-col sm:mt-24">        
            <ul style={{letterSpacing:'4px',textAlign:'center'}} className='sm:w-1/2'>
                <li className="text-xl sm:my-5 text-center text-green-400 font-medium" >Projects</li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Portfolio using <span className="text-blue-300">React Js</span></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Group Chat App using <span className="text-red-300">MERN Stack</span></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Todo List App using <span className="text-blue-300">React Js</span></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Book Store App using <span className="text-orange-300">Spring Boot</span></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Quiz App using <span className="text-blue-300">React Js</span></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Todo List App using <span className="text-lime-300">Flutter</span></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300">Fetching API & Basic Routing using <span className="text-blue-300">React Js</span></li>
            </ul>
            <ul style={{letterSpacing:'4px',textAlign:'center'}} className='sm:w-1/2'>
            <li className="text-xl sm:my-5 text-center text-green-400 font-medium" style={{letterSpacing:'2px'}}>Links</li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300 hover:text-blue-300"><Link href='https://vinaykumaryaddulakondu.netlify.app/' target="_blank">Portfolio🚀</Link> </li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300 hover:text-red-300"><Link href='https://talk2world.netlify.app/' target="_blank">Group Chat App📱</Link></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300 hover:text-blue-300"><Link href='https://vinay-todolist.netlify.app/' target="_blank">Todo List App📝 </Link></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300 hover:text-orange-300"><Link href='https://github.com/vinaykumar0410/OnlineBookStore' target="_blank">Online Book Store App📚</Link></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300 hover:text-blue-300"><Link href='https://vinay-quizapp.netlify.app/' target="_blank">Quiz App🧩</Link></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300 hover:text-lime-300"><Link href='https://todo-flutter.netlify.app/' target="_blank">Todo List App📝(web+android)</Link></li>
                <li className="sm:text-base text-sm p-2 my-3 mx-10 sm:mx-0 border sm:p-3 rounded-lg border-blue-300"><Link className="hover:text-blue-300" href='https://vinay-juicyheaven.netlify.app/' target="_blank">Fetching API🔎</Link> <br /> <Link className="hover:text-blue-300" href='https://vinay-reactroutes.netlify.app/' target="_blank">Basic React Routing🌐</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
