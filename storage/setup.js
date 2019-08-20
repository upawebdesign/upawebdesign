var head = '<link rel="stylesheet" type="text/css" href="/storage/stylesheet.css">';
$(function(){
    $('head').append(head);
    $('#header').load('/storage/header.html');
    $('#footer').load('/storage/footer.html');
});