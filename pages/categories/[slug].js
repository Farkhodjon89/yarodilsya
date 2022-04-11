import React from 'react';
import Layout from "../../components/Layout/layout";
import Breadcrumb from "../../components/Breadcrumbs/breadcrumbs";
import SectionTitle from "../../components/SectionTitle/section-title";
import {Box, Typography} from "@mui/material";
import NextLink from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import {sliderBanners} from "../../slider-banners";
import ArrowLeft from "../../public/icons/arrowLeft";
import ArrowRight from "../../public/icons/arrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import {client} from "../../apollo-client";
import {CATEGORIES} from "../../GRAPHQL/categories";
import {CATEGORY} from "../../GRAPHQL/category";
import {useRouter} from "next/router";

export default function Categories({categories, category}) {
  const matches = useMediaQuery('(max-width: 600px)');

  const router = useRouter()
  const currentCategory = categories.filter(category => category.slug === router.query.slug ? category.name : '')

  const SliderPrevArrow = (props) => (
      <button
          className="sliderPrevArrow"
          onClick={props.onClick}

      ><ArrowLeft/></button>
  );

  const SliderNextArrow = (props) => (
      <button
          className="sliderNextArrow"
          onClick={props.onClick}
      ><ArrowRight/></button>
  );

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: <SliderPrevArrow/>,
    nextArrow: <SliderNextArrow/>,
  }
  const breadcrumbs = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: currentCategory[0].name,
      slug: `/catalog/${currentCategory[0].slug}`,
    },
  ]

  return (
      <Layout categories={categories}>
        <Breadcrumb breadcrumbs={breadcrumbs}/>
        <SectionTitle title={currentCategory[0].name}/>
        <Box sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '90px'
        }}>
          <Box sx={{width: {xs: '100%', md: '25%'}}}>
            <Typography
                sx={{fontSize: '18px', fontWeight: 600, color: 'text.primary', marginBottom: '20px'}}>
              Категории
            </Typography>
            {category?.map(({id, name, slug}) => (
                <NextLink key={id} href={`/catalog/${slug}`}>
                  <a>
                    <Typography
                        sx={{
                          fontWeight: 400,
                          textTransform: 'capitalize',
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginBottom: '15px',
                          color: 'btn.main'
                        }}>
                      {name}
                    </Typography>
                  </a>
                </NextLink>
            ))}
          </Box>
          <Box sx={{width: {xs: '100%', md: '75%'}}}>
            <Box sx={{maxWidth: '1050px'}}>
              <Slider {...settings}>
                {sliderBanners.map(({id, image, mobImage}) => {
                  return (
                      <Box key={id} sx={{display: 'block', borderRadius: '8px'}}>
                        <Image alt="" src={matches ? mobImage : image} width={1050} height={388}/>
                      </Box>
                  )
                })}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Layout>
  );
};

export async function getServerSideProps({params}) {
  const categories = await client.query({
    query: CATEGORIES,
  })

  const category = await client.query({
    query: CATEGORY,
    variables: {
      id: params.slug,
    },
  })
  console.log(categories?.data?.productCategories?.nodes)

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
      category: category?.data?.productCategory.children.nodes,
    }
  }
}