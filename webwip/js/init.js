(function($){
  $(function(){

    $('.sidenav').sidenav({preventScrolling: false});
    $('.parallax').parallax();
    $('.modal').modal({preventScrolling: false});
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown({coverTrigger: false, constrainWidth: false, alignment: 'right'});

  }); // end of document ready
})(jQuery); // end of jQuery name space
