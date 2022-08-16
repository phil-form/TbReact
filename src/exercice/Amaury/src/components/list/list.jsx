

const List = ({products}) => {

    const listItems = products.map(
        product => 
            <tr key={product.id}>
                <td>{product.name}</td>
                <td style={product.discount ? {color: 'red'} : {color: 'black'}}>{product.price} euros</td>
                <td>{product.discount ? 'on discount!' : ''}</td>
            </tr>
    );

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </>
    );
};

export default List;