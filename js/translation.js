var lang = ['en','zh'];
var current = 0;
i18next
  .use(i18nextXHRBackend)
  .init({
      //load: ['en','zh-tw'],
      fallbackLng: 'en',
      debug: true,
      backend: {
          loadPath: './locales/{{lng}}.json'
      }

  }, function(err, t) {
      if (err) return console.log('something went wrong loading', err);
      jqueryI18next.init(i18next, $);
      $('.whole').localize();

      $('.lang-toggle').click(function() {
          current ^= 1;
          i18next.changeLanguage(lang[current], function() {
              $('.whole').localize();
          });
      });
  });
