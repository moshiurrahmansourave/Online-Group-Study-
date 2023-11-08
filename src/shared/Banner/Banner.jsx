import { FaAtlas, FaChessBoard, FaRegWindowRestore, FaTachometerAlt } from "react-icons/fa";


const Banner = () => {
  return (
    <div>
      <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/MRcsz0g/images-6.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-white">
          <div className="max-w-md my-0 lg:my-16 ">
            <h4 className="text-lg font-bold text-orange-400 mb-4">START TO LEARNING TODAY</h4>
            <h1 className="mb-5 text-5xl font-bold"><span className="text-orange-600">Study </span>Butter</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

          </div>
          

<div className="flex lg:flex-row flex-col mb-36">
<div className="flex gap-2  duration-300 glass p-4 hover:bg-gray-900 mb-5">
            <FaAtlas className="text-5xl text-orange-500"></FaAtlas>
            <div>
              <h1 className="text-xl">5,320 online courses</h1>
              <p className="w-72">Enjoy a variety of fresh topics</p>
            </div>
          </div>
<div className="flex gap-2 glass duration-300  p-4 mx-5 hover:bg-gray-900 mb-5">
            <FaChessBoard className="text-5xl text-orange-500"></FaChessBoard>
            <div>
              <h1 className="text-xl">Expert instruction</h1>
              <p className="w-72">Find the right instructor</p>
            </div>
          </div>
<div className="flex gap-2 glass duration-300  p-4 hover:bg-gray-900 mb-5">
            <FaTachometerAlt className="text-5xl text-orange-500"></FaTachometerAlt>
            <div>
              <h1 className="text-xl">Lifetime access</h1>
              <p className="w-72">Learn on your schedule</p>
            </div>
          </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Banner;