<template>
  <div id="CreatJob" style="padding: 20px">
    <div class="row">
      <div class="col-md-2"></div>

      <div class=" col-md-8 " style="text-align: center;">
        <h3>ثبت تکلیف قانونی جدید</h3>
        <p>
          بسیاری از قوانین و مقررات مصوب مجلس و سایر نهادهای تصمیم گیر در ظرف زمانی مشخص طرح و تصویب می شوند. و
          طبیعتا
          برای اثرگذاری مطلوب باید در مدت مشخصی اجرایی شوند به همین دلیل است که قانونگذار برای اجرای آنها زمان
          مشخصی
          در نظر میگیرد.

        </p>
        <br>
        <div>
          <button id="btn-add-job"
            class="btn  my-2 my-sm-0 " type="submit"
          >
            ثبت تکلیف قانونی جدید
          </button>
        </div>
      </div>

      <div class="col-md-2"></div>

    </div>


  </div>

</template>

<script>
  export default{
    name: 'CreatJob',
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
    color: rgba(74, 74, 74, 1);
  }
p{
  font-size: 18px;
  color: rgba(74, 74, 74, 1);
  text-align: center;
  font-weight: 300;
}
#btn-add-job{
  top: 28px;
  left: 93px;
  height: 35px;
  width: 174px;
  background-color: rgba(41, 182, 246, 1);
  border-radius: 18px;
  color: rgba(255, 255, 255, 1);
  font-weight: 300;
}
</style>
