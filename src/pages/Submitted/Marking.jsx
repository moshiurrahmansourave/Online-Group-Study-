import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const Marking = () => {



 
    const assignment = useLoaderData();

   
    const [searchData, setSearchData] = useState(assignment);
    const {title,email,status, _id, description, marks, imgUrl,quality,name,pdf, date} =searchData;
    

    const handleStatusComplete = id =>{
      console.log(id)
      fetch(`https://group-study-assignment-11-server.vercel.app/assignment/${id}`,{
        method:'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({status:'Complete'})
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire(
            'Completed!',
            'Your assignment has been Completed.',
            'success')
            
          const remaining = assignment.filter(assignment => assignment._id != id);
          const updated = assignment.find(assignment => assignment._id === id)
          updated.status = 'Complete'
          const newAssignment = [updated, ...remaining];
          setSearchData(newAssignment)

          

        }
      })
    }


    return (
        <div>
            <div className=" bg-base-300 ">
  <div className=" grid grid-cols-1 py-9 lg:grid-cols-2 text-xl">
    
      <div className="card-body ">
      <h1>status:
        <span className="font-bold"> {status}</span>
       </h1>

<div className="flex gap-3">
<h2>Assignment Title: </h2>
<span className="font-bold underline"> {title} </span>
</div>


<div className="flex gap-3">
<h2>Examiner Name: </h2>
<span className="font-bold underline"> {name} </span> 
</div>

<div className="flex gap-3">
<h2>Assignment title: </h2>
<span className="font-bold underline"> {title} </span>
</div>

<div className="flex gap-3">
<h2>Assignment pdf: </h2>
<span className="font-bold underline"> {pdf} </span>
</div>

<div className="flex gap-3">
<h2>Assignment quality: </h2>
<span className="font-bold underline"> {quality} </span>
</div>

<div className="flex gap-3">
<h2>Description: </h2>
<span className="font-bold underline"> {description} </span>
</div>

<div className="flex gap-3">
<h2>Total marks: </h2>
<span className="font-bold underline"> {marks} </span>
</div>
      </div>



        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  className="card-body">
        <div className="form-control">
          
          <label className="label">
            <span className="label-text">Mark Field</span>
          </label>
          <input type="text" name="marking" placeholder="Mark field" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Examine Feedback</span>
          </label>
          <textarea placeholder="Feedback" name="feedback" className="textarea textarea-bordered textarea-md w-full max-w-xs" required></textarea>
          
        </div>
        <div className="form-control mt-6">
        
        <input onClick={()=>handleStatusComplete(_id)} type="submit" value="Give marking" className="btn hover:bg-green-500 hover:text-white my-3" />
        
        
        </div>
      </form>
      
    </div>

  </div>
  
</div>
        </div>
    );
};

export default Marking;