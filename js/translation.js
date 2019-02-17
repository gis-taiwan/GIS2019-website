function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var lang = ['en','zh'];
var current = 0;
var userlang = getCookie('language'); 
if(userlang.match('en')){
    current = 0;
}
else if(userlang.match('zh')){
    current = 1;
}
else{ // cookie === "undefined"
    //console.log(userlang);
    current = 0;
    document.cookie = "language='en'; path=/";
}

i18next
  .use(i18nextXHRBackend)
  .init({
      lng : lang[current],
      load: ['en','zh'],
      fallbackLng: 'en',
      debug: false,
      backend: {
          loadPath: './locales/{{lng}}.json' 
      }

  }, function(err, t) {
      if (err) return console.log('something went wrong loading', err);
      jqueryI18next.init(i18next, $);
      $('.whole').localize();

      $('.lang-toggle').click(function() {
          current ^= 1;
          document.cookie = "language='" + lang[current] + "'; path=/";
          //console.log(document.cookie);
          i18next.changeLanguage(lang[current], function() {
              $('.whole').localize();
          });
      });
  });
