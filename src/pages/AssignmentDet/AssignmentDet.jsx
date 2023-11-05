import { useLoaderData } from "react-router-dom";



const AssignmentDet = () => {
    const assignment = useLoaderData();
    const {title, description, marks, imgUrl,quality, date} =assignment;

    
    return (
        <div>
            
            <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-6">
            <div className="col-span-2 border border-white py-9 rounded-3xl my-32">
                   <div className="mb-5">
                   <div className=" lg:mx-24">
                        <img className="w-full rounded-2xl" src={imgUrl} alt="" />
                        <h2 className="text-3xl ml-3 font-semibold mt-4 mb-2">Details</h2>
                        <p className=" text-xl font-bold ml-3 ">Title: {title}</p>
                        <p className=" text-xl ml-3 font-bold">Description: {description}</p>
                        <p className=" text-xl ml-3 font-bold"> Marks: {marks} </p>
                        <p className=" text-xl ml-3 font-bold"> date: {date} </p>
                        
            
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDet;