


function Food(){

    const food1 = "Apple";
    const food2 = "Banana"


    return(
        <ul>
            <li>
                Carrot
            </li>
            <li>
                {food2}
            </li>
            <li>
                {food1.toUpperCase()}
            </li>
        </ul>
    );
}

export default Food