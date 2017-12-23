<template>
  <div id="Copywrite" class="row">
    <div class="col-md-2">
      <h6><img src='src/assests/go_to_top_icon.svg' alt="">ابتدای صفحه</h6>
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

<style>
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
</style>
