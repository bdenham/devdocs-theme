$(function() {

  $(window).on('load', function(){
    // Fix headers hiding behind nav when loading on anchor link
    if(window.location.hash) {
      $(document).scrollTop($(document).scrollTop() - 60);
    }
  });

  animatedAnchors.init();

  // Magento Glossary
  magento.glossary.init("https://magento.github.io/glossary/data/content-glossary.xml",function(term){return term.types.includes("glossary");},magento.glossary.tooltip.init);


  // jquery modal settings
  $.modal.defaults = {
    closeExisting: true,
    escapeClose: true,
    clickClose: true,
    closeText: '×',
    closeClass: '',
    modalClass: "modal",
    blockerClass: "jquery-modal",
    spinnerHtml: null,
    showSpinner: true,
    showClose: true,
    fadeDuration: 100,   // Number of milliseconds the fade animation takes.
    fadeDelay: 1.0        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
  };

  $('.collapsible-navigation').collapsibleNavigation();

});
// END document ready