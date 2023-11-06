import { useLoaderData } from "react-router-dom";
import SubmitedCard from "./SubmitedCard";
import { useEffect, useState } from "react";



const Submitted = () => {
    const assignments = useLoaderData()
    const{status,marks, description} = assignments;
    
    const [fullData, setFullData] = useState(assignments);
    const [searchData, setSearchData] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/myassignment/${status}`)
        .then(res => res.json())
        .then(data => setSearchData(data))
    },[fullData,status])


    return (
        <div>
            <h3>this is submitted page{assignments.length}</h3>
            <h3>this is submitted page{status}</h3>
            <h3>this is submitted page{marks}</h3>
            <h3>this is submitted page{description}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:max-w-6xl gap-16">
            {
                searchData.map(assignment => <SubmitedCard
                    key={assignment._id}
                    assignment={assignment}
                ></SubmitedCard>)
            }
            </div>
        </div>
    );
};

export default Submitted;