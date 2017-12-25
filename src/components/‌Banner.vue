<template>
        <div id="banner"  style="">
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
              <div style="
                    padding-top: 30px;
                    padding-bottom: 30px;
                    /*left: 0px;
                    height: 248px;
                    width: 100%;*/
                   ">
                <!--<img src="./assests/" alt="">-->
                <div id="banner-content" style="color: rgba(255, 255, 255, 1);text-align: center">
                  <h9> قانون‌بان </h9>
                  <br>
                  <textSize18>سامانه رصد تکالیف قانونی زمان‌دار</textSize18>
                  <br>
                  <br>
                  <p style="font-size: 24px">
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
      return {

      }
    }
  }
</script>
<style scoped>
#banner{
  background-color: rgba(3, 169, 244, 1);
}
h1{
  font-size: 48px;
  font-weight: bold;
}
</style>
