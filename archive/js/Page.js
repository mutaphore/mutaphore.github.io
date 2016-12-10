function initPage() {
    var header = $("header");
    var contents = $("#contents-html");
    var navItems;

    // Load the Home contents with ajax
    header.load("./navbar.html", function() {
        contents.load("./home.html", function() {
            $("#home").addClass("active");
            $("#homeModal").modal("show");
            // Set navbar trigger events
            navItems = $(".navbar-nav").children();
            navItems.each(function(index) {
                var anchor = $(this).children();

                anchor.on("click", {page: anchor.text()}, function(e) {
                    contents.empty();   
                    contents.page = e.data.page;
                    contents.load("./" + e.data.page + ".html", function(e) {
                        navItems.each(function() {
                            $(this).removeClass("active");
                        });
                        $("#" + contents.page).addClass("active");
                        // iF Terminal page initialize the Terminal object as well
                        if (contents.page === "terminal") {
                            new Terminal().init();
                        }
                        $("#contents-html").click();
                    });
                });

            })
        });    
    });
}