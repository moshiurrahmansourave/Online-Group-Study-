import { FaCloudUploadAlt, FaDropbox, FaFileCode, FaReact, FaRegEnvelopeOpen, FaRegWindowRestore, FaUserEdit, FaVial, FaWeibo, FaYarn } from "react-icons/fa";
import Banner from "../../shared/Banner/Banner";
import Features from "../Features/Features";
import Counter from "./Counter";



const Home = () => {
    return (
        <div>
            <div className="mb-28">
            <Banner></Banner>
            </div>
            <Features></Features>
            <div className="my-14">
            <Counter></Counter>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-24 mx-auto bg-slate-200 mb-9 gap-16">
                <div className="flex gap-2">
                <FaRegWindowRestore className="text-5xl text-orange-500"></FaRegWindowRestore>
                    <div>
                    <h1 className="text-xl">Responsive Design</h1>
                    <p className="w-72">edubuzz is supper responsive & work perfectly in all devices.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaUserEdit className="text-5xl text-orange-500"></FaUserEdit>
                    <div>
                    <h1 className="text-xl">User Friendly</h1>
                    <p className="w-72">edubuzz easy to use for any technical & nontechnical People.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaVial className="text-5xl text-orange-500"></FaVial>
                    <div>
                    <h1 className="text-xl">Creative Design</h1>
                    <p className="w-72">It is comes with creative & smart design layout.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaDropbox className="text-5xl text-orange-500"></FaDropbox>
                    <div>
                    <h1 className="text-xl">Icon Font</h1>
                    <p className="w-72">It is comes with most popular FontAwesome & Pe 7 stroke icon font.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaReact className="text-5xl text-orange-500"></FaReact>
                    <div>
                    <h1 className="text-xl">Google Font</h1>
                    <p className="w-72">600 Google Fonts. You can change font for all elements easily.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaRegEnvelopeOpen className="text-5xl text-orange-500"></FaRegEnvelopeOpen>
                    <div>
                    <h1 className="text-xl">Ajax Contact Form</h1>
                    <p className="w-72">It comes with ajax contact form which makes messaging much more quicker.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaFileCode className="text-5xl text-orange-500"></FaFileCode>
                    <div>
                    <h1 className="text-xl">Clean Markup</h1>
                    <p className="w-72">We developed it followed by W3C Markup.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaCloudUploadAlt className="text-5xl text-orange-500"></FaCloudUploadAlt>
                    <div>
                    <h1 className="text-xl">Free Updates</h1>
                    <p className="w-72">Purchase once & get life-time free updates.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaWeibo className="text-5xl text-orange-500"></FaWeibo>
                    <div>
                    <h1 className="text-xl">Real Support</h1>
                    <p className="w-72">We provide 7 days a week one by one real support.</p>
                    </div>
                </div>
            </div>


            <div className="my-20">

            <div className="text-center items-center">
                <h1 className="text-xl font-bold text-orange-500">TESTIMONIAL</h1>
                <p className="text-4xl font-bold ">What Students Saying</p>
            </div>

            <div  className="carousel-item relative hidden lg:flex w-full">
    <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-green-education-blackboard-stereoscopic-image_20770.jpg" className="w-full" />
    <div className="h-full flex items-center text-white absolute  right-0 left-0 top-0 bg-black opacity-70">
    
    </div>
    <div className=' ml-72 mt-60 space-y-6  absolute text-white flex flex-col  '>

    <div className="card w-96 glass">
  <div className=" flex justify-center">
  
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTg3OEIyRTcwMjU0MTFFQkI2RDVCNkNGMUQyQzM2NEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTg3OEIyRTYwMjU0MTFFQkI2RDVCNkNGMUQyQzM2NEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkY0RTlFOEZGMzNGMTFFQUJCNzhGMzUzNDQ0M0FDMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkY0RTlFOTBGMzNGMTFFQUJCNzhGMzUzNDQ0M0FDMEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6sZfvvAAAKwklEQVR42uxdC5AU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" alt="" />
  </div>
  <div className="card-body">
    <h2 className="card-title">Steve Smith</h2>
    <p>Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.</p>
    
  </div>
</div>
      </div>


    <div className=' right-0 mr-72 mt-60 space-y-6  absolute text-white flex flex-col  '>

    <div className="card w-96 glass">
  <div className=" flex justify-center">
  
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTg3OEIyRTcwMjU0MTFFQkI2RDVCNkNGMUQyQzM2NEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTg3OEIyRTYwMjU0MTFFQkI2RDVCNkNGMUQyQzM2NEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkY0RTlFOEZGMzNGMTFFQUJCNzhGMzUzNDQ0M0FDMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkY0RTlFOTBGMzNGMTFFQUJCNzhGMzUzNDQ0M0FDMEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6sZfvvAAAKwklEQVR42uxdC5AU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" alt="" />
  </div>
  <div className="card-body">
    <h2 className="card-title">David Warner</h2>
    <p>Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.</p>
    
  </div>
</div>
      </div>
    
           </div> 

            </div>

            

        </div>
    );
};

export default Home;