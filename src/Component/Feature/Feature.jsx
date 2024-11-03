import SectionTitle from "../SectionTitle";
import './feature.css';

const Feature = () => {
  return (
    <div className='feature-item bg-fixed  '>
       <SectionTitle name="check it out" title="Feature-item" 
      ></SectionTitle>
      <div className=" md:flex  items-center justify-center bg-slate-500 bg-opacity-30  py-20 px-36">
    
      
      <div >
        <img className="" src="https://i.ibb.co.com/7GFLtCL/pngtree-variety-of-high-fiber-good-food-picture-image-3477354.png" alt="" />
      </div>
      <div className="md:ml-10 text-white text-justify"  
      
      >
        
        <p>23 March 2024</p>
        <p>Where can I get some </p>
        <p>
          You can enjoy our delicious meals by visiting us at [Restaurant
          Address] for a warm, inviting dining experience. For those who prefer
          to dine at home, we offer a convenient online ordering option with
          swift delivery to your location. Whether you’re craving one of our
          signature dishes or something seasonal from our specials, we’re ready
          to serve you both in-house and at your doorstep
        </p>
        <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Feature;
