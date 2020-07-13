import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  //Bước 1: Dàn layout
  //Bước 2: Xác định nguồn dữ liệu thay đổi => Tổ chcws lưu trữ
  //Bước 3: Xây dựng chức năng

  state = {
    srcImg: "./img/red-car.jpg",
  };

  changeColor = (newImgSrc) => {
    this.setState({
      srcImg: newImgSrc,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text">BÀI TẬP CHỌN XE</h3>
        <div className="row">
          <div className="col-6">
            <img
              className="w-100"
              src={this.state.srcImg}
              alt="red_car.jpg"
            ></img>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("./img/red-car.jpg");
                  }}
                  className="btn btn-outline-danger"
                >
                  Red car
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("./img/silver-car.jpg");
                  }}
                  style={{ border: "1px solid #888" }}
                  className="btn"
                >
                  Silver car
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("./img/steel-car.jpg");
                  }}
                  style={{ border: "1px solid gray" }}
                  className="btn btn-outline-dark"
                >
                  Steel car
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("./img/black-car.jpg");
                  }}
                  className="btn btn-outline-dark"
                >
                  Black car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
