import { useState } from 'react';

const DisplayFood = () => {

    const foodImageData = [
        [<img src={ require('./foodimages/banana-pancake.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Eggless Banana Pancake"],
        [<img src={ require('./foodimages/crispy.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Crispy Calamari Rings"],
        [<img src={ require('./foodimages/egusi-soup.jpeg') } alt="recipe sample pix" height={400} width={400} />, 
        "Egusi Soup"],
        [<img src={ require('./foodimages/jollof-chicken.jpeg') } alt="recipe sample pix" height={400} width={400} />, 
        "Jollof Rice with Chicken"],
        [<img src={ require('./foodimages/jollof.jpeg') } alt="recipe sample pix" height={400} width={400} />, 
        "Jollof"],
        [<img src={ require('./foodimages/makhani.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Vegan Dal Makhani"],
        [<img src={ require('./foodimages/paratha.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Moringa Paratha"],
        [<img src={ require('./foodimages/roasted-turkey.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Roasted Turkey"],
        [<img src={ require('./foodimages/salad.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Strawberry Basil Feta Salad Recipe"],
        [<img src={ require('./foodimages/tikka.jpg') } alt="recipe sample pix" height={400} width={400} />, 
        "Lemon Chicken Tikka"]

    ];

    var index = 0;
    const [ImageList, setImageList] = useState({ foodImageData[index] });

    const handledClick = () => {
        if (index < foodImageData.lenght() - 1) {
            index = index + 1;
            setImageList(foodImageData[index]);
        } else {
            index = 0;
            setImageList(foodImageData[index]);
        }
    }

    return ( 
        <div className="displayfoods">
            <p className="pointer">See <img src={ require('./foodimages/finger-pointer.jpg') } alt="see below" height={40} width={10} className="image-pointer"/> sample of dish images of some recipes.</p>
            <div className="foodImages">
                { ImageList[0] }
                <button onClick={ handledClick }>Random Display</button>
            </div>
            <p className="name-recipes-comment">
                <span className="name">Name: { ImageList[1] } </span><br />
                <span className="homeComment">Comment:</span> <input type="text" className="input" />
            </p>
        </div>
     );
}
 
export default DisplayFood;