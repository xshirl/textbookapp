console.log('ready');

$(document).ready(function() {
  $('.cart').on('click', function() {
    console.log('listen');
    addBook();
  })
})

function addBook() {

    let imageAttr = $('.text').attr('src'); //text is class of textbook image in show.ejs
    $('.add').append('<div class="textbook"><img class="addCart" src="" width= "300"></div>'); //add is class of div in cart
    $('.addCart').attr("src", imageAttr);
    console.log(imageAttr);
}
