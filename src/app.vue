<template>
  <div id="app">
    <div class="container ">
      <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light " style="background-color:rgba(3, 169, 244, 1);">
          <a class="navbar-brand" href="#">
            <img src="./assests/sample_logo.png" class="img-fluid" alt="Responsive image">قانون‌بان</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li>
                <h1>.</h1>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> تکالیف قانونی زمان دار</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"> قوانین زمان گذشته</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"> درباره قانون‌بان </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"> قوانین انجام شده </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"> جست و جوی قانون </a>
              </li>

            </ul>
            <form class="form-inline my-2 my-lg-0 mr-auto">

              <button
                class="btn  my-2 my-sm-0 " type="submit"
                style="
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
        </nav>

      </div>
      <div id="banner">
        <div class="row">
          <div class="col-lg-12">
            <div style="
                  top: 0px;
                  left: 0px;
                  height: 248px;
                  width: 100%;
                  background-color: rgba(3, 169, 244, 1);">
              <!--<img src="./assests/" alt="">-->
              <div id="banner-content" style="color: rgba(255, 255, 255, 1);text-align: center">
                <h1 style="font-weight: bold"> قانون‌بان </h1>
                <h3>سامانه رصد تکالیف قانونی زمان‌دار</h3>
                <p>
                  سایت قوانین زماندار درصدد است با جمع آوری مصادیق این قوانین و اعلام فرصت باقی مانده برای اجرای آنها و یا
                  احیانا زمانی که از اجرای آنها گذشته است، افکار عمومی را نسبت به اجرایی شدن این قوانین حساس کرده و زمینه
                  مطالبه اجرای آنها را ایجاد کند.
                </p>
              </div>
            </div>


          </div>

        </div>
      </div>

      <div id="creatFilter">
        <div class="row" >
          <div >
            <h2 > ایجاد فیلتر نمایش </h2>

          </div>
        </div>
        <div class="row" style="text-align: center;text-justify: auto;align-items: center;align-content: center">
            <div class="col-lg-3">
              <div class="dropdown" >
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  منبع تکلیف
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">منبع تکلیف ۱</a>
                  <a class="dropdown-item" href="#"> منبع تکلیف  ۲</a>
                  <a class="dropdown-item" href="#"> منبع تکلیف ۳</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="dropdown" >
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  منبع تکلیف
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">منبع تکلیف ۱</a>
                  <a class="dropdown-item" href="#"> منبع تکلیف  ۲</a>
                  <a class="dropdown-item" href="#"> منبع تکلیف ۳</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="dropdown" >
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  منبع تکلیف
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">منبع تکلیف ۱</a>
                  <a class="dropdown-item" href="#"> منبع تکلیف  ۲</a>
                  <a class="dropdown-item" href="#"> منبع تکلیف ۳</a>
                </div>
              </div>
            </div>

        </div>


    </div>


  </div>
  </div>
</template>

<script>
  export default{
    name: 'app',
    data(){
      return {}
    }
  }

</script>
