$(document).ready(function () {
    var $boot         = $("#boot"),
        $preload      = $("#preload"),
        $mainmenu     = $("#mainmenu"),
        $play         = $("#play"),
        $books        = $("#books"),
        $options      = $("#options"),
        $achievements = $("#achievements"),
        $credits      = $("#credits"),
        bootTimer;

    showBoot();

    function showBoot() {
        $boot.fadeIn("slow", function() {
            bootTimer = setInterval(showPreload, 2000);
        });
    }

    function showPreload() {
        clearTimeout(bootTimer);

        $boot.fadeOut("slow", function() {
            $preload.fadeIn("slow", function() {
                $(this).find(".js-loading").animate({
                    width: "100%"
                }, 2000, function() {
                    showMainmenu($preload);
                });
            });
        });
    }

    function showMainmenu(current) {
        var $current = $(current);

        $current.fadeOut("slow", function() {
            $mainmenu.fadeIn("slow");

            $mainmenu.find(".js-cover").animate({
                "width": "100%"
            }, 600);

            $mainmenu.find(".js-maintitle").animate({
                "top": "430px",
                "font-size": "5em"
            }, 600);

            $mainmenu.find(".js-mainmenu").animate({
                "top": "500px"
            }, 600);

            (function mainmenuChainAnimation(index) {
                var $elements = $('.js-mainmenu li');
                $elements.eq(index).animate({
                    "margin": "20px auto",
                    "padding": "20px 0"
                }, "fast", function() {
                    if (index + 1 < $elements.length) mainmenuChainAnimation(index + 1);
                });
            }(0));
        });
    }

    function resetMainmenu() {
        $mainmenu.find(".js-cover").css({"width": "80%"});
        $mainmenu.find(".js-maintitle").css({"top": "230px", "font-size": "3em"});
        $mainmenu.find(".js-mainmenu").css({"top": "340px"});
        $mainmenu.find(".js-mainmenu li").css({"margin": "5px auto", "padding": "0 0"});
    }

    $(".js-goto-play").on("click", function() {
        $mainmenu.fadeOut("slow", function() {
            $play.fadeIn("slow");
            resetMainmenu();
        });
    });

    $(".js-goto-books").on("click", function() {
        $mainmenu.fadeOut("slow", function() {
            $books.fadeIn("slow");
            resetMainmenu();
        });
    });

    $(".js-goto-options").on("click", function() {
        $mainmenu.fadeOut("slow", function() {
            $options.fadeIn("slow");
            resetMainmenu();
        });
    });

    $(".js-goto-achievements").on("click", function() {
        $mainmenu.fadeOut("slow", function() {
            $achievements.fadeIn("slow");
            resetMainmenu();
        });
    });

    $(".js-goto-credits").on("click", function() {
        $mainmenu.fadeOut("slow", function() {
            $credits.fadeIn("slow");
            resetMainmenu();
        });
    });


    $(".js-goto-mainmenu").on("click", function() {
        var $this = $(this),
            $current = $this.parent();

        showMainmenu($current);
    })
});

