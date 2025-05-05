const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach((slider, index) => {
      const images = slider.querySelectorAll('.slider-images img');
      const prevButton = slider.querySelector('.prev');
      const nextButton = slider.querySelector('.next');
      let currentIndex = 0;

      // Update the width of the slider based on the number of images
      const totalImages = images.length;
      const slideWidth = 100 / totalImages;  // Each image will take an equal percentage of the container width
      slider.querySelector('.slider-images').style.width = `${totalImages * 100}%`;

      function updateSlider() {
        slider.querySelector('.slider-images').style.transform = `translateX(${-currentIndex * slideWidth}%)`;
      }

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
        updateSlider();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages; 
        updateSlider();
      });

      updateSlider();
    });