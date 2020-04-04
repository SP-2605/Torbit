// Get Current Year
$('#year').text(new Date().getFullYear());

//COnfigure Slider
$('.carousel').carouel({
    interval:6000,
    pause:'hover'
})