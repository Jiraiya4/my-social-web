import s from './sideBar.module.css'
import sideBarItem from './sideBarItem/sideBarItem';

const sideBar = (props) => {

    let sideBarItems = props.friends.map( friend => <sideBarItem name={friend.name} avatar={friend.avatar} />)
    
    return (
        <div>
            {sideBarItems}
        </div>
    );
}

export default sideBar;