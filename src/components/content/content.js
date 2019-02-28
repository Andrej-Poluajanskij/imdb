import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


export default class Content   extends Component {
    responsive = {
        320: { items: 1},
        360: { items: 2 },
      };
 
    render(){


    let catalog = []
    let film = 
    <div className="left">

    <div className="container-top">
      <div className="top-left">
      </div>
      <div className="top-right">
        <h3>A bug's life</h3>
        <p>animation, adventure, comedy</p>
        <button><span>&#10142;</span> more</button>
      </div>
    </div>

    <div className="container-bottom">
      <div className="bottom-left">
        <p><span>&#9733;</span> 8.1</p>
      </div>
      <div className="bottom-right">
        <p>A misfit ant, looking for "warriors" to save his colony from greedy grasshoppers, recruits a group of bugs that turn out be a inept circus troupe.</p>
      </div>
    </div>

  </div>;
  for(let i = 0; i <10; i++){
    catalog.push(film)
  }


 console.log(catalog);
        return(
            <div className="content" >
           <AliceCarousel responsive={this.responsive} mouseDragEnabled={true} autoPlayInterval={5000}
            duration={800} autoPlay  buttonsDisabled={true} dotsDisabled={true} infinite  >
            {catalog} 
            </AliceCarousel>
          </div>
        )
    }

}
