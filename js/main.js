$(document).ready(function(){
  ['master','cam'].forEach(function(branch){
    $.get('.git/logs/refs/heads/'+branch,function(data){
      $('body').append('<ol id="'+branch+'" reversed></ol>');
      data.match(/(.+)\n/g).forEach(function(c,i){ $('#'+branch).prepend( "<li>" + c.match(/^\w+\W(\w+)\W/)[1] + "</li>"); });
    });
  });
});