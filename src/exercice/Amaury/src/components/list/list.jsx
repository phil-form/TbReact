import Table from 'react-bootstrap/Table';


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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </Table>
        </>
    );
};

export default List;