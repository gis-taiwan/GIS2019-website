$(function() {
    $(".material-card > .mc-btn-action").click(function() {
        var card = $(this).parent(".material-card");
        var icon = $(this).children("i");
        icon.addClass("fa-spin-fast");

        if (card.hasClass("mc-active")) {
            card.removeClass("mc-active");

            window.setTimeout(function() {
                icon
                    .removeClass("fa-arrow-left")
                    .removeClass("fa-spin-fast")
                    .addClass("fa-bars");
            }, 800);
        } else {
            $(".mc-active").removeClass("mc-active");
            window.setTimeout(function() {
                $(".fa-arrow-left")
                    .removeClass("fa-arrow-left")
                    .removeClass("fa-spin-fast")
                    .addClass("fa-bars");
            }, 800);
            card.addClass("mc-active");
            setTimeout(function(){
                var active = $(".mc-active");
                var padding = active.children("h2").outerHeight();
                //console.log('"'+padding+'px"');
                //console.log(active.children(".mc-content").children(".mc-description").height());
                //active.find(".mc-description").css("padding-top",'"'+padding+'px"');
                active.find(".mc-description").css("padding-top",padding+'px');
            }, 400);



            window.setTimeout(function() {
                icon
                    .removeClass("fa-bars")
                    .removeClass("fa-spin-fast")
                    .addClass("fa-arrow-left");
            }, 800);
        }
    });
});

