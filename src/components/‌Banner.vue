<template>
  <div id="banner">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="container">
          <!--<img src="./assests/" alt="">-->
          <div id="banner-content">
            <h2> قانون‌بان </h2>
            <h4>سامانه رصد تکالیف قانونی زمان‌دار</h4>
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
</template>

<script>
  export default{
    name: 'Banner',
    date(){
      return {}
    }
  }
</script>
<style scoped>

  #banner {
    background-color: rgba(3, 169, 244, 1);
  }

  h2 {
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-size: 24px;
    font-style: normal;
    text-align: center;
    font-weight: 300;
    line-height: normal;

  }

  h4 {
    font-size: 18px;
    font-style: normal;
    text-align: center;
    font-weight: 300;
    line-height: normal;
  }

  .container {
    padding-top: 30px;
    padding-bottom: 15px;
    /*left: 0px;
    height: 248px;*/
    width: 100%;
    height: 100%;
    text-align: center
  }
</style>
