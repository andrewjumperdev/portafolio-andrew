import ContainerCardsProjects from "../Layout/ContainerCardsProjects";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const Home = () => {
  return <div className="container">
            <Header />
            <div className="container">  
            <ContainerCardsProjects />
            </div> 
            <Footer/>
        </div>;
};
export default Home;
