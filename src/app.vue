<template xmlns="http://www.w3.org/1999/html">
  <div id="app">

    <div class="container ">
      <div id="navbar" class="row " style="color:white !important;" >
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
              <a class="navbar-brand" href="#">
                <img alt="Brand" src="./assests/sample_logo.png" class="img-responsive">
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
              <ul class="nav navbar-nav navbar-right">

              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container -->
        </nav>
      </div>

      <div id="banner" style="background-color: rgba(3, 169, 244, 1);">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div style="
                  padding-top: 30px;
                  left: 0px;
                  height: 248px;
                  width: 100%;
                  background-color: rgba(3, 169, 244, 1);">
              <!--<img src="./assests/" alt="">-->
              <div id="banner-content" style="color: rgba(255, 255, 255, 1);text-align: center">
                <h1> قانون‌بان </h1>
                <small>سامانه رصد تکالیف قانونی زمان‌دار</small>

                <p>
                  سایت قوانین زماندار درصدد است با جمع آوری مصادیق این قوانین و اعلام فرصت باقی مانده برای اجرای آنها و
                  یا
                  احیانا زمانی که از اجرای آنها گذشته است، افکار عمومی را نسبت به اجرایی شدن این قوانین حساس کرده و
                  زمینه
                  مطالبه اجرای آنها را ایجاد کند.
                </p>
              </div>
            </div>


          </div>
          <div class="col-lg-3"></div>

        </div>
      </div>

      <div id="creatFilter" >
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6" style="text-align: center; color: rgba(74, 74, 74, 1);">
            <h2> ایجاد فیلتر نمایش </h2>
            <div class="row">
              <div class="col-lg-1"></div>

              <div class="col-lg-3">
                <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    منبع تکلیف
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a href="#">منبع تکلیف ۱</a></li>
                    <li><a href="#">منبع تکلیف ۲</a></li>
                    <li><a href="#">منبع تکلیف ۳</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu3"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    مجری تکلیف <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a href="#">مجری تکلیف ۱</a></li>
                    <li><a href="#">مجری تکلیف ۲</a></li>
                    <li><a href="#">مجری تکلیف ۳</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu0"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    تاریخ تصویب <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu3">
                    <li><a href="#">تاریخ تصویب ۱</a></li>
                    <li><a href="#">تاریخ تصویب ۲</a></li>
                    <li><a href="#">تاریخ تصویب ۳</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-1"></div>

            </div>

            <div>
              <h6 style="text-align: right;color: rgba(33, 150, 243, 1);;">
                *این فیلتر روی تمامی تکالیف قانونی سایت اعمال می شود
                <button class="btn btn-link" style="color: rgba(95, 95, 95, 1);">حذف فیلتر</button>
                <button class="btn btn-sucsess"
                        style="background-color: rgba(3, 169, 244, 1);
                  border-radius: 15px;color: white;">
                  اعمال فیلتر
                </button>
              </h6>

            </div>

          </div>
          <div class="col-lg-3"></div>


        </div>


      </div>

      <div id="sumery" style="background-color: rgba(3, 169, 244, 1);color:rgba(255, 255, 255, 1); text-align: center">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <h2>۱۱۱</h2>
            <h5 class="subtitle"> تکلیف قانونی ثبت شده</h5>
          </div>

          <div class="col-md-2">
            <h2>۲۲۲</h2>
            <h5 class="subtitle">تکالیف منتظر انجام</h5>
          </div>

          <div class="col-md-2">
            <h2>۳۳۳</h2>
            <h5 class="subtitle">تکلیف قانونی تاخیر شده</h5>
          </div>

          <div class="col-md-2">
            <h2>۴۴۴</h2>
            <h5 class="subtitle">تکلیف قانونی انجام شده</h5>
          </div>
          <div class="col-md-2"></div>

        </div>
      </div>

      <div id="creatJob" style="color: black;padding: 20px">
        <div class="row">
          <div class="col-md-2"></div>

          <div class=" col-md-8 " style="text-align: center;">
            <h3>ثبت تکلیف قانونی جدید</h3>
            <p>
              بسیاری از قوانین و مقررات مصوب مجلس و سایر نهادهای تصمیم گیر در ظرف زمانی مشخص طرح و تصویب می شوند. و
              طبیعتا
              برای اثرگذاری مطلوب باید در مدت مشخصی اجرایی شوند به همین دلیل است که قانونگذار برای اجرای آنها زمان
              مشخصی
              در نظر میگیرد.

            </p>
            <div>
              <button
                class="btn  my-2 my-sm-0 " type="submit"
                style="
                  top: 28px;
                  left: 93px;
                  height: 35px;
                  width: 174px;
                  background-color: rgba(41, 182, 246, 1);
                  border-radius: 18px;
