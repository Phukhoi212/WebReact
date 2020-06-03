import React from "react";
import { withStyles } from "@material-ui/core";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { getListProduct, getListProductBySearch, updateActiePage } from "./actions";
import Sales from "../Sales";
import CardComponent from "../../components/Card";
import SlideShow from "../../components/Slide";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pagination from "react-js-pagination";


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
    marginBottom: 25
  },
  slide: {
    width: "100%",
    height: 300,
    marginBottom: "2rem"
  },
  sales: {
    width: "100%",
    height: 350,
    marginBottom: "1rem"
  },
  footer: {
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 2,
  },
  result: {
    width: "97%",
    height: "auto",
    margin: "0 auto",
    paddingTop: 15,
    paddingBottom: 15
  }
})


class Home extends React.Component {
  state = {
    keywordSearch: "",
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getListProduct();
  }

  onChangeKeywordSearch = (event) => {
    this.setState({
      keywordSearch: event.target.value
    })
  }

  onClickSearchIcon = () => {
    this.props.getListProductBySearch(this.state.keywordSearch)
  }

  handlePageChange = pageNumber => {
    this.props.updateActiePage(pageNumber);
  };

  render() {
    const { classes, listProduct, searchResult, activePage } = this.props;
    const begin = (activePage - 1) * 15,
      end = begin + 15;
    const productInPage = listProduct.slice(begin, end);
    console.log("---->", listProduct.length)
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Header search={this.state.keywordSearch} onChange={this.onChangeKeywordSearch} onClick={this.onClickSearchIcon} />
        </div>
        <div className={classes.slide}>
          <SlideShow />
        </div>
        <div className={classes.sales}>
          <Sales />
        </div>
        <div className={classes.container}>
          {/* <div className={classes.left}>
            <LeftPanel />
          </div> */}
          {/* <div className={classes.right}>
            <RightPanel />
          </div> */}
          <div className={classes.result}>
            <div className={classes.list}>
              {searchResult.length === 0 ? productInPage.map(product => (
                <CardComponent
                  key={product.Ma_SanPham}
                  src={product.Image_Url}
                  name={product.TenSanPham}
                  price={product.GiaSanPham}
                  id={product.Ma_SanPham}
                />
              )) :
                searchResult.map(product => (
                  <CardComponent
                    key={product.Ma_SanPham}
                    src={product.Image_Url}
                    name={product.TenSanPham}
                    price={product.GiaSanPham}
                    id={product.Ma_SanPham}
                  />
                ))}
            </div>
            <Pagination
              hideNavigation
              hideDisabled
              itemClass="page-item"
              linkClass="page-link"
              firstPageText="⟨⟨"
              lastPageText="⟩⟩"
              activePage={this.props.activePage}
              itemsCountPerPage={15}
              totalItemsCount={listProduct.length}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listProduct: state.HomeReducer.listProduct,
    searchResult: state.HomeReducer.searchResult,
    activePage: state.HomeReducer.activePage,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListProduct,
      getListProductBySearch,
      updateActiePage
    })
  )(Home);