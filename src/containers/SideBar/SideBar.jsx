
import SideBarItem from './SideBarItem';
import './SideBar.scss'
function SideBar() {
    const data = [
        { id: 1, title: 'All', path: '/all' },
        { id: 2, title: 'New Arrivals', path: '/newarrivals' },
        { id: 3, title: 'Hot Sale', path: '/hotsale' },
        { id: 4, title: 'Furniture', path: '/furniture  ' },
        { id: 5, title: 'Amrature', path: '/amrature' },
        { id: 6, title: 'Table', path: '/table' },
        { id: 7, title: 'Chair', path: '/chair' },
        { id: 8, title: 'Sofa', path: '/sofa' },
        { id: 9, title: 'Mirrors', path: '/mirrors' },
        { id: 10, title: 'Stools', path: '/stools' },
        { id: 11, title: 'Banches', path: '/banches' },
    ]

    return (  
        <div className="sidebar">
            {data.map((item, index) => (
                <SideBarItem item={item} key={index} />
            ))}
        </div>
    );
}

export default SideBar;