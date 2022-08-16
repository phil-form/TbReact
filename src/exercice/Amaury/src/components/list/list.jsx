

const List = ({products}) => {

    const listItems = products.map(
        product => 
            <li key={product.id}>
                {product.name}: <span style={product.discount ? {color: 'red'} : {color: 'black'}}>{product.price}</span> euros {product.discount ? 'on discount!' : ''}
            </li>
    );

    return (
        <>
            <ul>
                {listItems}
            </ul>
        </>
    );
};

export default List;