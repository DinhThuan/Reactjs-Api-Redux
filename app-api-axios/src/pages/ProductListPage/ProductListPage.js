import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

class ProductListPage extends React.Component {
   constructor(props) {
      super(props);
      // console.log(props);
      this.state = {
         products: []
      };
   }
   deleteItemById = id => {
      callApi(`products/${id}`, "DELETE", null).then(res => {
         console.log(res);
         if (res.status === 200) {
            callApi("products", "GET", null).then(res => {
               this.setState({
                  products: res.data
               });
            });
         }
      });
   };
   showProducts(products) {
      let result = null;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return (
               <ProductItem
                  handleDelete={this.deleteItemById}
                  key={index}
                  product={product}
                  index={index}
               />
            );
         });
      }
      return result;
   }
   componentDidMount() {
      // console.log('componentDidMount');
      callApi("products", "GET", null).then(res => {
         this.setState({
            products: res.data
         });
      });
   }
   render() {
      // console.log('render');
      return (
         <div>
            <div>
               <Link to="/product/add" className="btn btn-primary mt-3 mb-2">
                  Add product
               </Link>
            </div>
            <div>
               <div className="alert alert-success" role="alert">
                  list of products
               </div>
               <ProductList>
                  {this.showProducts(this.state.products)}
               </ProductList>
            </div>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      products: state.products
   };
};
export default connect(
   mapStateToProps,
   null
)(ProductListPage);
