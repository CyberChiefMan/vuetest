<template>
  <div id="CreateFilter">
    <div class="row" style="text-align: center">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <h3> ایجاد فیلتر نمایش </h3>
        <br>
        <br>
        <div class="row">

          <div class="col-lg-4">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                منبع تکلیف
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="#">منبع تکلیف ۱</a></li>
                <li><a href="#">منبع تکلیف ۲</a></li>
                <li><a href="#">منبع تکلیف ۳</a></li>
              </ul>
            </div>
          </div>


          <div class="col-lg-4">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu3"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                مجری تکلیف <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="#">مجری تکلیف ۱</a></li>
                <li><a href="#">مجری تکلیف ۲</a></li>
                <li><a href="#">مجری تکلیف ۳</a></li>
              </ul>
            </div>
          </div>


          <div class="col-lg-4">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu0"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                تاریخ تصویب <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu3">
                <li><a href="#">تاریخ تصویب ۱</a></li>
                <li><a href="#">تاریخ تصویب ۲</a></li>
                <li><a href="#">تاریخ تصویب ۳</a></li>
              </ul>
            </div>
          </div>


        </div>

        <div>
          <h6>
            *این فیلتر روی تمامی تکالیف قانونی سایت اعمال می شود
            <button id="btn-remove-filter" class="btn btn-link">حذف فیلتر</button>
            <button id="btn-add-filter" class="btn btn-sucsess"
            >
              اعمال فیلتر
            </button>
          </h6>

        </div>

      </div>
      <div class="col-lg-3"></div>


    </div>


  </div>
</template>

<script>
  export default{
    name: 'CreateFilter',
    date(){
      return {}
    }
  }
</script>

<style scoped>
  #CreateFilter{
    padding-bottom: 20px;
    padding-top: 20px;

  }

  h3 {
    font-size: 30px;
    text-align: center;
    color: rgba(74, 74, 74, 1);
  }

  h6 {
    font-size: 13px;
    text-align: right;
    color: rgba(33, 150, 243, 1);
    font-weight: 400;
    padding-right: 50px;
  }

  #btn-add-filter {
    font-size: 13px;
    font-style: normal;
    text-align: center;
    font-weight: 300;
    background-color: rgba(3, 169, 244, 1);
    color: rgba(255, 255, 255, 1);
    border-radius: 15px;

  }

  #btn-remove-filter {
    font-size: 13px;
    font-style: normal;
    text-align: center;
    font-weight: 300;
    color: rgba(95, 95, 95, 1);
    border-radius: 15px;
  }


</style>
