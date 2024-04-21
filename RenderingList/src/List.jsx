import PropsType from 'prop-types'

function List(props){


    const category = props.category;
    const itemsList = props.items;

    const listItems = itemsList.map(item => <li key={item.id}>
                                 {item.name}: &nbsp; 
                                <b>{item.calories}</b></li>
    );

    return(
        <>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>{listItems}</ol>
        </>
    );
}
List.propsType = {
    category: PropsType.string,
    items: PropsTypes.arrayOf(
        PropsType.shape(
        {
            id: PropsTypes.number,
            name: PropsTypes.string,
            calories: PropsTypes.number
        })
    )
} 


List.defaultProps = {
    category: "Category",
    items: []
}

export default List