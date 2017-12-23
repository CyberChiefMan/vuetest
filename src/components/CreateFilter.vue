<template>
  <div id="CreateFilter">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6" style="text-align: center; color: rgba(74, 74, 74, 1);">
        <h2> ایجاد فیلتر نمایش </h2>
        <div class="row">
          <div class="col-lg-1"></div>

          <div class="col-lg-3">
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
          <div class="col-lg-3">
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
          <div class="col-lg-3">
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

          <div class="col-lg-1"></div>

        </div>

        <div>
          <h6 style="text-align: right;color: rgba(33, 150, 243, 1);;">
            *این فیلتر روی تمامی تکالیف قانونی سایت اعمال می شود
            <button class="btn btn-link" style="color: rgba(95, 95, 95, 1);">حذف فیلتر</button>
            <button class="btn btn-sucsess"
                    style="background-color: rgba(3, 169, 244, 1);
                  border-radius: 15px;color: white;">
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
      return {

      }
    }
  }
</script>
