const SectionTitle = ({name,title}) => {
    return (
        <div className="max-w-screen-xl mx-auto   text-center p-3 md:w-3/12  ">
          <p className="text-2xl text-white">{name}</p>  
         <h3 className="text-xl text-white">{title}</h3> 
        </div>
    );
};

export default SectionTitle;