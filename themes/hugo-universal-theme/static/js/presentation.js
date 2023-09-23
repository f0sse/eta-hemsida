jQuery(document).ready(function(){

  $('#presentation-search-input').focus();

  $('#presentation-search-input').on('keypress', function (e) {
    $('#presentation-search-input').removeAttr('style');

   if(e.which === 13){
     if($('#presentation-search-input').val() == "") {
       $('#presentation-item').hide();
       $('#presentation-welcome').show();
       $('#presentation-search-input').removeAttr('style');
     } else {
       $('#presentation-welcome').hide();

       $.getJSON("/auction/presentation/index.json", function(data) {

         var item = data.items.find(item => item.id === $('#presentation-search-input').val());

         if(typeof item == 'undefined') {
           $('#presentation-search-input').css("color","red");
         } else {
           $('#presentation-item-title').text(item.title);
           $('#presentation-item-description').text(item.description);
           $('#presentation-item-img').attr("src",item.image);
           $('#presentation-item-category').text(item.category);
           $('#presentation-item-status').text(item.status);
           $('#presentation-item-id').text(item.id);
           $('#presentation-item').show();
         }

         $('#presentation-search-input').val('');

       });
     }
   }
 });

});
