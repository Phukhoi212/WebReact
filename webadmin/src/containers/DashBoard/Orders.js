import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>ĐƠN ĐẶT HÀNG</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Mã Đơn Hàng</TableCell>
            <TableCell>Ngày Đặt</TableCell>
            <TableCell>Địa Chỉ Giao</TableCell>
            <TableCell>Ghi Chú</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.Ma_DonHang}>
              <TableCell>{row.Ma_DonHang}</TableCell>
              <TableCell>{row.NgayDat}</TableCell>
              <TableCell>{row.DiaChiGiao}</TableCell>
              <TableCell>{row.GhiChu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}