
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AssignmentsCard = ({assignment,assignments,setAssignments}) => {
  const {user} = useContext(AuthContext);
    
    const {title, _id, description ,marks, imgUrl, quality,email} = assignment;

    // delete
    const handleDelete = _id =>{
      console.log(_id)

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          

          fetch(`http://localhost:5000/assignment/${_id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
              'Deleted!',
              'Your assignment has been deleted.',
              'success'
          )
          const remaining = assignments.filter(cof => cof._id !== _id);
          setAssignments(remaining);
            }
          })

         
        }
      })
    }
    return (
        <div>
            <div className="card flex flex-col lg:flex-row card-side rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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

    {
      email == user?.email ?
      <Link to={`/update/${_id}`}>
    <button className="btn btn-sm rounded-full bg-green-500 text-white text-sm">update</button>
    </Link>:
     ""
    }

    
    </div>
    {  email == user?.email ?
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm rounded-full bg-red-500 text-white text-sm">Delete</button>
        :
        <button className="p-2 rounded-full bg-green-500 text-white text-sm">not your assignment</button>
    }
    
  </div>
</div>

        </div>
    );
};

export default AssignmentsCard;