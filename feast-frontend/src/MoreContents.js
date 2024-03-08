import { Link } from 'react-router-dom';

const MoreContents = () => {
    return ( 
        <div className="morecontents">
            <p className="more">
                <span>More Contents?</span> Click <Link to="/foods" className="foodslink">Foods</Link> for great experiences with varieties of foods and their recipes.
            </p>
        </div>
     );
}
 
export default MoreContents;