import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../images/logo.png";
import rau from "../../images/rau.jpg";
import Input from "../../components/Input";
import { Button } from "@material-ui/core";
import Footer from "../../components/Footer";
import { getListFarm } from "./actions";
import { get } from "lodash";
import "./Buy.css";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    backgroundColor: "#eff0f5",
  },
  logo: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff"
  },
  container: {
    width: "80%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    marginTop: 15,
  },
  left: {
    width: "65%",
    backgroundColor: "#fff",
    height: "auto",
    marginRight: 15
  },
  right: {
    width: "35%",
    backgroundColor: "#fff",
    height: "auto"
  },
  footer: {
    width: "100%",
    marginTop: 50,
    left: 0,
    bottom: 0,
  }
})


class BuyProduct extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getListFarm();
  }

  render() {
    const { classes, farmList } = this.props;
    const productSelected = this.props.history.location.state[0];
    const numberProduct = this.props.history.location.state[1];
    const shopName = farmList.find(i => i.Ma_NongTrai === productSelected.Ma_NongTrai);

    return (
      <div className={classes.root}>
        <div className={classes.logo}>
          <div style={{ width: "20%", textAlign: "end", height: "inherit" }}>
            <img style={{ height: 100, lineHeight: "100px" }} alt="" src={logo} />
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.left}>
            <div style={{ width: "100%", textAlign: "start", marginTop: 20, marginLeft: 20, fontWeight: "bold" }}>
              Thông tin giao hàng
            </div>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "50%", padding: 20 }}>
                <label style={{ float: "left" }}>Họ và tên</label>
                <Input placeholder={"Nhập họ và tên"} />
                <label style={{ float: "left", marginTop: 15 }}>Số điện thoại</label>
                <Input placeholder={"Nhập số điện thoại nhận hàng"} />
              </div>
              <div style={{ width: "50%", padding: 20 }}>
                <label style={{ float: "left" }}>Địa chỉ</label>
                <Input placeholder={"Nhập địa chỉ nhận hàng"} />
              </div>
            </div>

            <div style={{ width: "100%", textAlign: "end", marginBottom: 20 }}>
              <Button style={{ marginRight: 20 }} variant="contained" color="primary">Lưu</Button>
            </div>
            {/**Thong tin goi hang */}
            <div style={{ width: "100%", textAlign: "start", marginTop: 20, paddingBottom: 20 }}>
              <div style={{ width: "100%", backgroundColor: "#fafafa", height: 50, lineHeight: "50px", display: "flex" }}>
                <div style={{ width: "40%", textAlign: "start", paddingLeft: 20 }}>
                  {/*Ten San Pham */}
                  <label style={{ fontWeight: "bold" }}>Tên Sản Phẩm: {productSelected.TenSanPham}</label>
                </div>
                <div style={{ width: "60%", textAlign: "end", paddingRight: 20 }}>
                  <label style={{ fontWeight: "bold" }}>Được gửi bởi: {get(shopName, "TenNongTrai", "")} </label>
                </div>
              </div>

              <div style={{ width: "100%", backgroundColor: "#fff", display: "flex", marginTop: 20 }}>
                <div style={{ width: "60%", display: "flex" }}>
                  <div style={{ width: "30%", textAlign: "center", height: 100 }}>
                    <div style={{ width: "100%" }}>
                      <img style={{ width: "85%" }} alt="" src={rau} />
                    </div>
                  </div>
                  <div style={{ width: "70%", textAlign: "justify" }}>
                    {productSelected.Mota}
                  </div>
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  <label style={{ fontSize: 20, color: "orange" }}>{productSelected.GiaSanPham}</label>
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  Số lượng: {numberProduct}
                </div>
              </div>

            </div>

          </div>

          <div className={classes.right}>
            <div style={{ width: "100%", textAlign: "start", marginTop: 20, marginLeft: 20, fontWeight: "bold" }}>
              Thông tin đơn hàng
            </div>
            <div style={{ width: "100%", marginTop: 20 }}>
              <div style={{ width: "100%", display: "flex", marginBottom: 15 }}>
                <div style={{ width: "50%", textAlign: "start", paddingLeft: 20, color: "#757575" }}>
                  Tạm tính {numberProduct} sản phẩm:
                </div>
                <div style={{ width: "50%", textAlign: "end", paddingRight: 15, fontWeight: "bold" }}>
                  {productSelected.GiaSanPham * numberProduct} vnđ
                </div>
              </div>

              <div style={{ width: "100%", display: "flex", marginBottom: 15 }}>
                <div style={{ width: "50%", textAlign: "start", paddingLeft: 20, color: "#757575" }}>
                  Phí giao hàng:
                </div>
                <div style={{ width: "50%", textAlign: "end", paddingRight: 15, fontWeight: "bold" }}>
                  9.900 vnđ
                </div>
              </div>

              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "70%", paddingLeft: 20 }}>
                  <Input placeholder={"Nhập mã giảm giá"} />
                </div>

                <div style={{ width: "25%", textAlign: "end", paddingTop: 9 }}>
                  <Button variant="contained" style={{ backgroundColor: "#1a9cb7", color: "#fff" }}>
                    Áp dụng
                  </Button>
                </div>
              </div>

              <div style={{ width: "100%", display: "flex", paddingTop: 15 }}>
                <div style={{ width: "50%", textAlign: "start", paddingLeft: 20, color: "#757575" }}>
                  <label style={{ fontWeight: "bold" }}>Tổng Cộng:</label>
                </div>
                <div style={{ width: "50%", textAlign: "end", paddingRight: 15 }}>
                  <div style={{ fontWeight: "bold", color: "orange" }}>
                    {numberProduct * productSelected.GiaSanPham + 9900} vnđ
                  </div>
                  <div>
                    <label style={{ fontSize: 12 }}>Đã bao gồm VAT (nếu có)</label>
                  </div>
                </div >

              </div>

              <div style={{ width: "100%", marginTop: 15 }}>
                <div style={{ width: "90%", margin: "0 auto" }}>
                  <Button fullWidth style={{ backgroundColor: "orange", color: "#fff" }} variant="contained">
                    Thanh Toán
                  </Button>
                </div>
              </div>


            </div>
          </div>

        </div>

        <div className={classes.footer}>
          <Footer />
        </div>

      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    farmList: state.BuyProductReducer.farmList,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListFarm,
    })
  )(BuyProduct);