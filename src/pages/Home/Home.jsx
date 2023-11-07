import { FaCloudUploadAlt, FaDropbox, FaFileCode, FaReact, FaRegEnvelopeOpen, FaRegWindowRestore, FaUserEdit, FaVial, FaWeibo } from "react-icons/fa";
import Banner from "../../shared/Banner/Banner";
import Features from "../Features/Features";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-24 mx-auto bg-slate-200 mb-9 gap-16">
                <div className="flex gap-2">
                <FaRegWindowRestore className="text-5xl text-orange-500"></FaRegWindowRestore>
                    <div>
                    <h1 className="text-xl">Responsive Design</h1>
                    <p className="w-72">edubuzz is supper responsive & work perfectly in all devices.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaUserEdit className="text-5xl text-orange-500"></FaUserEdit>
                    <div>
                    <h1 className="text-xl">User Friendly</h1>
                    <p className="w-72">edubuzz easy to use for any technical & nontechnical People.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaVial className="text-5xl text-orange-500"></FaVial>
                    <div>
                    <h1 className="text-xl">Creative Design</h1>
                    <p className="w-72">It is comes with creative & smart design layout.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaDropbox className="text-5xl text-orange-500"></FaDropbox>
                    <div>
                    <h1 className="text-xl">Icon Font</h1>
                    <p className="w-72">It's comes with most popular FontAwesome & Pe 7 stroke icon font.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaReact className="text-5xl text-orange-500"></FaReact>
                    <div>
                    <h1 className="text-xl">Google Font</h1>
                    <p className="w-72">600 Google Fonts. You can change font for all elements easily.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaRegEnvelopeOpen className="text-5xl text-orange-500"></FaRegEnvelopeOpen>
                    <div>
                    <h1 className="text-xl">Ajax Contact Form</h1>
                    <p className="w-72">It comes with ajax contact form which makes messaging much more quicker.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaFileCode className="text-5xl text-orange-500"></FaFileCode>
                    <div>
                    <h1 className="text-xl">Clean Markup</h1>
                    <p className="w-72">We developed it followed by W3C Markup.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaCloudUploadAlt className="text-5xl text-orange-500"></FaCloudUploadAlt>
                    <div>
                    <h1 className="text-xl">Free Updates</h1>
                    <p className="w-72">Purchase once & get life-time free updates.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <FaWeibo className="text-5xl text-orange-500"></FaWeibo>
                    <div>
                    <h1 className="text-xl">Real Support</h1>
                    <p className="w-72">We provide 7 days a week one by one real support.</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Home;