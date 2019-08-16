var head = '<link rel="stylesheet" type="text/css" href="/storage/stylesheet.css">';
var header = `<a href="/index.html"><h1 id='title'>University Preparatory Academy</h1></a>
<h2>Header</h2>`;
$(function(){
    $('head').append(head);
    $('#header').append(header);
});