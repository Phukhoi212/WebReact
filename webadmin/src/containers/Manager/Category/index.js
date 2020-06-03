import React from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import { getListAdmin, getAdminById, deleteAdminById, createAdmin } from "./actions";
import compose from "recompose/compose";
import { connect } from "react-redux";
import DialogComponent from "../../../components/Dialog";
import ConfirmDialog from "../../../components/ConfirmDialog";
import Input from "../../../components/Input";
import DateTime from "../../../components/DateTime";
import { Button, Paper } from "@material-ui/core";

const columns = [
  { title: 'Tên Admin', field: 'Ten_AD' },
  { title: 'Email', field: 'Email' },
  { title: 'Ngày Sinh', field: 'NgaySinh' },
  { title: 'Số Điện Thoại', field: 'SDT' },
  { title: 'Địa Chỉ', field: 'DiaChi' },
  { title: 'Tên Đăng Nhập', field: 'TenDangNhap' },
  { title: 'Mật Khẩu', field: 'MatKhau' },
];

const initialState = {
  id: "",
  name: "",
  email: "",
  birthYear: "",
  phoneNumber: "",
  address: "",
  userName: "",
  password: "",
  data: [],
  openDialog: false,
  type: "",
  openConfirmDialog: false,
  admin: {},
  openNotification: false,
}

const useStyles = () => ({
  btn_Them: {
    width: "3rem",
  }
})

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  componentDidMount() {
    this.props.getListAdmin();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.adminList,
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
    }, () => this.props.getAdminById(id));
  }

  onOpenConfirm = (id, name) => {
    this.setState({
      openConfirmDialog: true,
      name: name,
      id: id,
    })
  }

  onClickConfirmDelete = () => {
    this.props.deleteAdminById(this.state.id);
    this.onCloseConfirm();
  }

  onCloseConfirm = () => {
    this.setState({ openConfirmDialog: false })
  }

  onClickAddNewAdmin = () => {
    const admin = {
      name: this.state.name,
      email: this.state.email,
      birthYear: this.state.birthYear,
      address: this.state.address,
      phone: this.state.phoneNumber,
      userName: this.state.userName,
      password: this.state.password,
    }
    this.props.createAdmin(admin, () => {
      this.setState({ ...initialState })
    });
    this.setState({ openDialog: false, openNotification: true })
  }

  render() {
    const { admin, classes } = this.props;
    const { openConfirmDialog, name } = this.state;
    const content =
      <Paper style={{ padding: "1rem" }}>
        <Input
          label={"Mã Admin"}
          disabled={true}
          value={admin.Ma_AD}
          name=""
        />
        <Input
          label="Tên"
          value={admin.Ten_AD}
          name="name"
          onChange={this.onChangeTextValue}
        />
        <Input
          label="Email"
          value={admin.Email}
          name="email"
          onChange={this.onChangeTextValue}
        />
        <Input
          label="Ngày Sinh"
          value={admin.NgaySinh}
          onChange={this.onChangeTextValue}
          name="birthYear"
        />
        <Input
          label="Số Điện Thoại"
          value={admin.SDT}
          onChange={this.onChangeTextValue}
          name="phoneNumber"
        />
        <Input
          label="Địa Chỉ"
          value={admin.DiaChi}
          onChange={this.onChangeTextValue}
          name="address"
        />
        <Input
          label="Tên Đăng Nhập"
          value={admin.TenDangNhap}
          onChange={this.onChangeTextValue}
          name="userName"
        />
        <Input
          label="Mật Khẩu"
          value={admin.MatKhau}
          onChange={this.onChangeTextValue}
          name="password"
        />
      </Paper>
    return (
      <div>
        <div className={classes.btn_Them}>
          <Button variant="contained" color="primary" onClick={this.onClickAddButton}>Thêm</Button>
        </div>
        <MaterialTable
          title="Danh Sách Admin"
          columns={columns}
          data={this.state.data}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit',
              onClick: (event, rowData) => this.onClickEdit(rowData.Ma_AD),
            },
            {
              icon: 'delete',
              tooltip: 'Delete',
              onClick: (event, rowData) => {
                this.onOpenConfirm(rowData.Ma_AD, rowData.Ten_AD);
              }
            }
          ]}
        />
        <DateTime />
        <DialogComponent
          open={this.state.openDialog}
          onBackdropClick={() => this.setState({ openDialog: false })}
          type={this.state.type}
          content={content}
          onClose={() => this.setState({ openDialog: false })}
          Confirm={this.onClickAddNewAdmin}
        />
        <ConfirmDialog
          title={`Bạn có muốn xóa admin `}
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
    adminList: state.AdminReducer.adminList,
    admin: state.AdminReducer.admin,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListAdmin,
      getAdminById,
      deleteAdminById,
      createAdmin,
    })
  )(Category);