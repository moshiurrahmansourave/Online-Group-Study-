

const FeaturesCard = ({feature}) => {
    const{ title, img, name} = feature;
    return (
        <div className="card w-96 max-h-96 mb-11 glass hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <figure><img src={img} alt="car!"/></figure>
        <div className="card-body  glass absolute bottom-0 w-full ">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          
        </div>
      </div>
    );
};

export default FeaturesCard;