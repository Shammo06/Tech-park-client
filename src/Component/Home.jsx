import Banner from './HomeContent/Banner';
import BrandCard from './HomeContent/BrandCard';
import NewProduct from './HomeContent/NewProduct';
import Newsteller from './HomeContent/Newsteller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>             
            <NewProduct></NewProduct> 
            <BrandCard></BrandCard>
            <Newsteller></Newsteller>          
        </div>
    );
};

export default Home;