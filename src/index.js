import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.handleTextFilter = this.handleTextFilter.bind(this);
  }
  
  handleTextFilter(e){
    this.props.onTextChange(e.target.value);
  }

  render(){
    return (
      <form>
        <input type="text" placeholder="Search..." value ={this.props.filterText} onChange={this.handleTextFilter}/>
      </form>
    );
  }
}


class FilterableProductTable extends React.Component{

  constructor(props){
    super(props)
    this.state ={products : PRODUCTS,filterText: ''};
    this.handleTextFilter = this.handleTextFilter.bind(this);  
  }

  handleTextFilter(filterText){
      let filterProduct =[]

      if(filterText.length > 3)
        filterProduct = this.state.products.filter(({name}) => name == filterText)
      else
        filterProduct = PRODUCTS;

    this.setState ({
      filterText : filterText,
      products : filterProduct
    });
    
  }


  render(){
    return (
      <div className="FilterableProductTable">
        <SearchBar 
        filterText ={this.state.filterText}
        onTextChange = {this.handleTextFilter}
        />
        <ProductTable items={this.state.products}/>
      </div>
    );
  }

}

const ProductTable = (props) => {
  const rows =[]
  let lastCategory = null

  props.items.forEach(
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
