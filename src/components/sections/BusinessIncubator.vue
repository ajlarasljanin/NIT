<template>
  <div class="background">
  <div
    style="margin: 70px 0% 100px 0%; box-shadow: 0px 1px 3px rgb( 0 0 0 / 5%); padding:50px 50px"
    id="business-incubator"
  >

  <div class="info" style="width:100%;">
    <h1 class="title">Business Incubator</h1>
  </div>

    <div style="margin: 40px auto 0px auto;"
  >
      <swiper
        :pagination= "paginationOptions"
         :navigation="true"
        class="swiper-container"
         :grabCursor="true"
        :mousewheel="true"
        :centeredSlides="true"
        :loop="loop"
        :breakpoints="breakpoints"
        :autoplay="autoplay"
        :effect="'cube'"
        :slides-per-view="slidesPerView"
       >
        <swiper-slide
          v-for="(image,index) in images"
          :key="image"
          :virtualIndex="index"
        >
          <img :src="image[0]" class="imageHover"/>
        </swiper-slide>
      </swiper>
      <!-- <div class=""> -->
      </div>
  </div>
  </div>
</template>
<script>

import SwiperCore, { Scrollbar, A11y, Virtual, Pagination, Navigation, Autoplay, Mousewheel } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "swiper/components/pagination/pagination.min.css"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use([Scrollbar, A11y, Virtual, Pagination, Navigation, Autoplay,Mousewheel])


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      paginationOptions: {
        clickable: true,
        type: 'bullets',
      },
      grabCursor: true,
      loop: true,
      slidesPerView: 5,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      breakpoints: {
        100: {
          slidesPerView: 1,
          spaceBetween: 0
        },
         580: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    800: {
      slidesPerView: 3,
    },
    1050: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
      },
      images: [
        [require("../../assets/business-incubator-images2/bausharp - Copy.png")],
        [require("../../assets/business-incubator-images2/ikresoft.jpg")],
        [require("../../assets/business-incubator-images2/klinika - Copy.png")],
        [require("../../assets/business-incubator-images2/logo1.png"),"skayon.agency"],
        [require("../../assets/business-incubator-images2/nit.png")],
        [require("../../assets/business-incubator-images2/REZ1.png")],
        [require("../../assets/business-incubator-images2/unitedWeStand.png")],
        [require("../../assets/business-incubator-images2/Untitled-31.png")],


      ],
    };
  },
  methods: {
  },

};
</script>
<style scoped>
.background {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../../assets/urban-buildings-TKX45BE.jpg);
    background-size: cover; 
    background-position-y: 0rem;
    overflow: hidden;
    background-attachment: fixed;
}

.imageHover {
  cursor: pointer;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 80%);
}

  .swiper-container {
    top: 10px;
    padding: 15px;
    overflow: visible;
  }
  

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
  }

  .title {
    color: white;
    text-align: center;
    margin-bottom:15px;
  }

  @media screen and (max-width:500px) {
    .imageHover {
      width: 50%;
    }
  } 
  </style>
