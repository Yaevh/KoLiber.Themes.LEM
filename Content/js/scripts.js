$(document).ready(function(){
        
    //SCROLLSPY
    $('body').scrollspy({ target: '#navbar-main', offset: 300 });

    //SCROLLTO
    $('nav a, .logo-wrapper a, #mobileMenu a, .backToTop a').click(function(){

        var page = $(this).attr('href');    

        var params = {
            duration: 800,
            easing: 'swing',
            offset:-100
            };

            $.scrollTo(page, params);

            return false;	
    });

    //MENU MOBILNE
    $('.openMobile').on("click", function(){

        $('#mobileMenu').stop().slideDown();

    });

    $('.closeMobile').on("click", function(){

        $('#mobileMenu').stop().slideUp();

    });

    $('#mobileMenu a').on("click", function(){

        $('#mobileMenu').slideUp();

    });
    
    $("#numbers").on("mousemove", function(){
        
        
        $(".timer").countTo();
        $(this).off("mousemove");
        
    });

    //BACKTOTOP
    $(window).on("scroll", function(){

    if (window.pageYOffset > 300) {
        $('.backToTop').fadeIn('fast');
    } else
        $('.backToTop').fadeOut('fast');

    var $faniPay = $('#fanipay');
    var $faniPayOffset = $faniPay.offset().top;

    if ($faniPayOffset < $(document).height() - 300 ) {
        $($faniPay).css('opacity', 1);
    } else
        $($faniPay).css('opacity', 0);

    });
    
    //KONTAKT
    var loc_kalisz = {
        name: "Piotr Kasperkiewicz",
        profession: "Koordynator Katowice i okolice",
        phoneNumber: "516 907 459",
        email: "piotr.kasperkiewicz@koliber.org",
        photo: "piotr-kasperkiewicz" }
    
    var loc_katowice = {
        name: "Kasjan Kasprzak",
        profession: "Koordynator Katowice i okolice",
        phoneNumber: "601 425 194",
        email: "kasjan.kasprzak@gmail.com",
        photo: "empty-person" }
    
    var loc_kielce = {
        name: "Maciej Musiał",
        profession: "Koordynator Kielce i okolice",
        phoneNumber: "691 970 863",
        email: "maciekmax1993@wp.pl",
        photo: "empty-person" }
    
    var loc_krakow = {
        name: "Rafał Potempa",
        profession: "Koordynator Kraków i okolice",
        phoneNumber: "500 377 966",
        email: "rafalpotempa23@gmail.com",
        photo: "empty-person" }
    
    var loc_lublin = {
        name: "Łukasz Jasiński",
        profession: "Koordynator Lublin i okolice",
        phoneNumber: "669 363 538 ",
        email: "lukasz.jasinski@poczta.umcs.lublin.pl",
        photo: "empty-person" }
    
    var loc_lodz = {
        name: "Joanna Kosiada",
        profession: "Koordynator Łódź i okolice",
        phoneNumber: "723 806 222",
        email: "joannakosiada@gmail.com",
        photo: "empty-person" }
     
    var loc_olsztyn = {
        name: "Kacper Jabłonka",
        profession: "Koordynator Olsztyn i okolice",
        phoneNumber: "727 931 813",
        email: "kmjablonka@gmail.com",
        photo: "empty-person" }
    
    var loc_poznan = {
        name: "Piotr Kasperkiewicz",
        profession: "Koordynator Poznań i okolice",
        phoneNumber: "516 907 459",
        email: "piotr.kasperkiewicz1@gmail.com",
        photo: "piotr-kasperkiewicz" }
    
    var loc_szczecin = {
        name: "Krzysztof Rup",
        profession: "Koordynator Szczecin i okolice",
        phoneNumber: "668 809 241",
        email: "krzysztofrup1993@gmail.com",
        photo: "krzysztof-rup" }
    
    var loc_trojmiasto = {
        name: "Tomasz Malinowski",
        profession: "Koordynator Trójmiasto i okolice",
        phoneNumber: "501 366 255",
        email: "tomasz.piotr.malinowski@gmail.com",
        photo: "empty-person" }
    
    var loc_warszawa = {
        name: "Sylwia Szymańska",
        profession: "Koordynator Warszawa i okolice",
        phoneNumber: "798 795 782",
        email: "sylwiakszymanska@gmail.com",
        photo: "empty-person" }
    
    var loc_wroclaw = {
        name: "Andrzej Janiec",
        profession: "Koordynator Wrocław i okolice",
        phoneNumber: "517 782 131",
        email: "janiec.andrzej110@gmail.com",
        photo: "empty-person" }

    var loc_rzeszow = {
        name: "Jakub Mościszewski",
        profession: "Koordynator Rzeszów i okolice",
        phoneNumber: "660 479 995",
        email: "jmosciszewski@gmail.com",
        photo: "empty-person" }

    var loc_opole = {
        name: "Arkadiusz Maksim",
        profession: "Koordynator Opole i okolice",
        phoneNumber: "503 746 320",
        email: "arekmaksim93@gmai.com",
        photo: "empty-person" }


    $('.loc').on("click", function(){

        var that = $(this).data('loc');

        $(' .active-person ').fadeOut(100, function(){

            $('.local .contact-info h4').text( eval(that).name );
            $('.local .contact-info .profession').text( eval(that).profession );
            $('.local .contact-info .phoneNumber').text( eval(that).phoneNumber );
            $('.local .contact-info .email').text( eval(that).email );
            $('.local .contact-photo img').attr('src','images/'+ eval(that).photo +'.jpg');

        }).fadeIn();

    });

});