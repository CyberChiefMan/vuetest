<template>
  <div id="Copywrite" class="row">
    <div class="col-md-2">
      <button class="btn " style="background-color: inherit;padding-top: 20px"><img src='src/assests/go_to_top_icon.svg' alt="up">ابتدای صفحه</button>
    </div>
    <div class="col-md-2">
      <!--just for offset-->
    </div>
    <div class="col-md-4">
      <h5>
        تمامی حقوق این وب سایت متعلق به مجموعه قانون‌بان می باشد
      </h5>
      <h6>
        © 2017 all Rights Reserved by GhanoonBaan
      </h6>

    </div>
    <div class="col-md-2"></div>
    <div class="col-md-2">
      <button class="btn-copywrite"><img src='src/assests/twitter_logo.svg' alt=""></button>
      <button class="btn-copywrite"><img src='src/assests/aparat_logo.svg' alt=""></button>
      <button class="btn-copywrite"><img src='src/assests/telegram_logo.svg' alt=""></button>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'Copywrite',
    date(){
      return {

      }
    }
  }
</script>

<style scoped>
  #Copywrite {
    background-color: rgba(33, 150, 243, 1);
    text-align: center;
    padding-top: 5px;
  }

  .btn-copywrite {
    text-align: center;
    background-color: inherit;
    border-color: transparent;
    padding: 10px;
  }
  h5 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
font-weight: 300;
  }
  h6 {
    font-size: 12px;
    font-style: normal;
    text-align: center;

  }
</style>
