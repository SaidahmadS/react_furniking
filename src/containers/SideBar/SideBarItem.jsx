
import './SideBarItem.scss'

function SideBarItem({item}) {
    return (  
        <div className="sidebar-item">
            <a href="#">{item.title}</a>
        </div>
    );
}

export default SideBarItem;