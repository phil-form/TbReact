import style from "./products.module.css"

const ProductTable = ({products}) => {
    const productsJSX = products.map(
        p => <ProductTableRow key={p.id} {...p}/>
    );

    return (
        <table class="table">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    );
};

const ProductTableRow = ({id, name, price, promoPrice}) => {
    return (
        <tr>
            <td> {id} </td>
            <td> {name}: </td>
            <td>
                {promoPrice ?
                <div>
                    <span className={style.barred}>{price} </span> 
                    <span className={style.promo}>{promoPrice}$</span>
                </div> :
                <span>{price}$</span>}
            </td>
        </tr>
    );
};

export default ProductTable