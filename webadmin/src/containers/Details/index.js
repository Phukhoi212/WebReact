import React from "react";
import { Redirect } from 'react-router-dom';
import { withStyles, IconButton, Button } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PaymentIcon from '@material-ui/icons/Payment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LinearProgress from '@material-ui/core/LinearProgress';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import rau from "../../images/rau.jpg";
import "./Detail.css";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    backgroundColor: "#eff0f5",
  },
  container: {
    width: "80%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    backgroundColor: "#fff"
  },
  left: {
    width: "25%",
    height: "auto"
  },
  image: {
    width: "100%",
    height: 300,
    borderBottom: "1px solid #ebebeb",
    lineHeight: 30,
  },
  center: {
    width: "50%",
    height: "auto",
    marginLeft: 15,
    marginRight: 15,
  },
  description: {
    marginTop: 15,
    height: "auto",
    textAlign: "justify"
  },
  text_description: {
    fontSize: 16,
    fontWeight: "bold"
  },
  rating_and_share: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    fontSize: 13,
  },
  rating_and_share_left: {
    width: "80%",
    display: "flex",
    lineHeight: 2,
  },
  rating_and_share_right: {
    width: "20%"
  },
  shop: {
    width: "100%",
    fontSize: 13,
    display: "inline-flex",
    paddingBottom: 20,
    borderBottom: "1px solid #eff0f5",
  },
  price: {
    width: "100%",
    height: "auto",
  },
  price_detail: {
    width: "50%",
    textAlign: "start",
    lineHeight: 2,
  },
  count: {
    width: "100%",
    display: "flex",
    paddingTop: 20,
  },
  number: {
    width: "80%",
    textAlign: "start",
  },
  button_group: {
    width: "100%",
    textAlign: "start",
    marginTop: 25,
    marginBottom: 50
  },
  button: {
    width: "80%",
    display: "flex"
  },
  right: {
    width: "25%",
    height: "auto",
    backgroundColor: "#fafafa",
    padding: 8,
  },
  right_location: {
    width: "100%",
    marginTop: 15,
  },
  shop_info: {
    width: "100%",
    marginTop: 15,
    paddingBottom: 20
  },
  infomation: {
    width: "80%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    marginTop: 15
  },
  left_info: {
    width: "80%",
    height: "auto",
    marginRight: 10,
    backgroundColor: "#fff",
    paddingBottom: 20
  },
  rating_and_comment: {
    width: "100%",
    height: "auto",
    marginTop: 10,
  },
  danhgia: {
    width: "80%",
    height: "auto",
    margin: "0 auto",
    display: "flex"
  },
  rating_content: {
    width: "80%",
    height: "auto",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  right_info: {
    width: "20%",
    height: "3rem",
    backgroundColor: "red"
  }
})


class Detail extends React.Component {
  state = {
    number: 1,
    name: "2g Hạt Giống Rau Tía Tô (Perilla frutescens)",
    like: false,
  }

  onClickAddIcon = () => {
    this.setState({ number: this.state.number + 1 })
  }

  onClickRemoveIcon = () => {
    this.setState({ number: this.state.number - 1 })
  }

  onClickLikeButton = () => {
    this.setState({
      like: !this.state.like,
    })
  }

  onClickMuaHang = () => {
  }

