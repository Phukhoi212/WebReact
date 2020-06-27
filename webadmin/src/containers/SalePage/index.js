import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { getListSale, updateActiePage } from "./actions";
import Pagination from "react-js-pagination";
import CardComponent from "../../components/Card";
import Footer from "../../components/Footer";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    backgroundColor: "#eff0f5",
  },
  navBar: {
    display: "block",
  },
  container: {
    height: "auto",
    display: "flex",
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#fff",
    marginBottom: 20
  },
  header: {
    display: "block",
    marginBottom: 25,
    height: 300,
    backgroundColor: "#fff"
  },
  footer: {
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 2,
    height: "auto"
  },
  result: {
    width: "97%",
    height: "auto",
    margin: "0 auto",
    paddingTop: 15,
    paddingBottom: 15
  },
  category: {
    width: "80%",
    height: 200,
    marginBottom: "1rem",
    backgroundColor: "#fff",
    margin: "0 auto",
  }
})


class SalePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getListSale();
  }

  handlePageChange = pageNumber => {
    this.props.updateActiePage(pageNumber);
  };

  render() {
    console.log("==>info", this.props.listSale);
    const { classes, listSale, activePage } = this.props;
    const itemInPage = 10;
    const begin = (activePage - 1) * itemInPage,
      end = begin + itemInPage;
    const productInPage = listSale.slice(begin, end);
    return (
      <div className={classes.root}>
        <div className={classes.header}>

        </div>
        <div className={classes.container}>
          <div className={classes.result}>
            <div>
              <label style={{ fontWeight: "bold" }}>SẢN PHẨM CỦA SHOP</label>
            </div>
            <div style={{ width: "100%" }}>
              <div className={classes.list}>
                {productInPage.map(product => (
                  <CardComponent
                    key={product.Ma_SanPham}
                    src={product.Image_Url}
                    name={product.TenSanPham}
                    price={product.GiaSanPham}
                    id={product.Ma_SanPham}
                  />
                ))}

              </div>

            </div>
            <div style={{ width: "100%", marginTop: 15 }}>
              <Pagination
                hideNavigation
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                firstPageText="⟨⟨"
                lastPageText="⟩⟩"
                activePage={this.props.activePage}
                itemsCountPerPage={itemInPage}
                totalItemsCount={listSale.length}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listSale: state.SalePageReducer.listSale,
    activePage: state.SalePageReducer.activePage,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListSale,
      updateActiePage,
    })
  )(SalePage);