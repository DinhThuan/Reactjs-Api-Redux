import React from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

class ProductActionPage extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);
      this.state = {
         id: "",
         txtName: "",
         txtPrice: "",
         chkbStatus: false
      };
   }
   componentDidMount() {
      let { match } = this.props;
      if (match) {
         let id = match.params.id;
         callApi(`products/${id}`, "GET", null).then(res => {
            console.log(res.data);
            this.setState({
               id: res.data.id,
               txtName: res.data.name,
               txtPrice: res.data.price,
               chkbStatus: res.data.status
            });
         });
      }
   }
   onChange = e => {
      let target = e.target;
      let name = target.name;
      let value = target.type === "checkbox" ? target.checked : target.value;
      this.setState({
         [name]: value
      });
   };
   onSave = e => {
      e.preventDefault();
      console.log(this.state);
      let { id, txtName, txtPrice, chkbStatus } = this.state;
      console.log(id);
      let { history } = this.props;
      if (!id) {
         callApi("products", "POST", {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
         }).then(res => {
            console.log(res);
            if (res.status === 201) {
               // history.goBack();
               history.push("/product-list");
            }
         });
      } else {
         callApi(`products/${id}`, "PUT", {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
         }).then(res => {
            console.log(res);
            if (res.status === 200) {
               history.push("/product-list");
            }
         });
      }
   };
   render() {
      let { txtName, txtPrice, chkbStatus } = this.state;
      return (
         <div>
            <form onSubmit={this.onSave}>
               <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                     Name product
                  </label>
                  <div className="col-sm-10">
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Name product"
                        name="txtName"
                        value={txtName}
                        onChange={this.onChange}
                     />
                  </div>
               </div>
               <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Price</label>
                  <div className="col-sm-10">
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        name="txtPrice"
                        value={txtPrice}
                        onChange={this.onChange}
                     />
                  </div>
               </div>

               <div className="form-group row">
                  <div className="col-sm-2">Status</div>
                  <div className="col-sm-10">
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="checkbox"
                           name="chkbStatus"
                           value={chkbStatus}
                           checked={chkbStatus}
                           onChange={this.onChange}
                        />
                        <label className="form-check-label">stocking</label>
                     </div>
                  </div>
               </div>
               <div className="form-group row">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                     <Link to="/product-list" className="btn btn-secondary">
                        Back
                     </Link>
                     <button type="submit" className="btn btn-primary ml-2">
                        Sign in
                     </button>
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default ProductActionPage;