  render() {
    const { classes } = this.props;
    const { number, name, like } = this.state;
    const mota = "2g Hạt Giống Rau Tía Tô (Perilla frutescens)sinh trưởng khỏe độ đồng đều cao trồng được quanh năm tỷ lệ nảy mầm cao kháng bệnh tốt";
    const alert = "Sản phẩm này là tài sản cá nhân được bán bởi Nhà Bán Hàng Cá Nhân và không thuộc đối tượng phải chịu thuế GTGT. Do đó hóa đơn VAT không được cấp trong trường hợp này."
    return (
      <div className={classes.root}>
        <NavBar />
        <Header />
        {/* Container */}
        <div style={{ width: "100%" }}>
          <div className={classes.container}>
            <div className={classes.left}>
              <div className={classes.image}>
                <img
                  alt="vhg"
                  src={rau}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className={classes.center}>
              <div className={classes.description}>
                <label className={classes.text_description}>{mota}</label>
              </div>

              <div className={classes.rating_and_share}>
                <div className={classes.rating_and_share_left}>
                  <span style={{ marginRight: 5 }}><Rating value={4} readOnly /></span>
                  <label style={{ marginRight: 5 }}>94 đánh giá</label>|
                <label style={{ marginLeft: 5 }}>4 câu hỏi đã trả lời</label>
                </div>
                <div className={classes.rating_and_share_right}>
                  <span>
                    <IconButton size="small">
                      <ShareIcon />
                    </IconButton>
                    <IconButton size="small">
                      <FavoriteBorderIcon />
                    </IconButton>
                  </span>
                </div>
              </div>

              <div className={classes.shop}>
                <span>Thương hiệu: </span>
              </div>

              <div className={classes.price}>
                <div className={classes.price_detail}>
                  <span style={{ color: "#f57224", fontSize: 30 }}>7.000</span>
                </div>
              </div>

              <div className={classes.count}>
                <div style={{ width: "20%", textAlign: "start" }}>Số lượng: </div>
                <div className={classes.number}>
                  <IconButton disabled={number === 1} size="small" style={{ backgroundColor: "#eff0f5" }} onClick={this.onClickRemoveIcon}>
                    <RemoveIcon />
                  </IconButton>
                  <span style={{ paddingLeft: 20, paddingRight: 20 }}>{number}</span>
                  <IconButton size="small" style={{ backgroundColor: "#eff0f5" }} onClick={this.onClickAddIcon}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>

              <div className={classes.button_group}>
                <div className={classes.button}>
                  <Button
                    style={{ marginRight: 5, backgroundColor: "#ffb916", color: "#fff" }}
                    fullWidth
                    variant="contained"
                    onClick={() => <Redirect to="/detail/buy" />}
                  >
                    Mua Ngay
                </Button>
                  <Button
                    style={{ marginLeft: 5, backgroundColor: "#f57224", color: "#fff" }}
                    fullWidth
                    variant="contained"
                  >
                    Thêm vào giỏ hàng
                </Button>
                </div>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.right_location}>
                {/*Tùy chỉnh location*/}
                <div style={{ width: "100%", textAlign: "start", paddingBottom: 15 }}>
                  <label style={{ fontSize: 13, fontWeight: "bold" }}>Tùy chọn giao hàng</label>
                  <span style={{ float: "right" }}>
                    <IconButton size="small">
                      <ErrorOutlineIcon />
                    </IconButton>
                  </span>
                </div>
                {/*Địa chỉ giao hàng*/}
                <div style={{ textAlign: "start", display: "flex", paddingBottom: 15, borderBottom: "1px solid #eff0f5" }}>
                  <div style={{ width: "70%", display: "flex" }}>
                    <div style={{ width: "15%" }}>
                      <LocationOnOutlinedIcon />
                    </div>
                    <label style={{ fontSize: 15, width: "85%" }}>Hồ Chí Minh, Quận Tân Bình, Phường 10</label>
                  </div>
                  <div style={{ width: "30%" }}>
                    <Button variant="text" size="small" style={{ color: "blue" }}>Thay đổi</Button>
                  </div>
                </div>
                {/*Giao hàng tiêu chuẩn*/}
                <div style={{ textAlign: "start", display: "flex", marginTop: 15 }}>
                  <div style={{ width: "70%", display: "flex" }}>
                    <ArchiveOutlinedIcon />
                    <ul style={{ listStyle: "none", margin: 0, paddingLeft: 10 }}>
                      <li>GH Tiêu chuẩn</li>
                      <li style={{ fontSize: 12 }}>6-10 ngày</li>
                    </ul>
                  </div>
                  <div style={{ width: "30%" }}><label style={{ fontWeight: "bold", fontSize: 14 }}>19.300 vnđ</label></div>
                </div>
                {/*Giao hàng nhanh*/}
                <div style={{ textAlign: "start", display: "flex", marginTop: 15 }}>
                  <div style={{ width: "70%", display: "flex" }}>
                    <LocalShippingIcon />
                    <ul style={{ listStyle: "none", margin: 0, paddingLeft: 10 }}>
                      <li>GH Nhanh</li>
                      <li style={{ fontSize: 12 }}>1-2 ngày</li>
                    </ul>
                  </div>
                  <div style={{ width: "30%" }}><label style={{ fontWeight: "bold", fontSize: 14 }}>32.900 vnđ</label></div>
                </div>
                {/*Thanh Toán*/}
                <div style={{ textAlign: "start", display: "flex", marginTop: 15, paddingBottom: 10, borderBottom: "1px solid #eff0f5" }}>
                  <div style={{ width: "10%", display: "flex" }}>
                    <PaymentIcon />
                  </div>
                  <div style={{ width: "90%" }}>
                    <label style={{ fontSize: 14 }}>
                      Thanh toán khi nhận hàng không được đồng kiểm
                  </label>
                  </div>
                </div>
              </div>
              {/*Thông tin shop bán hàng*/}
              <div className={classes.shop_info}>
                {/*Ten cua Shop va chat */}
                <div style={{ width: "100%", display: "flex", paddingBottom: 15, borderBottom: "1px solid #eff0f5" }}>
                  <div style={{ width: "50%", textAlign: "start" }}>
                    <div style={{ fontSize: 12 }}>Được bán bởi</div>
                    <div style={{ color: "blue" }}>Anh Dũng Shop</div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <IconButton size="small">
                      <QuestionAnswerIcon style={{ color: "#199cb7" }} />
                      <label style={{ color: "#199cb7", fontSize: 14 }}>Trò chuyện</label>
                    </IconButton>
                  </div>
                </div>
                {/*đánh giá của shop */}
                <div style={{ width: "100%", display: "flex", paddingBottom: 15 }}>
                  <div style={{ width: "33.33%", border: "1px solid #eff0f5" }}>
                    <div style={{ fontSize: 12, marginTop: 10 }}>Đánh giá tích cực</div>
                    <div style={{ fontSize: 30, marginTop: 20, marginBottom: 15 }}>98%</div>
                  </div>
                  <div style={{ width: "33.33%", border: "1px solid #eff0f5" }}>
                    <div style={{ fontSize: 12, marginTop: 10 }}>Giao đúng hạn</div>
                    <div style={{ fontSize: 30, marginTop: 20, marginBottom: 15 }}>98%</div>
                  </div>
                  <div style={{ width: "33.33%", border: "1px solid #eff0f5" }}>
                    <div style={{ fontSize: 12, marginTop: 10 }}>Tỉ lệ phản hồi</div>
                    <div style={{ fontSize: 30, marginTop: 20, marginBottom: 15 }}>98%</div>
                  </div>
                </div>
                {/*Go to Shop */}
                <div style={{ width: "100%" }}>
                  <Button style={{ color: "blue" }} variant="text">Đến Gian Hàng</Button>
                </div>
              </div>
            </div>
          </div>
          {/*Mo ta san pham */}
          <div className={classes.infomation}>
            <div className={classes.left_info}>
              {/*Head mo ta*/}
              <div style={{ width: "100%", backgroundColor: "#fafafa", height: 50, lineHeight: "50px" }}>
                <div style={{ paddingLeft: 20, textAlign: "start", fontWeight: "bold" }}>
                  Mô tả sản phẩm: {name}
                </div>
              </div>
              {/*Thong bao */}
              <div style={{ width: "90%", margin: "0 auto", border: "1px solid #eff0f5", display: "flex", padding: 5, marginTop: 10 }}>
                <div style={{ width: "10%" }}>
                  <ErrorOutlineIcon color="primary" />
                </div>
                <div style={{ width: "90%", fontSize: 12 }}>
                  {alert}
                </div>
              </div>
              {/*Thong tin san pham */}
              <div style={{ width: "100%", marginTop: 15 }}>
                <div style={{ paddingLeft: 20, paddingRight: 20, textAlign: "justify" }}>
                  Hạt Giống Rau Quế Lá To:cho cây lớn, lá lớn, tròn, dài
                  Thân màu tím, lá màu xanh mướt, có mùi thơm dễ chịu
                  Thời vụ gieo trồng: quanh năm,.
                  Thu hoạch rau quế 30-35 ngày sau khi gieo
                </div>
                <div style={{ width: "50%", margin: "0 auto", marginTop: 20 }}>
                  <img style={{ width: "100%" }} alt="" src={rau} />
                </div>
              </div>
              {/*Chi tiet*/}
              <div style={{ width: "100%", marginTop: 20 }}>
                <div style={{ paddingLeft: 20, textAlign: "start", fontWeight: "bold" }}>
                  Đặc tính sản phẩm: {name}
                </div>
                <div style={{ width: "100%", textAlign: "start", paddingLeft: 20, display: "flex" }}>
                  <div style={{ width: "50%" }}>
                    <div>Thương hiệu: </div>
                    <div style={{ fontWeight: "bold" }}>No Brand</div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div>Dòng sản phẩm: </div>
                    <div style={{ fontWeight: "bold" }}>Thực phẩm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.right_info}></div>
            {/*Danh gia san pham*/}
          </div>
          <div className={classes.rating_and_comment}>
            <div className={classes.danhgia}>
              <div className={classes.rating_content}>
                {/*Head danh gia san pham*/}
                <div style={{ width: "100%", backgroundColor: "#fafafa", height: 50, lineHeight: "50px" }}>
                  <div style={{ paddingLeft: 20, textAlign: "start", fontWeight: "bold" }}>
                    Đánh giá sản phẩm: {name}
                  </div>
                </div>
                {/*Rating cho san pham va thong ke */}
                <div style={{ width: "100%", backgroundColor: "#fff", display: "flex", marginTop: 15, paddingBottom: 20 }}>
                  <div style={{ width: "30%" }}>
                    <div style={{}}>
                      <label style={{ fontSize: 36, fontWeight: "bold" }}>4</label>
                      <label style={{ fontSize: 28 }}>/5</label>
                    </div>
                    <Rating value={4} readOnly size="large" />
                    <div style={{ fontSize: 12 }}>28 đánh giá</div>
                  </div>
                  <div style={{ width: "70%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "30%" }}>
                        <Rating value={5} readOnly size="small" />
                      </div>
                      <div style={{ width: "40%", paddingTop: 7 }}>
                        <LinearProgress variant="determinate" value={50} />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "30%" }}>
                        <Rating value={4} readOnly size="small" />
                      </div>
                      <div style={{ width: "40%", paddingTop: 7 }}>
                        <LinearProgress variant="determinate" value={50} />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "30%" }}>
                        <Rating value={3} readOnly size="small" />
                      </div>
                      <div style={{ width: "40%", paddingTop: 7 }}>
                        <LinearProgress variant="determinate" value={50} />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "30%" }}>
                        <Rating value={2} readOnly size="small" />
                      </div>
                      <div style={{ width: "40%", paddingTop: 7 }}>
                        <LinearProgress variant="determinate" value={50} />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "30%" }}>
                        <Rating value={1} readOnly size="small" />
                      </div>
                      <div style={{ width: "40%", paddingTop: 7 }}>
                        <LinearProgress variant="determinate" value={50} />
                      </div>
                    </div>
                  </div>
                </div>


                {/*Filter comment*/}
                <div style={{ width: "100%", backgroundColor: "#fafafa", height: 50, lineHeight: "50px" }}>
                  <div style={{ paddingLeft: 20, textAlign: "start", fontWeight: "bold" }}>
                    Đánh giá sản phẩm: {name}
                  </div>
                </div>

                <div style={{ width: "100%", backgroundColor: "#fff", height: "auto", marginTop: 20, display: "flex" }}>
                  <div style={{ width: "30%", textAlign: "start", paddingLeft: 20 }}>
                    <div>
                      <Rating value={4} readOnly size="small" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, marginLeft: 5 }}>bởi: Khoa Trần</label>
                    </div>
                  </div>
                  <div style={{ width: "70%", textAlign: "end" }}>
                    <label style={{ fontSize: 12, marginRight: 20 }}>06 thg 6 2020</label>
                  </div>
                </div>

                <div style={{ width: "100%", backgroundColor: "#fff", height: "auto", marginTop: 20, textAlign: "start" }}>
                  <label style={{ paddingLeft: 22 }}>This is test comment for product</label>
                </div>

                <div style={{ width: "100%", backgroundColor: "#fff", marginTop: 20, display: "flex", paddingBottom: 20 }}>
                  <div style={{ width: "30%", textAlign: "start", paddingLeft: 20 }}>
                    <IconButton size="small" onClick={this.onClickLikeButton} color={like ? "primary" : "default"}>
                      <ThumbUpAltIcon />
                    </IconButton>
                    0
                  </div>

                  <div style={{ width: "70%", textAlign: "end" }}>
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>


                {/** */}
              </div>



              <div className={classes.right_info}></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Detail);