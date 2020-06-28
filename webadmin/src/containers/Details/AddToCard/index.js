import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddToCardDialog extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.openAddToCard}
          onClose={this.props.handleCloseAddToCard}
          aria-labelledby="form-dialog-title"
          onBackdropClick={this.props.onBackdropClick}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle style={{ textAlign: "center" }} id="form-dialog-title">Giỏ Hàng</DialogTitle>
          <div style={{ width: "100%", height: "auto", marginBottom: 20 }}>
            <div style={{ width: "95%", margin: "0 auto", height: "auto", display: "flex", border: "1px solid" }}>
              <div style={{ width: "60%", borderRight: "1px solid" }}>
                  <div style={{ padding: 10, width: "100%", display: "flex" }} key={products.Ma_SanPham}>
                    <div style={{ width: "20%" }}>
                      <img style={{ width: "100%" }} alt="" src={products.Image_Url} />
                    </div>
                    <div style={{ width: "80%" }}>
                      <div style={{fontSize: 12, fontWeight: "bold"}}>Tên Sản Phẩm: {products.TenSanPham}</div>
                      <div style={{fontSize: 12, fontWeight: "bold"}}>Giá Sản Phẩm: {products.GiaSanPham}</div>
                      <div style={{fontSize: 12, fontWeight: "bold"}}>Số Lượng: {this.props.count}</div>
                    </div>
                  </div>
              </div>
              <div style={{ width: "40%" }}>
                right
              </div>

            </div>


          </div>
        </Dialog>
      </div>
    );
  }
}

export default AddToCardDialog;