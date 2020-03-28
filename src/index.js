import React from 'react';
import ReactDOM from 'react-dom';

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
    </form>
  );
}

const FilterableProductTable = () => {
  return (
    <div className="FilterableProductTable">
      <SearchBar/>
      <ProductTable/>
    </div>
  );
}

const ProductTable = () => {
  const rows =[]
  let lastCategory = null

  PRODUCTS.forEach(
    e => {
      if(lastCategory != e.category)
        rows.push(<ProductCategoryRow category={e.category} key={e.category}/>)

      rows.push(<ProductRow product={e} key={e.name}/>)
      lastCategory = e.category;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    <tbody>{rows}</tbody>
  </table>
  );
}

const ProductCategoryRow  = (props) => {
  return (
    <tr>
      <th>
        {props.category}
      </th>
    </tr>
  );

}

const ProductRow  = (props) => {
  const product = props.product;
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

const PRODUCTS = [
  {category :'food', name:'football' , price : '51.99'},
  {category :'food', name:'basketball' , price : '11.99'},
  {category :'food', name:'baseball' , price : '31.99'},
  {category :'beverage',name:'coke' , price : '1.99'},
  {category :'beverage', name:'tealive' , price : '2.99'},
  {category :'beverage', name:'latte' , price : '3.99'}
]

ReactDOM.render(<FilterableProductTable/>, document.getElementById('root'));
