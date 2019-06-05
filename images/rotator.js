(function(){
  $(window).scroll(function() {
    //console.log("inside scroll event");
    //console.log($(this).scrollTop());
      if ($(this).scrollTop() < 200) {
          $(".footer").hide();
      }
      else {
          $(".footer").show()
      }
  });

  var uri = decodeURIComponent(window.location.href);
  var url = uri.split('?');
  if(url.length > 1){
    var parameters = url[1].split('&');

    if(parameters.length > 0){

      //create param dictionary to allow out of order query params
      var v = {}
      parameters.forEach(function(param){
        var p = param.split('=');
        v[p[0]] = p[1];
      });

      var offerpic = document.getElementsByClassName("offerimage");
      Array.prototype.forEach.call(offerpic, function(o){
        o.src = 'https://d3cn5s8kurag44.cloudfront.net/bottle/' + v['img'];
      });
      console.log("V: ", v);
      var offer = v['offer'].split('%20').join(' ');
      console.log("offer: ", offer);

      var names = document.getElementsByClassName('offername');
      Array.prototype.forEach.call(names, function(n){
        n.innerText = offer;
      });

    }
  }
})();