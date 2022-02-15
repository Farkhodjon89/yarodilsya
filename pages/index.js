import Layout from "../components/Layout/layout";
import {products} from "../products";
import {brands} from "../brands";
import {categoriesBanners} from "../categoriesBanners";
import {sliderBanners} from "../slider-banners";
import ProductSlider from "../components/ProductsSlider/product-slider";
import BrandsSlider from "../components/BrandsSlider/brands-slider";
import Categories from "../components/Categories/categories";
import BaseSlider from "../components/BaseSlider/base-slider";


export default function Home() {
  return (
    <Layout>
      <BaseSlider products={products} sliderBanners={sliderBanners}/>
      <Categories categoriesBanners={categoriesBanners} title='Поступление'/>
      <ProductSlider products={products} title='Хиты продаж'/>
      <ProductSlider products={products} title='Новинки'/>
      <ProductSlider products={products} title='Скидки'/>
      <BrandsSlider brands={brands} title='Бренды в наших магазинах'/>
    </Layout>
  )
}
