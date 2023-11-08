



const MyAssignmentCard = ({assignment}) => {
    
   
    

    const {title, _id,email, description ,marks, imgUrl, quality} = assignment;

    
    return (
        <div>
            <div className="card border mb-10 card-side rounded-2xl hover:shadow-xl  transition-all duration-300 flex flex-col">
  <figure className="w-96 h-96">
  <img  src={imgUrl} alt="here is no image"/>
    
    </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">assignment name: {title}</h2>
    <h3><span className="font-bold">Assignment Quality:</span> {quality}</h3>
    <p ><span className="font-bold">Description: </span> {description}</p>
    <p ><span className=" font-bold">Mars:</span> {marks}</p>
    <div>
    <p className="underline font-bold">Submited by</p>
    <p>{email}</p>
    </div>
   
    
    
  </div>
</div>

        </div>
    );
};

export default MyAssignmentCard;