import React, { Component } from "react";
import * as language from "../../constants/language";
import "./ProductItem.css";
import { Link } from "react-router-dom";

class ProductItem extends Component {
   onDelete = id => {
      let confirm = window.confirm(language.MESSAGE_DELETE);
      if (confirm) {
         this.props.handleDelete(id);
      }
   };
   render() {
      let { product, index } = this.props;
      return (
         <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
               <span
                  className={
                     product.status
                        ? "badge badge-success"
                        : "badge badge-secondary"
                  }
               >
                  {product.status ? "stocking" : "Out of stock"}
               </span>
            </td>
            <td className="text-center">
               <Link
                  to={`/product/${product.id}/edit`}
                  className="btn btn-info"
               >
                  Edit
               </Link>
               <button
                  className="btn btn-danger ml-2"
                  onClick={() => this.onDelete(product.id)}
               >
                  Delete
               </button>
            </td>
         </tr>
      );
   }
}

export default ProductItem;
