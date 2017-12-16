<template xmlns="http://www.w3.org/1999/html">
  <div id="app">

    <div class="container " >

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
                <h1 style="font-family: 'IRANSans';text-align: center;"> قانون‌بان </h1>
                <h3>سامانه رصد تکالیف قانونی زمان‌دار</h3>
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

        </div>
      </div>

      <div id="creatFilter">
        <div class="row">
          <div>
            <h2> ایجاد فیلتر نمایش </h2>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                منبع تکلیف
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">منبع تکلیف ۱</a>
                <a class="dropdown-item" href="#"> منبع تکلیف ۲</a>
                <a class="dropdown-item" href="#"> منبع تکلیف ۳</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                منبع تکلیف
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">منبع تکلیف ۱</a>
                <a class="dropdown-item" href="#"> منبع تکلیف ۲</a>
                <a class="dropdown-item" href="#"> منبع تکلیف ۳</a>
              </div>
            </div>
          </div>

          <div class="btn-group" role="group" aria-label="...">

            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                Dropdown
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Dropdown link</a></li>
                <li><a href="#">Dropdown link</a></li>
              </ul>
            </div>
          </div>

          <div class="container">
            <div class="row ">
              <div>
                <h4> این فیلتر روی تمامی تکالیف قانونی سایت اعمال می شود </h4>
                <button class="btn btn-link">حذف فیلتر</button>
                <button class="btn btn-sucsess">اعمال فیلتر</button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div id="sumery" style="background-color: rgba(3, 169, 244, 1);color:rgba(255, 255, 255, 1);">
        <div class="row">

          <div class="col-md-2">
            <h4>111</h4>
            <h5 class="subtitle"> تکلیف قانونی ثبت شده</h5>
          </div>

          <div class="col-md-2">
            <h4>222</h4>
            <h5 class="subtitle">تکالیف منتظر انجام</h5>
          </div>

          <div class="col-md-2">
            <h4>333</h4>
            <h5 class="subtitle">تکلیف قانونی تاخیر شده</h5>
          </div>

          <div class="col-md-2">
            <h4>444</h4>
            <h5 class="subtitle">تکلیف قانونی انجام شده</h5>
          </div>

        </div>
      </div>

      <div id="creatJob" >
        <div class="row" >
          <div class="col-offset-2 col-md-8 " style="text-align: center;">
            <h3>ثبت تکلیف قانونی جدید</h3>
            <p>
              بسیاری از قوانین و مقررات مصوب مجلس و سایر نهادهای تصمیم گیر در ظرف زمانی مشخص طرح و تصویب می شوند. و طبیعتا
              برای اثرگذاری مطلوب باید در مدت مشخصی اجرایی شوند به همین دلیل است که قانونگذار برای اجرای آنها زمان مشخصی
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
                  border-radius: 18px;">
                ثبت تکلیف قانونی جدید
              </button>
            </div>
          </div>

        </div>



      </div>

      <div id="contactUs" style="background-color: black;color: white">
        <div class="row">

          <div class="row">
            <h3>ارتباط با ما</h3>
            <br/>
            <h5>در قانون‌بان، همیشه منتظر پیشنهادات شما هستیم</h5>
          </div>
          <hr>

          <div class="row ">
            <div class="row">
              <div class="col-md-2" style="display: inline-block;vertical-align: middle;float: none;">
                <h5><img src="./assests/customer_service_icon.svg" alt="telIcon">تلفن تماس: </h5>
                <h6> ۰۲۱ ۳۲۳۴ ۲۴۴ ۴ </h6>

                <h5><img src="./assests/mail_icon.svg" alt="telIcon">پست الکترنیک: </h5>
                <h6> Info@Jamnevisi.ir </h6>

              </div>

              <div class="col-md-2">
                <input type="text" placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1">
                <input type="tel" placeholder=" موبایل " aria-describedby="basic-addon1">
              </div>

              <div class="col-md-2">
                <input type="email" placeholder="پست الکترونیک" aria-describedby="basic-addon1">
              </div>

            </div>


            <div class="row">
              <div class="row">
                <div>
                  <textarea name="comment" placeholder="پیغام خود را اینجا بنویسید" cols="30" rows="10"></textarea>
                </div>

              </div>

              <div class="row">
                <div>
                  <button class="btn " style="top: 28px;
                    left: 93px;
                    height: 35px;
                    width: 174px;
                    background-color: rgb(41, 182, 246);
                    border-radius: 18px;color: white;">ارسال پیام
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div id="mapAdress" style="background-color: rgba(179, 229, 252, 1);color: black">
        <div class="row">
          <div>
            <img src="./assests/acf-google-map-field-input.png" alt="mapAdress">
            <div>
              <span><img src="./assests/location_icon.svg" alt="locationIcon"></span>
              <h3> دفتر مرکزی جمع‌نویسی </h3>
              <h5 class="disable"> تهران، خیابان جردن، گلستان ۲۳، پلاک ۵ </h5>

            </div>
          </div>

        </div>
      </div>

      <div class="footer" id="footer">
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
                جمع‌نویسی اولین و تنها سامانه ای است که به اصلاح و بهبود قانون اساسی اهمیت می دهد..              </div>
            </div>

            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="./assests/stock-photo-202217075.png" alt="...">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">تویتر فارسی</h4>
                مطالب میتونه حتی کوتاه تر هم باشه اما به هر حال دو خط هست دیگه              </div>
            </div>

          </div>

          <div class="col-md-2">
<h3> لینک ها</h3>
            <hr>
            <ul class="">
              <lo class=""><a href="">قوانین زمان دار </a> </lo>
              <lo class=""><a href="">قوانین زمان گذشته</a></lo>
              <lo class=""><a href="">درباره قانون‌بان</a> </lo>
              <lo class=""><a href="">قوانین انجام شده</a></lo>
            </ul>
          </div>

          <div class="col-md-5">
<h3>آخرین نظرات ثبت شده در قانون ها</h3>
            <hr>

          </div>
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
  .p {
    color: black;
    text-align: justify;
    text-indent: 3em;
    line-height: 1.65em;
    font-family: IRANSans !important;
  }

</style>
