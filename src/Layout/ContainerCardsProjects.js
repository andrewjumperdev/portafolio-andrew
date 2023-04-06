import React from "react";
import CardProjectComponent from "../components/CardProjectComponent";
import {cards} from '../db';

const ContainerCardsProjects = () => {    

    const cardsItem = cards.map((item) => 
    <CardProjectComponent key={item.id} name={item.name} img={item.img} description={item.description} url={item.url} />)
    return(
      <div className="container">
        <div className="row">
          {cardsItem}
        </div>
      </div>
    );

};

export default ContainerCardsProjects;
  