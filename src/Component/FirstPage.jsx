import Banner1 from "./Banner/Banner1";
import Category from "./Catagory/Category";
import Feature from "./Feature/Feature";

import PopularMenu from "./Menu/PopularMenu";
import Review from "./Menu/Review";


const FirstPage = () => {
    return (
        <div>
            <Banner1></Banner1>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Review></Review>
        </div>
    );
};

export default FirstPage;