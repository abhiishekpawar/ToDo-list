$(document).ready(function(){
    $("#btn").click(function(){
        var nElement = $("input[name = in]").val();
        $("ol").append("<li>"+ nElement + "</li>");

    })
    $(document).on('dblclick','li', function(){
$(this).toggleClass('strike').fadeOut('slow');    
});
$('input').focus(function() {
$(this).val('');
});
$('ol').sortable();
})