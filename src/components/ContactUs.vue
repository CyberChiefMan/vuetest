<template>

  <div id="ContactUs">
    <div class="row">
      <div style="text-align: center">
        <h3>ارتباط با ما</h3>
        <h4>در قانون‌بان، همیشه منتظر پیشنهادات شما هستیم</h4>
        <br>
      </div>

      <div class="col-md-3">
        <div style="text-align: center;padding: 20px">
          <h4><img src='/src/assests/customer_service_icon.svg' alt="telIcon" style="padding-left: 15px">تلفن تماس: </h4>
          <h6>   ۳۲۳۴ ۲۴۴ ۰۲۱۴</h6>

          <h4><img src='/src/assests/mail_icon.svg' alt="telIcon"style="padding-left: 15px">پست الکترنیک:</h4>
          <h6> Info@Jamnevisi.ir </h6>
        </div>
      </div>
      <div class="col-md-1">
        <!--just for offset-->
      </div>
      <div class="col-md-6" style="padding-top: 20px;">
        <div>
<div >
  <input type="text" placeholder="نام و نام خانوادگی" aria-describedby="basic-addon1" class="contactUsText">

</div>
          <br>
          <br>
          <input type="tel" placeholder=" موبایل " aria-describedby="basic-addon1" class="contactUsText">
          <input type="email" placeholder="پست الکترونیک" aria-describedby="basic-addon1" class="contactUsText">
          <br>
          <br>
          <textarea name="comment" placeholder="پیام خود را اینجا بنویسید" cols="30" rows="3"
                    style="background-color: inherit;border-color:transparent;"></textarea>
          <br>
        </div>

        <div style="text-align: left">
          <button id="btn-send-message" class="btn ">ارسال پیام
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
<style scoped>
  h3 {
    font-size: 30px;
    text-align: center;
    color: rgba(255, 255, 255, 1);

  }
  h4 {
         font-size: 18px;
         color: rgba(255, 255, 255, 1);
         text-align: center;
    font-weight: 300;

  } h6 {
         font-size: 14px;
         color: rgba(255, 255, 255, 1);
         text-align: center;
    font-weight: 300;

  }
#ContactUs{
  background-color: black;
  background-color: rgba(0, 0, 0, 1);
  background-image:url('/src/assests/contactus.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  padding: 7px;
  padding-bottom: 18px;
}
  input{
    border-bottom: solid 2px rgba(95, 95, 95, 1)!important;
  }
  #btn-send-message{
    top: 28px;
    left: 93px;
    background-color: rgb(41, 182, 246);
    border-radius: 18px;
    color: white;
    font-weight: 300;
  }
  .contactUsText {
    background-color: inherit;
    border-color: transparent;

  }
  </style>
