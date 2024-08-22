function selectSize(size) {
    const sizeOptions = document.querySelectorAll('.size-option');
  
    // Remove 'selected' class from all size options
    sizeOptions.forEach(option => {
      option.classList.remove('selected');
    });
  
    // Add 'selected' class to the clicked size option
    const selectedSize = document.getElementById('selected-size');
    selectedSize.value = size;
    const sizeOption = document.querySelector(`[onclick="selectSize('${size}')"]`);
    sizeOption.classList.add('selected');
  }
  