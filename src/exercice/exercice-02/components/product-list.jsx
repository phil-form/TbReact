const ProductListItem = ({ name, price, promo }) =>
{
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{promo ? 'En promo' : '-'}</td>
        </tr>
    );
}

const ProductList = (props) =>
{
    const productJSX = props.products.map(
        p => <ProductListItem {...p} key={p.id} />
    );

    return (
        <>
            <h3>
                Liste de produits
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Promo</th>
                    </tr>
                </thead>
                <tbody>
                    {productJSX}
                </tbody>
            </table>
        </>
    );
}

ProductList.defaultProps = {
    products: []
};

export default ProductList;
