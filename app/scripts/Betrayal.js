var Longfellow = {
  Name: 'Professor Longfellow',
  Picture: 'images/Betrayal/Char-Professor_Longfellow.png',
  Speed: [0,2,2,4,[4],5,5,6,6],
  Might: [0,1,2,[3],4,5,5,6,6],
  Sanity: [0,1,3,[3],4,5,5,6,7],
  Knowledge: [0,4,5,5,5,[5],6,7,8]
}

var Rhinehardt = {
  Name: 'Father Rhinehardt',
  Picture: 'images/Betrayal/Char-Father_Rhinehardt.png',
  Speed: [0,2,3,[3],4,5,6,7,7],
  Might: [0,1,2,[2],4,4,5,5,7],
  Sanity: [0,3,4,5,5,[6],7,7,8],
  Knowledge: [0,1,3,3,[4],5,6,6,8]
}

var Akimoto = {
  Name: 'Peter Akimoto',
  Picture: 'images/Betrayal/Char-Peter_Akimoto.png',
  Speed: [0,3,3,3,[4],6,6,7,7],
  Might: [0,2,3,[3],4,5,5,6,8],
  Sanity: [0,3,4,4,[4],5,6,6,7],
  Knowledge: [0,3,4,[4],5,6,7,7,8]
}

var Jaspers = {
  Name: 'Brandon Jaspers',
  Picture: 'images/Betrayal/Char-Brandon_Jaspers.png',
  Speed: [0,3,4,[4],4,5,6,7,8],
  Might: [0,2,3,3,[4],5,6,6,7],
  Sanity: [0,3,3,3,[4],5,6,7,8],
  Knowledge: [0,1,3,[3],5,5,6,6,7]
}

var LeClerc = {
  Name: 'Jenny LeClerc',
  Picture: 'images/Betrayal/Char-Jenny_LeClerc.png',
  Speed: [0,2,3,4,[4],4,5,6,8],
  Might: [0,3,4,[4],4,4,5,6,8],
  Sanity: [0,1,1,2,4,[4],4,5,6],
  Knowledge: [0,2,3,[3],4,4,5,6,8]
}

var Granville = {
  Name: 'Heather Granville',
  Picture: 'images/Betrayal/Char-Heather_Granville.png',
  Speed: [0,3,3,[4],5,6,6,7,8],
  Might: [0,3,3,[3],4,5,6,7,8],
  Sanity: [0,3,3,[3],4,5,6,6,6],
  Knowledge: [0,2,3,3,4,[5],6,7,8]
}

var Zostra = {
  Name: 'Madame Zostra',
  Picture: 'images/Betrayal/Char-Madame_Zostra.png',
  Speed: [0,2,3,[3],5,5,6,6,7],
  Might: [0,2,3,3,[4],5,5,5,6],
  Sanity: [0,4,4,[4],5,6,7,8,8],
  Knowledge: [0,1,3,4,[4],4,5,6,6]
}

var Lopez = {
  Name: 'Vivian Lopez',
  Picture: 'images/Betrayal/Char-Vivian_Lopez.png',
  Speed: [0,3,4,4,[4],4,6,7,8],
  Might: [0,2,2,[2],4,4,5,6,6],
  Sanity: [0,4,4,[4],5,6,7,8,8],
  Knowledge: [0,4,5,5,[5],5,6,6,7]
}

var Ingstrom = {
  Name: 'Zoe Ingstrom',
  Picture: 'images/Betrayal/Char-Zoe_Ingstrom.png',
  Speed: [0,4,4,4,[4],5,6,8,8],
  Might: [0,2,2,3,[3],4,4,6,7],
  Sanity: [0,3,4,[5],5,6,6,7,8],
  Knowledge: [0,1,2,[3],4,4,5,5,5]
}

var Dubourde = {
  Name: 'Missy Dubourde',
  Picture: 'images/Betrayal/Char-Missy_Dubourde.png',
  Speed: [0,3,4,[5],6,6,6,7,7],
  Might: [0,2,3,3,[3],4,5,6,7],
  Sanity: [0,1,2,[3],4,5,5,6,7],
  Knowledge: [0,2,3,4,[4],5,6,6,6]
}

var Williams = {
  Name: 'Darrin Flash Williams',
  Picture: 'images/Betrayal/Char-Darrin_Flash_Williams.png',
  Speed: [0,4,4,4,5,[6],7,7,8],
  Might: [0,2,3,[3],4,5,6,6,7],
  Sanity: [0,1,2,[3],4,5,5,5,7],
  Knowledge: [0,2,3,[3],4,5,5,5,7]
}

var Bellows = {
  Name: 'Ox Bellows',
  Picture: 'images/Betrayal/Char-Ox_Bellows.png',
  Speed: [0,2,2,2,3,[4],5,5,6],
  Might: [0,4,5,[5],6,6,7,8,8],
  Sanity: [0,2,2,[3],4,5,5,6,7],
  Knowledge: [0,2,2,[3],3,5,5,6,6]
}

var CharacterArray = [Bellows, Williams, Dubourde, Ingstrom, Lopez, Zostra, LeClerc, Granville, Jaspers, Akimoto, Longfellow, Rhinehardt];

$(document).ready(function () {
  $('.character-stats').click(function () {
    $('.features').slideUp();
    $('.selected-character').slideDown();

    var character = $(this).find('img').attr('alt');

    displayCharacter(character);
  });

  $('#NewCharacter').click(function () {
    $('.features').slideDown();
    $('.selected-character').slideUp();
  })

  $('.tracker').on('click', 'li', function(){
    var stat = $(this).parents('ul').attr('class').split(' ')[0];

    var to_px = 400 - ($(this).index() * 50);

    $('li.active').removeClass('.active');
    $(this).addClass('active');

    $('.' + stat + '.indicator').animate({right: to_px + 'px'}, 1000);
  });

  $('.omen-tracker li').click(function(){
    var to_px = $(this).index() * ($('.omen-tracker li').width() + 30);

    $('.omen-tracker li.active').removeClass('.active');
    $(this).addClass('active');

    $('.Omen.indicator').animate({left: to_px + 'px'}, 1000);
  });

  function displayCharacter(character){
    var thisCharacter = _.findWhere(CharacterArray, {Name: character});

    $('.character .picture').attr('src', thisCharacter.Picture);
    $('.character .name').text(thisCharacter.Name);

    var statArray = ['Speed', 'Might', 'Sanity', 'Knowledge'];

    $.each(statArray, function(i, stat){

      var stat_html = '';
      $.each(thisCharacter[stat], function(i){
          if(Array.isArray(thisCharacter[stat][i])) {
            stat_html += "<li class='active'>";

            stat_html += thisCharacter[stat][i][0];

            var indicator_location = 400 - (i * 50);
            $('.' + stat + '.indicator').css({'right' : indicator_location + 'px'});
          } else {
            stat_html += "<li";
            if(i == 0){
              stat_html += " class='dead'>";
            } else {
              stat_html += ">";
            }
            stat_html += thisCharacter[stat][i];
          }
        stat_html += "</li>";
      });
      $('.' + stat + '.tracker').empty().append(stat_html);
    });

  }
});
