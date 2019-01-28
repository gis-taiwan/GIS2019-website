jQuery(document).ready(function($) {
    var gallery = $(".cd-gallery"),
        foldingPanel = $(".cd-folding-panel"),
        mainContent = $(".cd-main"),
        other = $("main,.back-to-top");
    /* open folding content */
    gallery.on("click", "a", function(event) {
        event.preventDefault();
        openItemInfo($(this).attr("href"));
    });

    /* close folding content */
    foldingPanel.on("click", ".cd-close", function(event) {
        event.preventDefault();
        toggleContent("", false);
    });
    other.on("click", function(event) {
        /* detect click on .cd-gallery::before when the .cd-folding-panel is open */
        //console.log('other');
        if ($(".fold-is-open").length > 0)
            toggleContent("", false);
    });

    function openItemInfo(url) {
        var mq = viewportSize();
        if (gallery.offset().top > $(window).scrollTop() && mq != "mobile") {
            /* if content is visible above the .cd-gallery - scroll before opening the folding panel */
            $("body,html").animate(
                {
                    scrollTop: gallery.offset().top
                },
                100,
                function() {
                    toggleContent(url, true);
                }
            );
        } else if (
            gallery.offset().top + gallery.height() <
                $(window).scrollTop() + $(window).height() &&
            mq != "mobile"
        ) {
            /* if content is visible below the .cd-gallery - scroll before opening the folding panel */
            $("body,html").animate(
                {
                    scrollTop:
                        gallery.offset().top +
                        gallery.height() -
                        $(window).height()
                },
                100,
                function() {
                    toggleContent(url, true);
                }
            );
        } else {
            toggleContent(url, true);
        }
    }

    function toggleContent(url, bool) {
        if (bool) {
            /* load and show new content */
            var foldingContent = foldingPanel.find(".cd-fold-content");
            if (url == "item-1") {
                foldingContent.html(
                    '<div class="cd-fold-content single-page">' +
                        "   <h2>Destination Green</h2>" +
                        "   <em></em>" +
                        "   <p class=\"text-justify\">The impact of climate change becomes increasingly fierce as the average temperature is rising continuously. There are more and more changes in the climate and the environment which affect human, creatures and the whole ecosystem. As the future generation to come, it is an issue of our time to coexist with the environment while the past destruction had been done. This year, GIS Taiwan will launch the discussion of the interaction between man and land. We will explore the connection between environment and technology as well as the opportunities and challenges we will face. We hope every delegate can unleash the strength of sustainability and construct sustainable environment together.</p>"  +
                        "</div>"
                );
            }
            else if (url == "item-2") {
                foldingContent.html(
                    '<div class="cd-fold-content single-page">' +
                        "   <h2>The No-Age Society</h2>" +
                        "   <em></em>" +
                        "   <p class=\"text-justify\">As we all know, the demographic structure is determined by both birth rate as well as death rate. The decline of both rates nowadays gives rise to the occurrence of aging society and the tendency to have fewer children, which lead to great impacts on the society, economy and moral standards. This year, GIS Taiwan will place emphasis on \"smart health\" and \"long-term care\" with an eye to exploring the revolutionary innovation brought by the combination of technology and medicine as well as its future potential. What kinds of technological applications or social mechanism we can expect to assist us when we age? GIS Taiwan hopes delegates could come up with brand new solutions and possibilities for the problems brought by the aging society and therefore influence the world with their enthusiasm, empathy, kindness and wisdom.</p>" +  "</div>"
                );
            }
            else if (url == "item-3") {
                foldingContent.html(
                    '<div class="cd-fold-content single-page">' +
                        "   <h2>The Great Wealth Transfer</h2>" +
                        "   <em></em>" +
                        "   <p class=\"text-justify\">Economy has an inseparable connection to our life. This year, we will bound from “The Great Wealth Transfer” to discuss the role for our generation and the changes we can make in the era when baby boomers start to fade. Facing their wealth, what the millennials want to do is changing the world instead of merely satisfying their material needs. With new techniques and technology, we will exert our power to break the rigid system and the stale regulations and to define the novel era on our own. GIS Taiwan hopes that every delegate can face challenges and opportunities under the new economy trend with a more confident attitude and further change the world.</p>" + "</div>"
                );
            }
            else if (url == "item-4") {
                foldingContent.html(
                    '<div class="cd-fold-content single-page">' +
                        "   <h2>Paradigm Shift</h2>" +
                        "   <em></em>" +
                        "   <p class=\"text-justify\">The world is surrounded by the Internet in 21st century which is a faced with an unprecedented change. The Y and Z generations are labelled as “unrealistic” and “aimless”, but few people have taught them how to face the changing world. This year, GIS Taiwan will focus on the “educational revolution” and “social innovation”. Digging into the fundamentals, delegates will solve problems and build up solid sustainable development foundations. GIS Taiwan hopes delegates can realise the transformation of thinking in the new era, imagine more about future education, and ignite the eagerness to change.</p>" + "</div>"
                );
            }
            setTimeout(function() {
                $("body").addClass("overflow-hidden");
                foldingPanel.addClass("is-open");
                mainContent.addClass("fold-is-open");
            }, 100);

            /*foldingContent.load(url+' .cd-fold-content > *', function(event){
				setTimeout(function(){
					$('body').addClass('overflow-hidden');
					foldingPanel.addClass('is-open');
					mainContent.addClass('fold-is-open');
				}, 100);
				
			});*/
        } else {
            /* close the folding panel */
            var mq = viewportSize();
            foldingPanel.removeClass("is-open");
            mainContent.removeClass("fold-is-open");

            mq == "mobile" || $(".no-csstransitions").length > 0
                ? /* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
                  $("body").removeClass("overflow-hidden")
                : mainContent
                      .find(".cd-item")
                      .eq(0)
                      .one(
                          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                          function() {
                              $("body").removeClass("overflow-hidden");
                              mainContent
                                  .find(".cd-item")
                                  .eq(0)
                                  .off(
                                      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
                                  );
                          }
                      );
        }
    }

    function viewportSize() {
        /* retrieve the content value of .cd-main::before to check the actua mq */
        return window
            .getComputedStyle(document.querySelector(".cd-main"), "::before")
            .getPropertyValue("content")
            .replace(/"/g, "")
            .replace(/'/g, "");
    }
});

