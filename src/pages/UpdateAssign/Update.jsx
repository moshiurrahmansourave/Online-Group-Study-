
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const assignment = useLoaderData();

    const {title,email, _id, description, marks, imgUrl,quality, date} =assignment;

    const handleUpdateProduct = e =>{
        e.preventDefault();

        const form = e.target;
        
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const imgUrl = form.imgUrl.value;
        const quality = form.quality.value;
        const date = form.date.value;
        

        const updatedProduct = { title,marks,imgUrl,quality,date, description};
        console.log(updatedProduct)
        //sent data to the server
        fetch(`http://localhost:5000/assignment/${_id}`,{
        
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire('Product update successfully')
            }
        })
    }

    return (
        <div>
            <div className="lg:mb-72 mb-14">
            <h2 className="text-4xl text-center underline font-bold mt-14 mb-4"> Update Your Assignment </h2>
            <p className="text-center text-xl font-bold"></p>
            <form onSubmit={handleUpdateProduct}>
            <div className="lg:flex gap-4 ">
          <div className="md:w-1/2 mb-8">
            <p className="text-xl font-bold">Title</p>
            <input type="text" name="title" defaultValue={title} placeholder="Type here" className="input input-bordered w-full rounded-none " required />
            </div>
            <div className="md:w-1/2 mb-8">
            <p className="text-xl font-bold">Image</p>
            <input type="text" name="imgUrl" defaultValue={imgUrl} placeholder="image url" className="input input-bordered w-full rounded-none " required />
            </div>
          </div>
          <div className="lg:flex gap-4 ">
          <div className="md:w-1/2 mb-8">
            <p className="text-xl font-bold">Assignment Marks</p>
            <input type="text" name="marks" defaultValue={marks} placeholder="Type here" className="input input-bordered w-full rounded-none" required/>
            </div>
            
            <div className="md:w-1/2 mb-8">
            <p className="text-xl font-bold">Short description</p>
            <input type="text" name="description" defaultValue={description} placeholder="Brand Name" className="input input-bordered w-full rounded-none" required />
            </div>

            
          </div>
          <div className="lg:flex gap-4">
          <div className="md:w-1/2 mb-8">
            <p className="text-xl font-bold">Date</p>
            <input type="text" name="date" defaultValue={date} placeholder="Type here" className="input input-bordered w-full rounded-none" />
            </div>
            
<div>
            <p className="text-xl font-bold">Type</p>
            <select name="quality" defaultValue={quality} className="select  rounded-none select-bordered w-full max-w-xs">
  <option disabled selected>select quality</option>
  <option>Easy</option>
  <option>Normal</option>
  <option>Heard</option>
</select>
</div>
          </div>
          
          <input type="submit" value="Update your assignment" className="btn bg-green-300 text-xl w-full my-7" />
            </form>
          
        </div>
        </div>
    );
};

export default Update;