import React from "react";
import { withStyles, Button } from "@material-ui/core";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { getListProduct, getListProductBySearch, updateActiePage, getListProductSale } from "./actions";
import { getListCategory } from "../../containers/Manager/Category/actions";
import Sales from "../Sales";
import CardComponent from "../../components/Card";
import CategoryCard from "../../components/CategoryCard";
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
    height: 370,
    marginBottom: "1rem"
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


class Home extends React.Component {
  state = {
    keywordSearch: "",
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getListProduct();
    this.props.getListCategory();
    this.props.getListProductSale();
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
    const { classes, listProduct, searchResult, activePage, listCategory, listSales, listBuyProduct } = this.props;
    const begin = (activePage - 1) * 10,
      end = begin + 10;
    const productInPage = searchResult.length !== 0 ? searchResult.slice(begin, end) : listProduct.slice(begin, end);
    console.log("home", listBuyProduct)
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Header
            search={this.state.keywordSearch}
            onChange={this.onChangeKeywordSearch}
            onClick={this.onClickSearchIcon}
          />
        </div>
        {searchResult.length !== 0 ? "" :
          <div className={classes.slide}>
            <SlideShow />
          </div>
        }

        {searchResult.length !== 0 ? "" :
          <div className={classes.sales}>
            <Sales list={listSales} />
          </div>
        }

        {searchResult.length !== 0 ? "" :
          <div className={classes.category}>
            <div style={{ width: "100%", height: 40 }}>
              <label style={{ fontWeight: "bold", padding: 15 }}>DANH MỤC</label>
            </div>
            <div style={{ width: "100%", display: "flex" }}>
              {listCategory.map(cate => (
                <CategoryCard
                  key={cate.id}
                  name={cate.TenLoaiHang}
                  id={cate.id}
                />
              ))}
            </div>
          </div>
        }

        <div className={classes.container}>
          <div className={classes.result}>
            <div>
              <label style={{ fontWeight: "bold" }}>
                {searchResult.length === 0 ? "SẢN PHẨM NỔI BẬT" : `KẾT QUẢ TÌM KIẾM: ${searchResult.length} Sản phẩm`}
                {searchResult.length !== 0 ? <a style={{ paddingLeft: 20 }} href='/home'>{`<<  Trang Chủ`}</a> : ""}
              </label>
            </div>
            <div style={{ width: "100%" }}>
              <div className={classes.list}>
                {searchResult.length === 0 ? productInPage.map(product => (
                  <CardComponent
                    key={product.Ma_SanPham}
                    src={product.Image_Url}
                    name={product.TenSanPham}
                    price={product.GiaSanPham}
                    id={product.Ma_SanPham}
                    style={{ width: "14rem !important" }}
                  />
                )) :
                  productInPage.map(product => (
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
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={searchResult.length !== 0 ? searchResult.length : listProduct.length}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    listProduct: state.HomeReducer.listProduct,
    searchResult: state.HomeReducer.searchResult,
    activePage: state.HomeReducer.activePage,
    listCategory: state.Admin_CategoryReducer.listCategory,
    listSales: state.HomeReducer.listSales,
    listBuyProduct: state.DetailReducer.listBuyProduct,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListProduct,
      getListProductBySearch,
      updateActiePage,
      getListCategory,
      getListProductSale,
    })
  )(Home);