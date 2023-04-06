import ContainerSkillComponent from "./ContainerSkillComponent";
import CarouselComponent from "../components/CarouselComponent";
import NavComponent from "../components/NavComponent";

const Header = () => {
  return (
    <>
      <NavComponent miProp={"Andrew"} />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <CarouselComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto m-5">
            <h1 className="m-3">Bonjour! Je suis Andrew</h1>
            <p>
              Je suis un développeur Web enthousiaste avec un penchant pour la
              création d'expériences utilisateur intuitives et dynamiques,
              utilisant React comme mon principal principal outil de
              développement
            </p>
            <h3 className="m-3">
                Mon STACK de développement
            </h3>
            <div className="container">
                <div className="row">                    
                        <ContainerSkillComponent />
                </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
