import { FaWpforms } from "react-icons/fa";



const Counter = () => {
    return (
        <div className="bg-slate-100 py-16">
            <div className="text-center items-center">
            <h1 className="text-4xl font-bold">Our Success</h1>
            <p className="text-xl font-bold">Lorem ipsum dolor simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> has been the industrys standard dummy text ever since the 1500s</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto my-8">
                <div >
                <div className="flex items-center ">
                <FaWpforms className="text-4xl"></FaWpforms>
                <h1 className="text-5xl font-bold ml-3">280</h1>
                </div>
                <h2 className="text-xl font-bold ml-3 mt-1">Courses</h2>
                </div>
                <div>
                <div className="flex items-center ">
                <FaWpforms className="text-4xl"></FaWpforms>
                <h1 className="text-5xl font-bold ml-3">15 <span>K</span></h1>
                </div>
                <h2 className="text-xl font-bold ml-3 mt-1">Students</h2>
                </div>
                <div>
                <div className="flex items-center ">
                <FaWpforms className="text-4xl"></FaWpforms>
                <h1 className="text-5xl font-bold ml-3">20 <span>k</span></h1>
                </div>
                <h2 className="text-xl font-bold ml-3 mt-1">Graduatc Students</h2>
                </div>
                <div>
                <div className="flex items-center ">
                <FaWpforms className="text-4xl"></FaWpforms>
                <h1 className="text-5xl font-bold ml-3">189</h1>
                </div>
                <h2 className="text-xl font-bold ml-3 mt-1">Awards</h2>
                </div>
            </div>
        </div>



    );
    
};

export default Counter;