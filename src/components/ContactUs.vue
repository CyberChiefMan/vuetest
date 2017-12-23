<template>

  <div id="ContactUs"
       style=" background-color: black;color: white;background-image:url('/src/assests/contactus.jpg');background-repeat: no-repeat;background-size:auto; padding: 7px;">
    <div class="row">
      <div style="text-align: center">
        <h4>ارتباط با ما</h4>
        <h6>در قانون‌بان، همیشه منتظر پیشنهادات شما هستیم</h6>
      </div>

      <div class="col-md-2">
        <div style="text-align: center;padding: 20px">
          <h6><img src='/src/assests/customer_service_icon.svg' alt="telIcon">تلفن تماس: </h6>
          <h6> ۰۲۱ ۳۲۳۴ ۲۴۴ ۴ </h6>

          <h6><img src='/src/assests/mail_icon.svg' alt="telIcon">پست الکترنیک:</h6>
          <h6> Info@Jamnevisi.ir </h6>
        </div>
      </div>
      <div class="col-md-2">
        <!--just for offset-->
      </div>
      <div class="col-md-6" style="padding-top: 20px;">
        <div>

          <input type="text" placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1" class="contactUsText">
          <br>
          <br>
          <input type="tel" placeholder=" موبایل " aria-describedby="basic-addon1" class="contactUsText">
          <input type="email" placeholder="پست الکترونیک" aria-describedby="basic-addon1" class="contactUsText">
          <br>
          <br>
          <textarea name="comment" placeholder="پیغام خود را اینجا بنویسید" cols="30" rows="10"
                    style="background-color: inherit;border-color:transparent;"></textarea>
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


</template>

<script>
  export default{
    name: 'ContactUs',
    date(){
      return {

      }
    }
  }
</script>
<style>

</style>
