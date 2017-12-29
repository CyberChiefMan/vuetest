<template>
  <div id="ShortView" >
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-2">
        <h1>۱۱۱</h1>
        <h4> تکلیف قانونی ثبت شده</h4>
      </div>

      <div class="col-md-2">
        <h1>۲۲۲</h1>
        <h4>تکالیف منتظر انجام</h4>
      </div>

      <div class="col-md-2">
        <h1>۳۳۳</h1>
        <h4>تکلیف قانونی تاخیر شده</h4>
      </div>

      <div class="col-md-2">
        <h1>۴۴۴</h1>
        <h4>تکلیف قانونی انجام شده</h4>
      </div>
      <div class="col-md-2"></div>

    </div>
  </div>

</template>

<script>
  export default{
    name: 'ShortView',
    date(){
      return {

      }
    }
  }
</script>

<style scoped>

  #ShortView{
    background-color: rgba(3, 169, 244, 1)!important;
    color:rgba(255, 255, 255, 1);
    text-align: center;

  }
  h1 {
    font-size: 72px;

  }
  h4 {
    font-size: 16px;
    font-weight: 400;
  }


</style>
