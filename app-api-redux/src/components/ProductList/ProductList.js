import React, { Component } from "react";

class ProductList extends Component {
   render() {
      return (
         <table className="table table-bordered table-hover table-sm">
            <thead>
               <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Code product</th>
                  <th scope="col">Name Product</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-center">
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
         </table>
      );
   }
}

export default ProductList;
