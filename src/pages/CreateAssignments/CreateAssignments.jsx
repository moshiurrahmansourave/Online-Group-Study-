import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";




const CreateAssignments = () => {
    const {user} = useContext(AuthContext);

    const handleCreateAssign = (e) =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const pdf = form.pdf.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const imgUrl = form.imgUrl.value;
        const quality = form.quality.value;
        const date = form.Date.value;
        const email = form.email.value;
        const status = form.status.value;

        const newCreator = {name,title,pdf, description, marks, imgUrl,quality, date, email,status}
        console.log(newCreator)
        //send data to the server

        fetch('https://group-study-assignment-11-server.vercel.app/assignment',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCreator)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire('Assignment Created ')
            }
        })
    }

    return (
        <div className="bg-[url('https://i.stack.imgur.com/90nGa.jpg')] mb-10">
            <div>
                <h2 className="text-4xl font-bold text-orange-400 text-center underline mb-6">Create Your Assignment</h2>
            </div>
           <form onSubmit={handleCreateAssign} className="glass">

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border  p-4 ">
          <div className=" gap-3">
            <p className="text-xl font-bold underline">Your Name</p>
             <input type="text" name="name" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
          </div>
          <div className=" gap-3">
            <p className="text-xl font-bold underline">Title</p>
             <input type="text" name="title" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
          </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline">Assignment pdf</p>
             <input type="text" name="pdf" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
           </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline">Description</p>
             <input type="text" name="description" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
           </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline">Date</p>
             <input type="date" name="Date" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
           </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline"> marks</p>
             <input type="text" name="marks" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required/>
           </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline"> thumbnail
              Image URL</p>
             <input type="text" name="imgUrl" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required/>
           </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline"> Your email</p>
              <input value={user.email} name="email" type="text" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required/>
           </div>
           <select name="quality" className="select rounded-none select-bordered w-full max-w-xs">
  <option disabled selected>select quality</option>
  <option>Easy</option>
  <option>Normal</option>
  <option>Heard</option>
</select>
           <div className="flex items-center gap-1">
            <h2 className="font-bold">Assignment Status:</h2>
            <input type="text" name="status" value={"Pending"} />
           </div>
           
           </div>
           <div className="flex justify-center">
           <input type="submit" value="Create Assignment" className="btn hover:bg-orange-500 hover:text-white my-3" />
           </div>
           </form>
        </div>
    );
};

export default CreateAssignments;