import React, { Component } from "react";

export default class Course extends Component {
  render() {
    const{id,title,description ,sale,price }=this.props.courseInfo;
    return (
      <div className="col-md-3">
        <div className=" course m-3 bg-info text-center position-relative">
        {sale?<span className="badge bg-secondary bg-success position-absolute top-0 end-0">sale</span>:''}
          <h1>{id}</h1>
          <h2>{title}</h2>
          <p className={(price >1000)?'bg-danger':'bg-success'}>{price}</p>
        <h3>{description}</h3>
        <button onClick={()=>this.props.delete(id)} className="btn btn-danger">delete</button>
        </div>
      </div>
    );
  }
}
