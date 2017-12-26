<template>

  <div id="MapAdress">
    <div class="row" style="text-align: center;padding: 20px; ">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <span><img src="/src/assests/location_icon.svg" alt="locationIcon"></span>
        <h2> دفتر مرکزی جمع‌نویسی </h2>
        <br>
        <h4 class="disable"> تهران، خیابان جردن، گلستان ۲۳، پلاک ۵ </h4>
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

<style scoped>


  h2 {
    font-size: 36px;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
  }
#MapAdress{
  background-image:url('/src/assests/acf-google-map-field-input.png');
  background-repeat: no-repeat;
  background-size: cover;
   background-color: rgba(179, 229, 252,0);
  color: rgba(74, 74, 74, 1);
  opacity: 0.8;

}

</style>
