import { useLoaderData } from "react-router-dom";
import MyAssignmentCard from "./MyAssignmentCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyAssignments = () => {
    const assignments = useLoaderData();
    const {user} = useContext(AuthContext);


    const [fullData, setFullData] = useState(assignments);
    const [searchData, setSearchData] = useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/myassignment/${user?.email}`)
        .then(res => res.json())
        .then(data => setSearchData(data))
    },[fullData,user])





    return (
        <div>
            <h1 className="text-4xl font-semibold text-center underline mb-4" >Your submitted assignments</h1>
            {/* <button onClick={handleSearch} className="btn">find your assignment</button> */}
            <div>
                {
                    searchData.map(assignment => <MyAssignmentCard
                    key={assignment._id}
                    assignment={assignment}
                    ></MyAssignmentCard>)
                }
            </div>
        </div>
    );
};

export default MyAssignments;