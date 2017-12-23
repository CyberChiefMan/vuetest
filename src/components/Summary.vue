<template>
  <div id="Summary" style="background-color: rgba(3, 169, 244, 1);color:rgba(255, 255, 255, 1); text-align: center">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-2">
        <h2>۱۱۱</h2>
        <h5 class="subtitle"> تکلیف قانونی ثبت شده</h5>
      </div>

      <div class="col-md-2">
        <h2>۲۲۲</h2>
        <h5 class="subtitle">تکالیف منتظر انجام</h5>
      </div>

      <div class="col-md-2">
        <h2>۳۳۳</h2>
        <h5 class="subtitle">تکلیف قانونی تاخیر شده</h5>
      </div>

      <div class="col-md-2">
        <h2>۴۴۴</h2>
        <h5 class="subtitle">تکلیف قانونی انجام شده</h5>
      </div>
      <div class="col-md-2"></div>

    </div>
  </div>

</template>

<script>
  export default{
    name: 'Summary',
    date(){
      return {

      }
    }
  }
</script>
