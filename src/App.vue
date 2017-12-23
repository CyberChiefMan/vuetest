<template xmlns="http://www.w3.org/1999/html">
  <div id="app" class="container-fluid">
    <div class="container-fluid ">
      <Navbar></Navbar>

      <Banner></Banner>

      <CreateFilter></CreateFilter>

      <Summary></Summary>

      <CreatJob></CreatJob>

      <ContactUs></ContactUs>

      <MapAdress></MapAdress>

      <Footer></Footer>

      <Copywrite></Copywrite>

    </div> <!--container-end-->


  </div><!--app-end-->

</template>

<script>
  import ContactUs from './components/ContactUs.vue'
  import Copywrite from './components/Copywrite.vue'
  import CreateFilter from './components/CreateFilter.vue'
  import CreatJob from './components/CreatJob.vue'
  import Footer from './components/Footer.vue'
  import MapAdress from './components/MapAdress.vue'
  import Navbar from './components/Navbar.vue'
  import Summary from './components/Summary.vue'
  import Banner from './components/‌Banner.vue'
  export default{
    name: 'app',
    components: {
      ContactUs,
      CreateFilter,
      Copywrite,
      CreatJob,
      Footer,
      MapAdress,
      Navbar,
      Summary,
      Banner,

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

  .p {
    color: black;
    text-align: justify;
    text-indent: 3em;
    line-height: 1.65em;
    font-family: IRANSans !important;
  }

  #btn_creatNewJob {
    align-items: flex-start;
    top: 28px;
    left: 93px;
    height: 35px;
    width: 174px;
    background-color: rgba(255, 192, 6, 1);
    border-radius: 18px;
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

  .contactUsText {
    background-color: inherit;
    border-color: transparent
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
