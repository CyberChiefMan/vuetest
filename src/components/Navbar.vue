<template>
  <nav id="Navbar" class="navbar navbar-default navbar-fixed-top navbar-light">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div>
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="src/assests/sample_logo.png">

          </a>
          <h4> قانون‌بان
            <h6> سامانه رصد قوانین زمان‌دار</h6>
          </h4>
        </div>

      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="margin-top: 10px">
        <ul class="nav navbar-nav">
          <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
          <li><a href="#" style="color: rgba(255, 255, 255, 1);">تکالیف قانونی زمان دار</a></li>
          <li><a href="#" style="color: rgba(255, 255, 255, 1);">قوانین زمان گذشته</a></li>
          <li><a href="#" style="color: rgba(255, 255, 255, 1);">درباره قانون‌بان</a></li>
          <li><a href="#" style="color: rgba(255, 255, 255, 1);">قوانین انجام شده</a></li>
          <li><a href="#" style="color: rgba(255, 255, 255, 1);">جست و جوی قانون</a></li>
        </ul>
        <button id="btn_creatNewJob" @click="" class="btn btn-default">ثبت تکلیف قانونی جدید</button>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container -->
  </nav>
</template>

<script>
  export default{
    name: 'Navbar',
    data(){
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

  nav.navbar {
    font-size: 14px;
    text-align: center;
    color: rgba(255, 255, 255, 1) !important;
    background-color: rgba(3, 169, 244, 1) !important;

  }

  #btn_creatNewJob {
    font-size: 15px;
    background-color: rgba(255, 192, 6, 1);
    border-radius: 15px;
    text-align: left;
    font-weight: 300;
    margin-top: 10px;
  }

  h4 {
    font-size: 18px;
    font-style: normal;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    padding-left: 50px;

  }

  h6 {
    font-size: 10px;
    font-style: normal;
    text-align: center;
    color: rgba(255, 255, 255, 1)
  }

  a {
    color: rgba(255, 255, 255, 1)
  }

  .navbar-brand {
    padding: 0 !important;

  }
</style>
