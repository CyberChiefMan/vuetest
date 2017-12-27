<template>
  <div id="Copywrite" class="row">

      <div class="col-md-2" style="padding-top: 20px">
        <a href=""  style="display:inline;color: inherit;text-decoration: none;padding-top: 15px;">
          <img src="/src/assests/go_to_top_icon.svg">
ابتدای صفحه
        </a>

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
  }

  .btn-copywrite {
    text-align: center;
    background-color: inherit;
    border-color: transparent;
    padding: 10px;
  }
  h5 {
    font-size: 13px;
    font-style: normal;
    text-align: center;
font-weight: 300;
  }
  h6 {
    font-size: 12px;
    font-style: normal;
    text-align: center;
  }
  .row{
    margin: 0px;

  }
  /*.back-to-top {*/
    /*background: none;*/
    /*margin: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*width: 70px;*/
    /*height: 70px;*/
    /*z-index: 100;*/
    /*display: none;*/
    /*text-decoration: none;*/
    /*color: inherit;*/
    /*background-color: inherit;*/

  /*}*/



  /*.back-to-top i {*/

    /*font-size: 60px;*/

  /*}*/
</style>
