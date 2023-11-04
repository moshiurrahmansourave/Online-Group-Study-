import { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";


const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div>
            <div className="text-center my-6">
                <h2 className="text-4xl font-bold ">
                    FOR STUDENTS
                </h2>
                <p className="text-xl"> Set a regular meeting time and duration  for your group study sessions. <br /> Consistency helps everyone plan their time effectively.</p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
                features.map(feature => <FeaturesCard
                key={feature.service_id}
                feature={feature}
                ></FeaturesCard>)
            }
           </div>
        </div>
    );
};

export default Features;