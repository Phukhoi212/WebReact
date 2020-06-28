import React from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import { getListEmployee, getEmployById } from "./actions";
import compose from "recompose/compose";
import { connect } from "react-redux";
import DialogComponent from "../../../components/Dialog";
import ConfirmDialog from "../../../components/ConfirmDialog";
import Input from "../../../components/Input";
import { Button, Paper } from "@material-ui/core";

const columns = [
  { title: 'Tên Nhân Viên', field: 'Ten_NV' },
  { title: 'Ngày Sinh', field: 'NgaySinh' },
  { title: 'Số Điện Thoại', field: 'SDT' },
  { title: 'Địa Chỉ', field: 'DiaChi' },
  { title: 'Tên Đăng Nhập', field: 'TenDangNhap' },
  { title: 'Mật Khẩu', field: 'MatKhau' },
  { title: 'Mã Loại Nhân Viên', field: 'MaLoai_NV' },
];

const initialState = {
  id: "",
  name: "",
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

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  componentDidMount() {
    this.props.getListEmployee();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.employList,
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
    const { employ, classes } = this.props;
    const { openConfirmDialog, name } = this.state;
    const content =
      <Paper style={{ padding: "1rem" }}>
        <Input
          label={"Mã Nhân Viên"}
          disabled={true}
          value={employ.Ma_NV}
          name=""
        />
        <Input
          label="Tên Nhân Viên"
          value={employ.Ten_NV}
          name="name"
          onChange={this.onChangeTextValue}
        />
        <Input
          label="Ngày Sinh"
          value={employ.NgaySinh}
          onChange={this.onChangeTextValue}
          name="birthYear"
        />
        <Input
          label="Số Điện Thoại"
          value={employ.SDT}
          onChange={this.onChangeTextValue}
          name="phoneNumber"
        />
        <Input
          label="Địa Chỉ"
          value={employ.DiaChi}
          onChange={this.onChangeTextValue}
          name="address"
        />
        <Input
          label="Tên Đăng Nhập"
          value={employ.TenDangNhap}
          onChange={this.onChangeTextValue}
          name="userName"
        />
        <Input
          label="Mật Khẩu"
          value={employ.MatKhau}
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
          title="Danh Sách Nhân Viên"
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
    employList: state.Admin_EmployReducer.employList,
    employ: state.Admin_EmployReducer.employ,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
        getListEmployee,
        getEmployById,
    })
  )(Employees);