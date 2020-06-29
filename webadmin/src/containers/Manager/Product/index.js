import React from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import { getListProduct, getProductById, createProduct, deleteProductById } from "./actions";
import compose from "recompose/compose";
import { connect } from "react-redux";
import DialogComponent from "../../../components/Dialog";
import ConfirmDialog from "../../../components/ConfirmDialog";
import InputComponent from "../../../components/Input";
import { Button, Paper } from "@material-ui/core";

const columns = [
  { title: 'Tên Sản Phẩm', field: 'TenSanPham' },
  { title: 'Giá Sản Phẩm', field: 'GiaSanPham' },
  { title: 'Số Lượng', field: 'SoLuong' },
  { title: 'Mô Tả', field: 'Mota', render: rowData => <div style={{ width: 400 }}>{rowData.Mota}</div> },
  { title: 'Mã Loại Hàng', field: 'Ma_LoaiHang' },
  { title: 'Mã Nông Trại', field: 'Ma_NongTrai' },
  { title: 'Hình Ảnh', field: 'Image_Url', render: rowData => <img src={rowData.Image_Url} alt="" style={{ width: "10rem" }} /> },
];

const initialState = {
  id: "",
  name: "",
  price: "",
  amount: "",
  description: "",
  idFarm: "",
  idCategory: "",
  data: [],
  openDialog: false,
  type: "",
  openConfirmDialog: false,
  product: {},
  openNotification: false,
  file: null
}

const useStyles = () => ({
  btn_Them: {
    width: "3rem",
    margin: "1rem"
  }
})

class Admin_Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  componentDidMount() {
    this.props.getListProduct();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.listProduct,
    })
  }

  onChangeTextValue = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onClickAddButton = () => {
    this.setState({
      openDialog: true,
      type: "add",
    })
  }

  onClickEdit = id => {
    this.setState({
      openDialog: true,
      type: "edit",
    }, () => this.props.getProductById(id));
  }

  onOpenConfirm = (id, name) => {
    this.setState({
      openConfirmDialog: true,
      name: name,
      id: id,
    })
  }

  onClickConfirmDelete = () => {
    this.props.deleteProductById(this.state.id);
    this.onCloseConfirm();
  }

  onCloseConfirm = () => {
    this.setState({ openConfirmDialog: false })
  }

  onChangeFile = (e) => {
    this.setState({ file: e.target.files[0] })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, amount, description, idCategory, idFarm, file } = this.state;
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("amount", amount);
    data.append("description", description);
    data.append("idCategory", idCategory);
    data.append("idFarm", idFarm);
    data.append("file", file, file.name);
    this.props.createProduct(data, () => {
      this.setState({ ...initialState })
    });
    this.setState({ openDialog: false, openNotification: true })
  }

  render() {
    const { product, classes } = this.props;
    const { openConfirmDialog, name, type, price, amount, idCategory, idFarm, description, file } = this.state;
    const content =
      <Paper style={{ padding: "1rem" }}>
        <form
          style={{ width: "inherit" }}
          onSubmit={this.handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          <InputComponent
            label={"Mã Sản Phẩm"}
            disabled={true}
            value={type === "edit" ? product.Ma_SanPham : ""}
            name=""
          />
          <InputComponent
            label="Tên Sản Phẩm"
            value={type === "edit" ? product.TenSanPham : name}
            name="name"
            onChange={this.onChangeTextValue}
          />
          <InputComponent
            label="Giá"
            value={type === "edit" ? product.GiaSanPham : price}
            name="price"
            onChange={this.onChangeTextValue}
          />
          <InputComponent
            label="Số Lượng"
            value={type === "edit" ? product.SoLuong : amount}
            onChange={this.onChangeTextValue}
            name="amount"
          />
          <InputComponent
            label="Mô Tả"
            value={type === "edit" ? product.Mota : description}
            onChange={this.onChangeTextValue}
            name="description"
          />
          <InputComponent
            label="Mã Nông Trại"
            value={type === "edit" ? product.Ma_NongTrai : idFarm}
            onChange={this.onChangeTextValue}
            name="idFarm"
          />
          <InputComponent
            label="Mã Loại"
            value={type === "edit" ? product.Ma_LoaiHang : idCategory}
            onChange={this.onChangeTextValue}
            name="idCategory"
          />
          <div>
            <label for="file">Chọn Hình Ảnh</label>
            <input type="file" id="file" name="file" multiple onChange={this.onChangeFile} />
          </div>
          <img alt="" src={type === "edit" ? product.Image_Url : file} style={{ width: "8rem" }} />
          <div>
            <Button variant="contained" color="secondary" onClick={() => this.setState({ openDialog: false })}>Hủy</Button>
            <Button style={{marginLeft: 20}} variant="contained" color="primary" type="submit">Thêm Mới</Button>
          </div>
        </form>
      </Paper>
    return (
      <div>
        <div className={classes.btn_Them}>
          <Button variant="contained" color="primary" onClick={this.onClickAddButton}>Thêm</Button>
        </div>
        <MaterialTable
          title="Danh Sách Sản Phẩm"
          columns={columns}
          data={this.state.data}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit',
              onClick: (event, rowData) => this.onClickEdit(rowData.Ma_SanPham),
            },
            {
              icon: 'delete',
              tooltip: 'Delete',
              onClick: (event, rowData) => {
                this.onOpenConfirm(rowData.Ma_SanPham, rowData.TenSanPham);
              }
            }
          ]}
        />
        <DialogComponent
          open={this.state.openDialog}
          onBackdropClick={() => this.setState({ openDialog: false })}
          type={this.state.type}
          content={content}
          onClose={() => this.setState({ openDialog: false })}
          actions={false}
        />
        <ConfirmDialog
          title={`Bạn có muốn xóa Sản Phẩm:  `}
          open={openConfirmDialog}
          onBackdropClick={() => this.setState({ openConfirmDialog: false })}
          onConfirm={this.onClickConfirmDelete}
          name={name}
          onClose={() => this.setState({ openConfirmDialog: false })}
        />
      </div>
    )
  }

}
const mapStateToProps = state => {
  return {
    listProduct: state.Admin_ProductReducer.listProduct,
    product: state.Admin_ProductReducer.product,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListProduct,
      getProductById,
      createProduct,
      deleteProductById,
    })
  )(Admin_Product);