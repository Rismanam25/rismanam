  setTimeout(() => {
    const popup = new bootstrap.Modal(document.getElementById('popup-cta'));
    popup.show();
  }, 7000); 

    AOS.init({
    duration: 800, 
    once: true,
  });