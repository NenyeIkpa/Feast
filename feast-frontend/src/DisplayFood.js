import { useState } from 'react';

const DisplayFood = () => {

    const foodImageData = [
        [<img src={ require('./foodimages/banana-pancake.jpg') } alt="recipe sample pix" />, 
        "Eggless Banana Pancake"],
        [<img src={ require('./foodimages/crispy.jpg') } alt="recipe sample pix" />, 
        "Crispy Calamari Rings"],
        [<img src={ require('./foodimages/egusi-soup.jpeg') } alt="recipe sample pix" />, 
        "Egusi Soup"],
        [<img src={ require('./foodimages/jollof-chicken.jpeg') } alt="recipe sample pix" />, 
        "Jollof Rice with Chicken"],
        [<img src={ require('./foodimages/jollof.jpeg') } alt="recipe sample pix" />, 
        "Jollof Rice"],
        [<img src={ require('./foodimages/makhani.jpg') } alt="recipe sample pix"  />, 
        "Vegan Dal Makhani"],
        [<img src={ require('./foodimages/paratha.jpg') } alt="recipe sample pix" />, 
        "Moringa Paratha"],
        [<img src={ require('./foodimages/roasted-turkey.jpg') } alt="recipe sample pix" />, 
        "Roasted Turkey"],
        [<img src={ require('./foodimages/salad.jpg') } alt="recipe sample pix" />, 
        "Strawberry Basil Feta Salad"],
        [<img src={ require('./foodimages/tikka.jpg') } alt="recipe sample pix" />, 
        "Lemon Chicken Tikka"]

    ];

    const[Idx, setIdx] = useState(0);
    
    const [ImageList, setImageList] = useState(foodImageData[Idx]);

    const handledClick = () => {
        if (Idx < (foodImageData.length - 1)) {
            setIdx(Idx + 1);
            setImageList(foodImageData[Idx]);
        } else {
            setIdx(0);
            setImageList(foodImageData[Idx]);
        }
    }

    return ( 
        <div className="displayfoods">
            <p className="pointer">
               See sample of dish images of some recipes. 
               <img src={ require('./foodimages/finger-pointer.jpg') } 
               alt="see below" height={40} width={10} className="image-pointer"/> 
               Click <span className="rd">Random Display</span> button below to change the images.</p>
            <div className="foodImages">
                { ImageList[0] }<br />
                <span className="name">Name: { ImageList[1] } </span>
                <br /><button onClick={ handledClick } className="random-display">Random Display</button>
            </div>
            <p className="name-recipes-comment">
                <span className="homeComment">Comment:</span> <input type="text" className="input" />
            </p>
        </div>
     );
}
 
export default DisplayFood;
