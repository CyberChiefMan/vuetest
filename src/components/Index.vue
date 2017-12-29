<template xmlns="http://www.w3.org/1999/html">
  <div id="index" class="container-fluid">
    <div class="container-fluid ">
      <!--<Navbar></Navbar>-->

      <Banner></Banner>

      <CreateFilter></CreateFilter>

      <ShortView></ShortView>

      <CreatJob></CreatJob>

      <ContactUs></ContactUs>

      <MapAdress></MapAdress>

      <BottomFooter></BottomFooter>

      <Copywrite></Copywrite>
      <!--<router-view></router-view>-->
    </div> <!--container-end-->


  </div><!--app-end-->

</template>

<script>
  import ContactUs from './ContactUs.vue'
  import Copywrite from './Copywrite.vue'
  import CreateFilter from './CreateFilter.vue'
  import CreatJob from './CreatJob.vue'
  import BottomFooter from './BottomFooter.vue'
  import MapAdress from './MapAdress.vue'
  import Navbar from './Navbar.vue'
  import ShortView from './ShortView.vue'
  import Banner from './‌Banner.vue'
  import ReportPage from './ReportPage.vue'
  export default{
    name: 'index',
    components: {
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
  #index {
    padding-top: 30px;
    color: white !important;

  }

  /*.p {*/
  /*color: black;*/
  /*text-align: justify;*/
  /*text-indent: 3em;*/
  /*line-height: 1.65em;*/
  /*font-family: IRANSans !important;*/
  /*}*/


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
