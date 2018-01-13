$(document).ready(function(){



    // Create cards object
    var cards_object = {
        // 1
        'card_1': {
            'title': '100/100 Mbps Internet ONE',
            'price': '39.99',
            'legals': 'for yr 1 + taxes, equip. charges & other fees.',
            'legalsSuperscript': '1',
            'speedType': 'speedType1',
            'connectionInfo': '100/100 Mbps Internet',
            'connectionInfoSub': '',
            'suggestedDeviceQuantity': 'Great for: 4-7 devices',

            'speedTypeSecondary': '',
            'connectionInfoSecondary': '',
            'connectionInfoSubSecondary': '',
            'suggestedDeviceQuantitySecondary': '',
            'learnMore': '',
            'learnMoreLink': '',

            'bullet__one': 'No annual contract.',
            'bullet__two': '',
            'contact__number': '1.888.888.8888',
            'orderOnlineLink': 'insert href link here'
        },
        // 2
        'card_2': {
            'title': 'Fios Gigabit Connection with Custom TV TWO',
            'price': '74.99',
            'legals': 'for yr 1 + taxes, equip. charges RSN & other fees.',
            'legalsSuperscript': '2',
            'speedType': 'speedType2',
            'connectionInfo': 'Fios Gigabit Connection',
            'connectionInfoSub': '(up to 940/880 Mbps)',
            'suggestedDeviceQuantity': 'Great for: up to 100 devices',

            'speedTypeSecondary': 'speedTypeSecondary1',
            'connectionInfoSecondary': 'Custom TV',
            'connectionInfoSubSecondary': '',
            'suggestedDeviceQuantitySecondary': '155+ channels',
            'learnMore': 'Learn more',
            'learnMoreLink': 'google.com',

            'bullet__one': 'No annual contract.',
            'bullet__two': 'Access to 130,000 On Demand titles.',
            'contact__number': '1.888.888.8888',
            'orderOnlineLink': 'insert href link here'
        },
        // 3
        'card_3': {
            'title': 'Fios Gigabit Connection THREE',
            'price': '79.99',
            'legals': '+ taxes, equip. charges & other fees.',
            'legalsSuperscript': '3',
            'speedType': 'speedType2',
            'connectionInfo': '100/100 Mbps Internet',
            'connectionInfoSub': '(up to 940/880 Mbps)',
            'suggestedDeviceQuantity': 'Great for: up to 100 devices',

            'speedTypeSecondary': '',
            'connectionInfoSecondary': '',
            'connectionInfoSubSecondary': '',
            'suggestedDeviceQuantitySecondary': '',
            'learnMore': '',
            'learnMoreLink': '',

            'bullet__one': 'No annual contract.',
            'bullet__two': '',
            'contact__number': '1.888.888.8888',
            'orderOnlineLink': 'insert href link here'
        },
        // 4
        'card_4': {
            'title': '100/100 Mbps Internet FOUR',
            'price': '39.99',
            'legals': 'for yr 1 + taxes, equip. charges & other fees.',
            'legalsSuperscript': '1',
            'speedType': 'speedType1',
            'connectionInfo': '100/100 Mbps Internet',
            'connectionInfoSub': '',
            'suggestedDeviceQuantity': 'Great for: 4-7 devices',

            'speedTypeSecondary': '',
            'connectionInfoSecondary': '',
            'connectionInfoSubSecondary': '',
            'suggestedDeviceQuantitySecondary': '',
            'learnMore': '',
            'learnMoreLink': '',

            'bullet__one': 'No annual contract.',
            'bullet__two': '',
            'contact__number': '1.888.888.8888',
            'orderOnlineLink': 'insert href link here'
        },
        // 5
        'card_5': {
            'title': 'Fios Gigabit Connection FIVE',
            'price': '79.99',
            'legals': '+ taxes, equip. charges & other fees.',
            'legalsSuperscript': '2',
            'speedType': 'speedType2',
            'connectionInfo': '100/100 Mbps Internet',
            'connectionInfoSub': '',
            'suggestedDeviceQuantity': 'Great for: 4-7 devices',

            'speedTypeSecondary': '',
            'connectionInfoSecondary': '',
            'connectionInfoSubSecondary': '',
            'suggestedDeviceQuantitySecondary': '',
            'learnMore': '',
            'learnMoreLink': '',

            'bullet__one': 'No annual contract.',
            'bullet__two': '',
            'contact__number': '1.888.888.8888',
            'orderOnlineLink': 'insert href link here'
        },
        // 6
        'card_6': {
            'title': '100/100 Mbps Internet SIX',
            'price': '39.99',
            'legals': 'for yr 1 + taxes, equip. charges & other fees.',
            'legalsSuperscript': '1',
            'speedType': 'speedType1',
            'connectionInfo': '100/100 Mbps Internet',
            'connectionInfoSub': '',
            'suggestedDeviceQuantity': 'Great for: 4-7 devices',

            'speedTypeSecondary': '',
            'connectionInfoSecondary': '',
            'connectionInfoSubSecondary': '',
            'suggestedDeviceQuantitySecondary': '',
            'learnMore': '',
            'learnMoreLink': '',

            'bullet__one': 'No annual contract.',
            'bullet__two': '',
            'contact__number': '1.888.888.8888',
            'orderOnlineLink': 'insert href link here'
        },

    };









// // If user scrolls, fire scroll function
// window.onscroll = function() {
//     sticky_nav_scroll();
// };

// // Get sticky-nav
// var js_nav = document.getElementById("js-nav");

// // Get class for hero-two so we can add upper margin
// var hero_two = document.getElementById("margin-pre-mod");

// // Get the offset position of the sticky-nav
// var sticky = js_nav.offsetTop;

// // Add/remove sticky class
// function sticky_nav_scroll() {  
    
//     if (window.pageYOffset >= sticky) {
//         js_nav.classList.add("sticky")
//         hero_two.classList.add("sticky__margin-modifier");
//     } 
    
//     else {
//         js_nav.classList.remove("sticky");
//         hero_two.classList.remove("sticky__margin-modifier");
//     }
    
// }









// Turn cards in the cardsNav section on and off
$('.cardSelection').on('click', function() {

    // If card is inactive, make it active
    if ($(this).hasClass('cardsNav__inactive')) {
        
        if ($(this).hasClass('cardsNav__left')) {
            most_popular = true;
        }
        if ($(this).hasClass('cardsNav__center')) {
            internet_only = true;
        }
        if ($(this).hasClass('cardsNav__right')) {
            bundles = true;
        }

        $(this).removeClass('cardsNav__inactive');
        $(this).addClass('cardsNav__active');

    }

    // If cards is active, make it inactive
    else if ($(this).hasClass('cardsNav__active')) {

        if ($(this).hasClass('cardsNav__left')) {
            most_popular = false;
        }
        if ($(this).hasClass('cardsNav__center')) {
            internet_only = false;
        }
        if ($(this).hasClass('cardsNav__right')) {
            bundles = false;
        }

        $(this).removeClass('cardsNav__active');
        $(this).addClass('cardsNav__inactive');

    }

    // Anytime cardSelection is clicked, fire a function to send card object to injector
    // formatInjector();
    // console.log('card injector fired');
});









// Setup the dom
function documentPrep() {
    
    // Build the document
    var endpoint = '<div class="card__endpoint cards__endpoint0"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint1"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint2"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint3"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint4"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint5"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint6"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint7"></div>';
    endpoint += '<div class="card__endpoint cards__endpoint8"></div>';

    // Send the document to html
    $('.cards__endpoint__wrapper').append(endpoint);
    

} // documentPrep

// fire documentPrep on page load
documentPrep();



// clear out document
var documentClear = function() {

    $('.cards__endpoint__wrapper').html('');
    documentPrep();

} // documentClear









// Set state of cardsNav selectors
var most_popular = false;
var internet_only = false;
var bundles = false;









// Inject js and render on the DOM
function cardInjector(obj) {


    console.log(obj);
    console.log(obj[0].title);

    // Loop through obj
    for (i in obj) {

        // init card variable
        var card = '<div class="card">'; // Open card -- permanent

        // wrapper for top section
        card += '<div class="pricing__section">';
        card += '<img src="/assets/assets-shop-fios/featured.png">'; // Featured icon -- optional
        card += '<div class="title">' + obj[i].title + '</div>'; // Title -- will change
        card += '<div class="price">$' + obj[i].price + '/mo</div>';
        card += '<div class="legals">' + obj[i].legals + '<sup>' + obj[i].legalsSuperscript + '</sup></div>';
        card += '</div>' // Close pricing__section


        // // Features -- permanent
        card += '<div class="features">';

        // // Speed gauge section
        card += '<div class="speedGauge">'; // speedGauge -- permanent
        card += '<div class="speedBar ' + obj[i].speedType + '"></div>';
        card += '</div>'; // Close speedGauge -- permanent

        // // Connection section
        card += '<div class="connection">'; // Connection -- this will change
        card += '<div class="connectionInfo float-left">' + obj[i].connectionInfo + '</div>'; // This will change
        card += '<div class="connectionInfoSub float-left">' + obj[i].connectionInfoSub + '</div>'; // This is OPTIONAL
        card += '</div>'; // Close connection -- permanent and will change

        // // Suggested device quantity
        card += '<div class="suggestedDeviceQuantity clear">' + obj[i].suggestedDeviceQuantity + '</div>';

        // Check if card has a secondary speed bar element
        if (obj[i].speedTypeSecondary != '') {
            // second speed bar
            card += '<div class="speedGaugeSecondary">'; // speedGauge -- permanent
            card += '<div class="speedBar ' + obj[i].speedTypeSecondary + '"></div>';
            card += '</div>'; // Close speedGauge -- permanent

            // // Connection section
            card += '<div class="connection">'; // Connection -- this will change
            card += '<div class="connectionInfo float-left">' + obj[i].connectionInfoSecondary + '</div>'; // This will change
            card += '<div class="connectionInfoSub float-left">' + obj[i].connectionInfoSubSecondary + '</div>'; // This is OPTIONAL
            card += '</div>'; // Close connection -- permanent and will change

            // // Suggested device quantity
            card += '<div>'
            card += '<div class="suggestedDeviceQuantity float-left">' + obj[i].suggestedDeviceQuantitySecondary + '</div>';
            card += '<div class="learnMore float-right" href="' + obj[i].learnMoreLink + '">' + obj[i].learnMore + '</div>';
            card += '<div class="clear"></div>'
            card += '</div>'
        }

        // // Close features -- permanent
        card += '</div>';



        // // bulletPoint section
        card += '<div class="bulletPoint">';

        // // bullet -- will have between 1-2 of these
        // // NEED TO ADD IMAGE OPTIONS HERE
        card += '<img class="bulletPoint__bullet--one float-left" src="/assets/assets-shop-fios/bullet.png">';
        card += '<div class="bulletPoint__text--one">' + obj[i].bullet__one + '</div>';
        card += '</div>';

        if (obj[i].bullet__two != '') {
            card += '<div class="bulletPoint">';
            card += '<img class="bulletPoint__bullet--two float-left" src="/assets/assets-shop-fios/bullet.png">';
            card += '<div class="bulletPoint__text--two">' + obj[i].bullet__two + '</div>';
            // // Close bulletPoint section -- permanent
            card += '</div>';
        }


        // // Contact section -- permanent, only change is the number
        card += '<div class="contact">';
        card += '<div class="contact__number">Call to order: ' + obj[i].contact__number + '</div>';
        card += '<div class="contact__alternative">';
        card += '<div class="divider__left float-left"></div>';
        card += '<div class="divider__message float-left">or</div>';
        card += '<div class="divider__right float-left"></div>';
        card += '</div>';
        card += '<div class="contact__orderonline" href="' + obj[i].orderOnlineLink + '">Order online</div>';
        card += '</div>';

        // // Close card -- permanent
        // card =+ '</div>';


        $('.cards__endpoint' + i + '').append(card);
        

    }; // Close loop


}; // Close cardInjector









// Format injector and send object to injector
function formatInjector() {

    if (most_popular == true) {
        cardInjector(cards_object[0].card1);
    }
    else if (internet_only == true) {
        cardInjector(cards_object[1].card2);
    }
    else if (bundles == true) {
        cardInjector(cards_object[2].card3);
    }

}









// Click left cards button
$('.cardsNav__left').on('click', function() {

    documentClear();
    cardInjector([cards_object.card_1, cards_object.card_2, cards_object.card_3]);

});



// Click center cards button
$('.cardsNav__center').on('click', function() {
    
    documentClear();
    cardInjector([cards_object.card_4, cards_object.card_5, cards_object.card_6]);

});



// Click right cards button
$('.cardsNav__right').on('click', function() {

    documentClear();
    cardInjector([cards_object.card_1, cards_object.card_2, cards_object.card_3, cards_object.card_4, cards_object.card_5, cards_object.card_6]);

});



// Init slick
$('.cards__endpoint__wrapper').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
});










});