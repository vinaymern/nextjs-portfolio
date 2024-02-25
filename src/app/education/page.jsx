
import Navbar from "@/app/navbar/page";

export default function Education() {
  return (
    <>
      <div className="container bg-black text-white grid sm:grid-cols-12">
        <div className="left-part sm:col-span-4 sm:mx-24 md:my-56 my-5 md:fixed">
          <Navbar />  
        </div>
        <div className="right-part sm:col-span-10 sm:ml-96 sm:my-46">
          <div className="flex flex-col sm:mt-14">
          <div className="sm:h-1/3 sm:p-8 ml-8 rounded-lg " style={{letterSpacing:'3px'}}>
                <h1 className="sm:ml-4 mb-2 sm:text-start text-center text-green-400 font-medium">B.TECH</h1>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">College</span> : K.S.R.M College of Engineering</p>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">Branch</span> : ECE</p>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">Batch</span> : 2019 - 2023</p>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">CGPA</span> : 7.61</p>
            </div>
            <div className="sm:h-1/3 sm:p-8 ml-8 rounded-lg " style={{letterSpacing:'3px'}}>
                <h1 className="sm:ml-2 my-4 sm:my-2 sm:text-start text-center text-green-400 font-medium">CLASS XII</h1>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">College</span> : Sri Chaitanya Junior College</p>
                <p  style={{lineHeight:'30px'}} className="text-blue-400"><span className="sm:ml-32 text-purple-400">Batch</span> : 2017 - 2019</p>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">CGPA</span> : 9.15</p>
            </div>
            <div className="sm:h-1/3 sm:p-8 ml-8 rounded-lg mb-5" style={{letterSpacing:'3px'}}>
                <h1 className="sm:ml-2 my-4 sm:my-2 sm:text-start text-center text-green-400 font-medium">CLASS X</h1>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">School</span> : Nagarajuna Model School</p>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">Batch</span> : 2016 - 2017</p>
                <p style={{lineHeight:'30px'}}  className="text-blue-400"><span className="sm:ml-32 text-purple-400">CGPA</span> : 9.8</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
