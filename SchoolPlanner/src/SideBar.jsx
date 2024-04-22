// import PropsType from 'prop-types'
import React from 'react';
import { FaChartBar, FaTachometerAlt, FaCalendarAlt, FaList, FaBook, FaEllipsisH, FaCog } from 'react-icons/fa';


function SideBar() {

    const items = [
        {id: 1, name: "Dashboard", click: "t", icon: <FaTachometerAlt size={15} />},
        {id: 2, name: "Calendar", click: "t", icon: <FaCalendarAlt size={15} />},
        {id: 3, name: "To-Do List", click: "t", icon: <FaList size={15} />},
        {id: 4, name: "Courses", click: "t", icon: <FaBook size={15} />},
        {id: 5, name: "Grades", click: "t", icon: <FaChartBar size={15} />},
        {id: 6, name: "Other", click: "t", icon: <FaEllipsisH size={15} />},
        {id: 7, name: "Settings", click: "t", icon: <FaCog size={15}/>},
    ];


    const category = 'UNB Planning';

    const listItems = items.map(item => (
        <li key={item.id} className='options-item'>
            {item.icon} {item.name}
        </li>
    ));


    return(
        
        <div className="side-bar">
            <h3 className="side-bar-title">{category}</h3>
            <ol className="options">{listItems}</ol>
        </div>
        
    );

}

export default SideBar