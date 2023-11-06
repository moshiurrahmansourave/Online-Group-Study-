


const SubmitedCard = ({assignment}) => {
   
    const {name,title,status,pdf, _id, description ,marks, imgUrl, quality,email} = assignment;
    return (
        <div>
            <div className="card w-96 bg-base-300 ">
  <div className="card-body">
    <h2 className="card-title"></h2>
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


    <div className="card-actions justify-center">
      <button className="btn btn-sm bg-green-400 text-white">Give Mark</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubmitedCard;