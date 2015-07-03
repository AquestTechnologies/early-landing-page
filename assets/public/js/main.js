(function() {

  
  
  $(function() {
    
    var $mailCheckSuggestion = $('#mailcheck-suggestion');
    var $mailCheckAnchor = $('#mailcheck-a');
    var $mailCheckInput = $('#mailcheck-input');

    $mailCheckInput.on('keyup', function(ev) {
      var $that = $(this);
      // only suggest mailcheck
      // if there is a `@` + 1 character + `.`
      var val = $that.val();
      if (val.indexOf('@') === -1 || val.lastIndexOf('.') < val.indexOf('@') || val.lastIndexOf('.') - 1 === val.indexOf('@')) {
        $mailCheckSuggestion.addClass('hidden');
        return;
      }
      $that.mailcheck({
        suggested: function(el, suggestion) {
          $mailCheckAnchor.text(suggestion.full);
          $mailCheckSuggestion.removeClass('hidden');
        },
        empty: function(el) {
          $mailCheckSuggestion.addClass('hidden');
        }
      });
    });

    $mailCheckAnchor.on('click', function(ev) {
      ev.preventDefault();
      var email = $(this).text();
      $mailCheckInput.val(email);
      $mailCheckSuggestion.addClass('hidden');
    });

  });
  
  $(document).ready( function() {
    
    
    console.log('Hello there ;)');
    console.log('If you want to hack our product you have our blessing !');
    console.log('Contact us first at hello@aquest.fr for our host ip and port, and stack info !');
    
    (function carroussel(array) {
      // console.log('carroussel');
      var pictures = [];
      for (var i = 0, l = array.length; i < l; i++) {
        pictures[i] = new Image();
        pictures[i].src = array[i];
      }
      
      pictures[1].onLoad = (function() {
        // console.log('startCarroussel');
        var index = 0;
        setInterval(function() { 
          // console.log('setPicture ' + index);
          index = index === array.length - 1 ? 0 : index + 1;
          document.getElementById('wrap').style.backgroundImage = 'url(' + pictures[index].src + ')';
        }, 4500);
      })();
      
    })([
      'img/1.png',
      'img/2.png',
      'img/3.png',
      ]);
  });
  
}());
