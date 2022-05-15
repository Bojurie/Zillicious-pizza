import React, { Component } from 'react'
import meatLover from '../images/image8_1.png'
import meatLover2 from '../images/image10.png'
import soda from '../images/image2.png'
import alcdrind from '../images/image2.png'
import wings from '../images/image6_1.png'
import wings0 from '../images/IMG_4956.JPG'
import veggie from '../images/IMG_4954.JPG'
import veggie0 from '../images/IMG_4959.JPG'


export const DataContext = React.createContext();

export class DataProvider extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
       products: [
         {
          "_id": "1",
          "title": "Meat Lovers",
          "src": `${meatLover}`,
          "description": "description",
          "price": 20,
          
         },
         {
          "_id": "2",
          "title": "Veggie Style",
          "src": `${veggie}`,
          "description": "description",
          "price": 20,
         
         },
         {
          "_id": "3",
          "title": "Hot Wings",
          "src": `${wings0}`,
          "description": "description",
          "price": 20,
          
         },
         {
          "_id": "4",
          "title": "Cold Beverages",
          "src": `${soda}`,
          "description": "description",
          "price": 20,
         
         },
         {
          "_id": "5",
          "title": `"Meat Lovers"`,
          "src": `${meatLover2}`,
          "description": "description",
          "price": 20,
          
         },
         {
          "_id": "6",
          "title": "Veggie Style",
          "src": `${veggie0}`,
          "description": "description",
          "price": 20,
         
         },
         {
          "_id": "7",
          "title": "Hot Wings",
          "src": `${wings}`,
          "description": "description",
          "price": 20,
          
         },
         {
          "_id": "8",
          "title": "Cold Beverages",
          "src": `${alcdrind}`,
          "description": "description",
          "price": 20,
         
         },
        
       ]
      }
    }

  render(){
    const {products} = this.state;
    return(
      <DataContext.Provider value={{products}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
export default DataProvider;