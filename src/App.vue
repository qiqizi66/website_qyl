<template>
  <div id="app" class="app" ref="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {},
};
</script>

<style>
/* ::-webkit-scrollbar {
    display: none;
    scrollbar-width: none !important;
  } */

* {
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 1024px) {
  .swiper-pagination .swiper-pagination-bullet {
    width: 20px !important;
    height: 20px !important;
    display: inline-block;
    border-radius: 100%;
    background: #e0f2d3 !important;
    opacity: 1 !important;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: #9dc780 !important;
  }
}

@media (max-width: 1024px) {
  .swiper-pagination{
    text-align: left !important;
    margin-left: 77px;
  }
  .swiper-pagination .swiper-pagination-bullet {
    width: 51px !important;
    height: 51px !important;
    margin: 0 25px !important;
    display: inline-block;
    border-radius: 100%;
    background: #e0f2d3 !important;
    opacity: 1 !important;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: #9dc780 !important;
  }
}

</style>