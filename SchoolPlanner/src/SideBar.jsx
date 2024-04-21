// import PropsType from 'prop-types'

function SideBar() {

    const items = [
        {id: 1, name: "Dashboard", click: "t"},
        {id: 2, name: "Calendar", click: "t"},
        {id: 3, name: "To-Do List", click: "t"},
        {id: 4, name: "Courses", click: "t"},
        {id: 5, name: "Other", click: "t"},
        {id: 6, name: "Settings", click: "t"},
    ];


    const category = 'UNB Planning';

    const listItems = items.map(item => <li key={item.id}>
                                 {item.name}</li>
    );


    return(
        
        <div className="side-bar">
            <h3 className="header-title">{category}</h3>
            <ol className="options">{listItems}</ol>
        </div>
        
    );

}

export default SideBar