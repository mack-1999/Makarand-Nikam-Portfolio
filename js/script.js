const span = document.querySelectorAll('h2 span')
span.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated', 'rubberBand')
}))

span.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated', 'rubberBand')
}))


$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');

    });

});

