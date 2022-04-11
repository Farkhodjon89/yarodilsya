import Layout from "../components/Layout/layout";
import {brands} from "../brands";
import {categoriesBanners} from "../categoriesBanners";
import {sliderBanners} from "../slider-banners";
import ProductSlider from "../components/ProductsSlider/product-slider";
import BrandsSlider from "../components/BrandsSlider/brands-slider";
import Categories from "../components/Categories/categories";
import BaseSlider from "../components/BaseSlider/base-slider";
import CategoriesSlider from "../components/CategoriesSlider/categories-slider";
import Banners from "../components/Banners/banners";
import {client} from "../apollo-client";
import {CATEGORIES} from "../GRAPHQL/categories";
import {PRODUCTS} from "../GRAPHQL/products";


export default function Home({categories, products, discountedProducts}) {
  console.log(products)

  return (
      <Layout categories={categories}>
        <CategoriesSlider categories={categories}/>
        <BaseSlider products={products} sliderBanners={sliderBanners}/>
        <Categories categoriesBanners={categoriesBanners} title='Поступление'/>
        <ProductSlider products={products} title='Хиты продаж'/>
        <Banners background={'linear-gradient(88.91deg, #FFE36B -14.56%, #FE5555 124.37%);'}/>
        <ProductSlider products={products} title='Новинки'/>
        <Banners background={'linear-gradient(88.73deg, #4BDBFF 0%, #B35AFF 100.51%);'}/>
        <ProductSlider products={discountedProducts} title='Скидки'/>
        <Banners background={'linear-gradient(268.89deg, #EA56AE 0.52%, #FF6161 117.37%);'}/>
        <BrandsSlider brands={brands} title='Бренды в наших магазинах'/>
      </Layout>
  )
}

export async function getStaticProps() {
  const categories = await client.query({
    query: CATEGORIES
  })

  const products = await client.query({
    query: PRODUCTS,
    variables: {
      first: 12
    }
  })
  const discountedProducts = await client.query({
    query: PRODUCTS,
    variables: {
      first: 12, onSale: true
    }
  })

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
      products: products?.data?.products?.nodes,
      discountedProducts: discountedProducts.data.products.nodes,
    }
  }
}