color: white">
                ثبت تکلیف قانونی جدید
              </button>
            </div>
          </div>

          <div class="col-md-2"></div>

        </div>


      </div>

      <div id="contactUs" style=" background-color: black;color: white;background-image:url('/src/assests/contactus.jpg');background-repeat: no-repeat;background-size:auto; padding: 7px;">
        <div class="row">
          <div style="text-align: center">
            <h4>ارتباط با ما</h4>
            <h6>در قانون‌بان، همیشه منتظر پیشنهادات شما هستیم</h6>
          </div>

          <div class="col-md-2">
            <div style="text-align: center;padding: 20px">
              <h6><img src="./assests/customer_service_icon.svg" alt="telIcon">تلفن تماس: </h6>
              <h6> ۰۲۱ ۳۲۳۴ ۲۴۴ ۴ </h6>

              <h6><img src="./assests/mail_icon.svg" alt="telIcon">پست الکترنیک:</h6>
              <h6> Info@Jamnevisi.ir </h6>
            </div>
          </div>
          <div class="col-md-2">
            <!--just for offset-->
          </div>
          <div class="col-md-6" style="padding-top: 20px;">
            <div >

              <input type="text" placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1" class="contactUsText">
              <br>
              <br>
              <input type="tel" placeholder=" موبایل " aria-describedby="basic-addon1" class="contactUsText">
              <input type="email" placeholder="پست الکترونیک" aria-describedby="basic-addon1" class="contactUsText">
              <br>
              <br>
              <textarea name="comment" placeholder="پیغام خود را اینجا بنویسید" cols="30" rows="10" style="background-color: inherit;border-color:transparent;"></textarea>
              <br>
            </div>

            <div style="text-align: left">
              <button class="btn " style="top: 28px;
                    left: 93px;
                    background-color: rgb(41, 182, 246);
                    border-radius: 18px;
                    color: white;
