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
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    <tbody>
      <ProductCategoryRow/>
      <ProductRow/>
    </tbody>
  </table>
  );
}

const ProductCategoryRow  = () => {
  return (
    <tr>
      <th>
        Price
      </th>
    </tr>
  );

}

const ProductRow  = () => {
  return (
    <tr>
      <td>Jill</td>
      <td>Smith</td>
    </tr>
  );
}

ReactDOM.render(<FilterableProductTable/>, document.getElementById('root'));
