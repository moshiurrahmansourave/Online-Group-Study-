import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const AssignmentsCard = ({assignment}) => {
    
    
    const {title, _id, description ,marks, imgUrl, quality,email} = assignment;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure>
  <img src={imgUrl} alt="here is no image"/>
    
    </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">assignment name: {title}</h2>
    <h3><span className="font-bold">Assignment Quality:</span> {quality}</h3>
    <p ><span className="font-bold">Description: </span> {description}</p>
    <p ><span className=" font-bold">Mars:</span> {marks}</p>
    <div>
    <p className="underline font-bold">Submited by</p>
    <p>{email}</p>
    </div>
    <div className="flex gap-4">
    <Link to={`/assignmentdet/${_id}`}>
    
    <button className="btn btn-sm rounded-full bg-green-500 text-white text-sm">vew detials</button></Link>
    <button className="btn btn-sm rounded-full bg-green-500 text-white text-sm">update</button>
    </div>
    
  </div>
</div>

        </div>
    );
};

export default AssignmentsCard;