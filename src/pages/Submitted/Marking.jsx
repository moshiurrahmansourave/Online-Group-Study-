import { useLoaderData } from "react-router-dom";



const Marking = () => {

    const assignment = useLoaderData();

    const {title,email,status, _id, description, marks, imgUrl,quality,name,pdf, date} =assignment;


    


    return (
        <div>
            <div className=" bg-base-300 ">
  <div className=" grid grid-cols-1 py-9 lg:grid-cols-2 text-xl">
    
      <div className="card-body ">
      <h1>status : <span className="text-red-500">{status}...</span></h1>

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
          <textarea placeholder="Feedback" name="feedback" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
          
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Give Mark" className="btn bg-green-500 text-white text-xl w-full my-7" />
        </div>
      </form>
    </div>

  </div>
  
</div>
        </div>
    );
};

export default Marking;