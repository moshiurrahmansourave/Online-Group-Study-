import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";


const FeaturesCard = ({feature}) => {

  const cardRef = useRef();

  useEffect(() => {
    VanillaTilt.init(cardRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []);

    const{ title, img, name} = feature;
    return (
        <div ref={cardRef} className="card w-96 max-h-96 mb-11 glass ">
        <figure><img src={img} alt="car!"/></figure>

        <div className="card-body  glass absolute bottom-0 w-full ">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          
        </div>
      </div>
      
    );
};

export default FeaturesCard;