">ارسال پیام
              </button>
            </div>


          </div>
          <div class="col-md-2"></div>
        </div>
      </div>

      <div id="mapAdress" style="background-image:url('/src/assests/acf-google-map-field-input.png');background-color: rgba(179, 229, 252, 1);color: black">
        <div class="row" style="text-align: center;padding: 20px;">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <span><img src="./assests/location_icon.svg" alt="locationIcon"></span>
            <h3> دفتر مرکزی جمع‌نویسی </h3>
            <h5 class="disable"> تهران، خیابان جردن، گلستان ۲۳، پلاک ۵ </h5>
          </div>
          <div class="col-md-4"></div>

        </div>
      </div>

      <div id="footer" class="footer"  style="background-color: rgba(74, 74, 74, 1);text-align:right;padding-right: 10px;">
        <div class="row">
          <div class="col-md-3">
            <h3>قانون‌بان در رسانه ها</h3>
            <hr>

            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="./assests/stock-photo-202217075.png" alt="...">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">دیجیاتو</h4>
                خلاصه ای متنی که آن خبرگزاری درباره شما نوشته است که لینک به مطلب در سایت آن هاست
              </div>
            </div>

            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="./assests/stock-photo-202217075.png" alt="...">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">تابناک</h4>
                جمع‌نویسی اولین و تنها سامانه ای است که به اصلاح و بهبود قانون اساسی اهمیت می دهد..
              </div>
            </div>

            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="./assests/stock-photo-202217075.png" alt="...">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">تویتر فارسی</h4>
                مطالب میتونه حتی کوتاه تر هم باشه اما به هر حال دو خط هست دیگه
              </div>
            </div>

          </div>

          <div class="col-md-2">
            <h3> لینک ها</h3>
            <hr>
            <ul class="">
              <lo class=""><a href="">قوانین زمان دار </a></lo>
              <lo class=""><a href="">قوانین زمان گذشته</a></lo>
              <lo class=""><a href="">درباره قانون‌بان</a></lo>
              <lo class=""><a href="">قوانین انجام شده</a></lo>
            </ul>
          </div>

          <div class="col-md-5">
            <h3>آخرین نظرات ثبت شده در قانون ها</h3>
            <hr>
            <div>
              <h6 style="text-align: right;color: rgba(41, 182, 246, 1);">دسترسی باز به اطلاعات</h6>
              <h6 style="text-align: left;color: rgba(41, 182, 246, 1);">۲۴ مهر ۱۳۹۶ </h6>
              <p>
                میتونه خلاصه ای از آخرین اصلاحیه یا کامنتی که کاربران درباره این قانون نوشتن رو اینجا نشون بده، در واقع این بخش برای ایجاد سئو و.. در فوتر گذاشته می شود
              </p>
            </div>
            <div>
              <h6 style="text-align: right;color: rgba(41, 182, 246, 1);">نام قانون در این بخش نمایش داده می شود</h6>
              <h6 style="text-align: left;color: rgba(41, 182, 246, 1);">۲۴ مهر ۱۳۹۶ </h6>
              <p>
                میتونه خلاصه ای از آخرین اصلاحیه یا کامنتی که کاربران درباره این قانون نوشتن رو اینجا نشون بده، در واقع این بخش برای ایجاد سئو و.. در فوتر گذاشته می شود              </p>
            </div>
            <div>
              <h6 style="text-align: right;color: rgba(41, 182, 246, 1);">عنوان ها ی درج شده مختلف هستند</h6>
              <h6 style="text-align: left;color: rgba(41, 182, 246, 1);">۲۴ مهر ۱۳۹۶ </h6>
              <p>
                میتونه خلاصه ای از آخرین اصلاحیه یا کامنتی که کاربران درباره این قانون نوشتن رو اینجا نشون بده، در واقع این بخش برای ایجاد سئو و.. در فوتر گذاشته می شود              </p>
            </div>
          </div>
        </div>

      </div>

      <div id="copywrite" class="row">
        <div class="col-md-2">
<h6><img src='./assests/go_to_top_icon.svg' alt="">ابتدای صفحه</h6>
        </div>
        <div class="col-md-2">
<!--just for offset-->
        </div>
<div class="col-md-5">
<h6>
  تمامی حقوق این وب سایت متعلق به مجموعه قانون‌بان می باشد
</h6>
  © 2017 all Rights Reserved by GhanoonBaan

</div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
<button class="btn-copywrite"><img src='./assests/twitter_logo.svg' alt=""></button>
<button class="btn-copywrite"><img src='./assests/aparat_logo.svg' alt=""></button>
<button class="btn-copywrite"><img src='./assests/telegram_logo.svg' alt=""></button>
        </div>
      </div>

    </div> <!--container-end-->


  </div><!--app-end-->

</template>

<script>
  export default{
    name: 'app',
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
  .contactUsText{
    background-color: inherit;
    border-color: transparent
  }
 #copywrite{
  background-color: rgba(33, 150, 243, 1);
   text-align:center;
   padding-top:5px;
  }
  .btn-copywrite{
    text-align: center;
    background-color: inherit;
    border-color: transparent;
    padding: 10px;
  }
</style>
