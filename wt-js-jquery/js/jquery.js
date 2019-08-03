
$(document).ready(function () {

    //variables

    let header = $("<header></header>"),
        main = $("<main></main>"),
        footer = $("<footer></footer>"),
        // nav
        nav = $("<nav></nav>").addClass("navbar navbar-expand-lg navbar-dark bg-dark fixed-top"),
        divContainerNav = $("<div></div>").addClass("container"),
        aNavbar = $("<a></a>").addClass("navbar-brand").text("Start Bootstrap").attr("href", "#"),
        divNavbar = $("<div></div>").addClass("collapse navbar-collapse"),
        toggleNavbar = $("<button></button>").addClass("navbar-toggler").attr("type", "button"),
        ulNavbar = $("<ul><ul>").addClass("navbar-nav ml-auto"),
        liHome = $("<li></li>").addClass("nav-item active"),
        liAbout = $("<li></li>").addClass("nav-item"),
        liServices = $("<li></li>").addClass("nav-item"),
        liContact = $("<li></li>").addClass("nav-item"),
        aHome = $("<a></a>").addClass("nav-link").attr("href", "#").text("Home"),
        aAbout = $("<a></a>").addClass("nav-link").attr("href", "#").text("About"),
        aServices = $("<a></a>").addClass("nav-link").attr("href", "#").text("Services"),
        aContact = $("<a></a>").addClass("nav-link").attr("href", "#").text("Contact"),
        //section - jumbotron
        sectionJumb = $("<section></section>").attr("id", "section-jumbotron"),
        spanToggle = $("<span></span>").addClass("navbar-toggler-icon"),
        divContJumb = $("<div></div>").addClass("container"),
        divJumb = $("<div></div>").addClass("jumbotron my-4"),
        h1 = $("<h1></h1>").addClass("display-3").text("A Warm Welcome!"),
        pJumb = $("<p></p>").addClass("lead").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."),
        aJump = $("<a></a>").addClass("btn btn-primary btn-lg").attr("href", "#").text("Call to action!"),
        //section - cards
        sectionCards = $("<section></section>").attr("id", "section-cards"),
        divContCards = $("<div></div>").addClass("container"),
        divRowCards = $("<div></div>").addClass("row text-center"),
        divColCard1 = $("<div></div>").addClass("col-lg-3 col-md-6 mb-4"),
        divColCard2 = $("<div></div>").addClass("col-lg-3 col-md-6 mb-4"),
        divColCard3 = $("<div></div>").addClass("col-lg-3 col-md-6 mb-4"),
        divColCard4 = $("<div></div>").addClass("col-lg-3 col-md-6 mb-4"),
        divCard1 = $("<div></div>").addClass("card h-100"),
        divCard2 = $("<div></div>").addClass("card h-100"),
        divCard3 = $("<div></div>").addClass("card h-100"),
        divCard4 = $("<div></div>").addClass("card h-100")





        //Content Head - Header - Nav

        $("head title").text("Only JQuery");
    $("head").append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">');
    $("body").prepend(header, main, footer);
    header.append(
        nav.append(
            divContainerNav.append(
                aNavbar,
                divNavbar.append(
                    ulNavbar.append(
                        liHome.append(aHome),
                        liAbout.append(aAbout),
                        liServices.append(aServices),
                        liContact.append(aContact)
                    )),
                toggleNavbar.append(spanToggle)
            )
        )
    );

    // Content Main

    main.append(
        //Section - Jumbotron
        sectionJumb.append(
            divContJumb.append(
                divJumb.append(
                    h1,
                    pJumb,
                    aJump
                )
            )
        ),
        // Content Section - Cards
        sectionCards.append(
            divContCards.append(
                divRowCards.append(
                    divColCard1.append(
                        divCard1
                    ),
                    divColCard2.append(
                        divCard2
                    ),
                    divColCard3.append(
                        divCard3
                    ),
                    divColCard4.append(
                        divCard4
                    ),
                )
            )
        )
    )
});
