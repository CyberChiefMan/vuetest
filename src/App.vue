<template xmlns="http://www.w3.org/1999/html">
  <div id="app" class="container-fluid">
    <div class="container-fluid ">
      <Navbar></Navbar>

      <Index></Index>
<!--<router-view></router-view>-->

    </div>


  </div><!--app-end-->

</template>

<script>
  import Navbar from './components/Navbar.vue'
  import ContactUs from './components/ContactUs.vue'
  import Copywrite from './components/Copywrite.vue'
  import CreateFilter from './components/CreateFilter.vue'
  import CreatJob from './components/CreatJob.vue'
  import BottomFooter from './components/BottomFooter.vue'
  import MapAdress from './components/MapAdress.vue'
  import ShortView from './components/ShortView.vue'
  import Banner from './components/‌Banner.vue'
  import ReportPage from './components/ReportPage.vue'
  import Index from './components/Index.vue'
  export default{
    name: 'app',
    components: {
      Index,
      ContactUs,
      CreateFilter,
      Copywrite,
      CreatJob,
      BottomFooter,
      MapAdress,
      Navbar,
      ShortView,
      Banner,
      ReportPage,

    },
    data(){
      return {}
    }
  }

</script>

<style>
  #app {
    padding-top: 30px;
    color: white !important;

  }

    #navbar-top {
    /*position: absolute;*/
    /*top: 33px;*/
    /*left: 377px;*/
    /*height: 25px;*/
    /*width: 654px;*/
    font-size: 12px;
    color: white !important;
    background-color: rgba(3, 169, 244, 1);
    text-align: center;
    align-items: center;
  }



  #Copywrite {
    background-color: rgba(33, 150, 243, 1);
    text-align: center;
    padding-top: 5px;
  }

  .btn-copywrite {
    text-align: center;
    background-color: inherit;
    border-color: transparent;
    padding: 10px;
  }

</style>
