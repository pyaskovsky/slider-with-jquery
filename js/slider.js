(function(){
  var slides = [];
  var images = [];
  var sliderItems = $('.slider .items');
  var sliderItem = $('.slider .item');
  var sliderImage = $('.slider .images-small-wrap .image');
  var currentSlide = 0;
  var next = $('.slide-right');
  var prev = $('.slide-left');
  var itemCount = sliderItem.length;

  var infinity = setInterval(nextItem, 5000);

  sliderImage.first().addClass('active');

  $(sliderItem).each(function(index){
    slides.push($(this));
  });

  $(sliderImage).each(function(index){
    images.push($(this));
  });

  $(next).click(nextItem);

  $(prev).click(function() {
    if (currentSlide == 0) {
      currentSlide = itemCount;
    }
    currentItem();
    currentSlide--;
  });

  function nextItem() {
    if (currentSlide > itemCount) {
      currentSlide = 0;
    }
    currentItem();
    currentSlide++;
  }

  function currentItem() {
    sliderImage.removeClass('active');
    sliderItems.css('transform', 'translateX('+ currentSlide%itemCount * -100 + '%)');
    images[currentSlide%itemCount].addClass('active');
  }
})()