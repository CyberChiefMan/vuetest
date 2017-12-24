<template>
  <div id="Navbar" class="row " style="color:white !important;">
    <!--        <nav class="navbar navbar-expand-lg navbar-light  navbar-fixed-top" style="background-color:rgba(3, 169, 244, 1);padding-bottom: 30px;">
              <a class="navbar-brand" href="#">
                <img src="./assests/sample_logo.png" class="img-fluid" alt="Responsive image">قانون‌بان</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">

                  <lo class="nav-item">
                    <a class="nav-link" href="#"> تکالیف قانونی زمان دار</a>
                  </lo>

                  <lo class="nav-item">
                    <a class="nav-link" href="#"> قوانین زمان گذشته</a>
                  </lo>

                  <lo class="nav-item">
                    <a class="nav-link" href="#"> درباره قانون‌بان </a>
                  </lo>

                  <lo class="nav-item">
                    <button class="nav-link" href="#"> قوانین انجام شده </button>
                  </lo>

                  <lo class="nav-item">
                    <a class="nav-link" href="#"> جست و جوی قانون </a>
                  </lo>

                </ul>
                <form class="form-inline my-2 my-lg-0 mr-auto">

                  <button
                    class="btn  my-2 my-sm-0 " type="submit"
                    style="
                    align-items: flex-start;
                      top: 28px;
                      left: 93px;
                      height: 35px;
                      width: 174px;
                      background-color: rgba(255, 192, 6, 1);
                      border-radius: 18px;">
                    ثبت تکلیف قانونی جدید
                  </button>
                </form>
              </div>
            </nav>-->
    <nav class="navbar navbar-default navbar-fixed-top navbar-light" id="navbar-top">
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
          <a class="navbar-brand" href="#" style="">
            <img alt="Brand" src="src/assests/sample_logo.png" >
            <h5> قانون‌بان
              <br>
              <small> سامانه رصد قوانین زمان‌دار</small>
            </h5>
          </a>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
            <li><a href="#">تکالیف قانونی زمان دار</a></li>
            <li><a href="#">قوانین زمان گذشته</a></li>
            <li><a href="#">درباره قانون‌بان</a></li>
            <li><a href="#">قوانین انجام شده</a></li>
            <li><a href="#">جست و جوی قانون</a></li>

          </ul>
          <form class="navbar-form navbar-left">
            <button id="btn_creatNewJob" type="submit" class="btn btn-default">ثبت تکلیف قانونی جدید</button>
          </form>

        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>
  </div>

</template>

<script>
  export default{
    name: 'Navbar',
    date(){
      return {

      }
    }
  }
</script>
