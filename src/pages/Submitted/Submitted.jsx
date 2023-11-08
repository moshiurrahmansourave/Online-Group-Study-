
import SubmitedCard from "./SubmitedCard";
import { useEffect, useState } from "react";



const Submitted = () => {
    
    const [searchData, setSearchData] = useState([]);
    
    useEffect(()=>{
        fetch(`https://group-study-assignment-11-server.vercel.app/pendingassignment/Pending`)
        .then(res => res.json())
        .then(data => setSearchData(data))
    },[])
    // console.log(searchData)
    
    return (
        <div>
            
            
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