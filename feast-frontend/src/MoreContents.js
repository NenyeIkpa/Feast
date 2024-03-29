import { Link } from 'react-router-dom';

const MoreContents = () => {
    return ( 
        <div className="morecontents">
            <p className="more">
                <span className="more-contents">More Contents?</span> Click <Link to="/recipes" className="recipeslink">Recipes</Link> for great experience with varieties of recipes.
            </p>
        </div>
     );
}
 
export default MoreContents;
