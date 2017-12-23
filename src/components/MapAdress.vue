<template>

  <div id="MapAdress"
       style="background-image:url('/src/assests/acf-google-map-field-input.png');background-color: rgba(179, 229, 252, 1);color: black">
    <div class="row" style="text-align: center;padding: 20px;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <span><img src="/src/assests/location_icon.svg" alt="locationIcon"></span>
        <h3> دفتر مرکزی جمع‌نویسی </h3>
        <h5 class="disable"> تهران، خیابان جردن، گلستان ۲۳، پلاک ۵ </h5>
      </div>
      <div class="col-md-4"></div>

    </div>
  </div>

</template>

<script>
  export default{
    name: 'MapAdress',
    date(){
      return {

      }
    }
  }
</script>
