<template>

  <div id="BottomFooter" class="footer"
       style="background-color: rgba(74, 74, 74, 1);text-align:right;padding-right: 10px;">
    <div class="row">
      <div class="col-md-1"></div>

      <div class="col-md-3">
        <h3>قانون‌بان در رسانه ها</h3>
        <hr>

        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="src/assests/stock-photo-202217075.png" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h5 class="media-heading">دیجیاتو</h5>
            <h6 class="media-subtitle">
              خلاصه ای متنی که آن خبرگزاری درباره شما نوشته است که لینک به مطلب در سایت آن هاست

            </h6>
          </div>
        </div>

        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="src/assests/stock-photo-202217075.png" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h5 class="media-heading">تابناک</h5>
            <h6 class="media-subtitle">
              جمع‌نویسی اولین و تنها سامانه ای است که به اصلاح و بهبود قانون اساسی اهمیت می دهد..
            </h6>
          </div>
        </div>

        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="src/assests/stock-photo-202217075.png" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h5 class="media-heading">تویتر فارسی</h5>
            <h6 class="media-subtitle">
              مطالب میتونه حتی کوتاه تر هم باشه اما به هر حال دو خط هست دیگه

            </h6>
          </div>
        </div>

      </div>

      <div class="col-md-2">
        <h3> لینک ها</h3>
        <hr>
        <ul class="" style="text-align: right ;color: rgba(255, 255, 255, 1);">
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
          <div>
            <h5 style="text-align: right;font-weight: bold;">دسترسی باز به اطلاعات
            </h5>

            <h5 style="text-align: left;">۲۴ مهر ۱۳۹۶ </h5>
          </div>
          <p>
            میتونه خلاصه ای از آخرین اصلاحیه یا کامنتی که کاربران درباره این قانون نوشتن رو اینجا نشون بده، در واقع
            این بخش برای ایجاد سئو و.. در فوتر گذاشته می شود
          </p>

        </div>
        <div>
          <h5 style="text-align: right;font-weight: bold;">نام قانون در این بخش نمایش داده می شود</h5>
          <h5 style="text-align: left;">۲۴ مهر ۱۳۹۶ </h5>
          <p>
            میتونه خلاصه ای از آخرین اصلاحیه یا کامنتی که کاربران درباره این قانون نوشتن رو اینجا نشون بده، در واقع
            این بخش برای ایجاد سئو و.. در فوتر گذاشته می شود </p>
        </div>
        <div>
          <h5 style="text-align: right;font-weight: bold;">عنوان ها ی درج شده مختلف هستند</h5>
          <h5 style="text-align: left;">۲۴ مهر ۱۳۹۶ </h5>
          <p>
            میتونه خلاصه ای از آخرین اصلاحیه یا کامنتی که کاربران درباره این قانون نوشتن رو اینجا نشون بده، در واقع
            این بخش برای ایجاد سئو و.. در فوتر گذاشته می شود </p>
        </div>
      </div>

      <div class="col-md-1"></div>

    </div>

  </div>

</template>

<script>
  export default{
    name: 'BottomFooter',
    date(){
      return {

      }
    }
  }
</script>
<style scoped>
  #BottomFooter{
    padding-top: 15px;
  }

    h3 {
    font-size: 24px;
      font-weight: 300;
  }



   h6 {
     font-size: 12px;
     color: rgba(255, 255, 255, 1);
     text-align: right;
     font-weight: 300;
  }
   p {
     font-size: 12px;
     color: rgba(255, 255, 255, 1);
     text-align: right;
     font-weight: 300;
  }
    h5 {
      font-size: 14px;
      color: rgba(41, 182, 246, 1);
      text-align: right;
      font-weight: 300;

    }
lo{
  font-size: 15px;
  color: rgba(255, 255, 255, 1) !important;
  text-align: right;
  line-height: 45px;
}

</style>
