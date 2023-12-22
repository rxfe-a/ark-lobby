document.addEventListener("DOMContentLoaded", function() {
    function setBackgroundImage() {
      var now = new Date();
      var hours = now.getHours();

      // Define your background images for different times of the day
      var morningImage = 'image/morning.png';
      var afternoonImage = 'image/afternoon.jpg';
      var eveningImage = 'image/evening.jpg';
      var nightImage = 'image/night3.jpg';

      // Set background image based on the time of day
      var backgroundImage;
      if (hours >= 5 && hours < 12) {
        backgroundImage = morningImage;
      } else if (hours >= 12 && hours < 17) {
        backgroundImage = afternoonImage;
      } else if (hours >= 17 && hours < 20) {
        backgroundImage = eveningImage;
      } else {
        backgroundImage = nightImage;
      }

      document.body.style.backgroundImage = 'url("' + backgroundImage + '")';
    }
    setBackgroundImage();
})