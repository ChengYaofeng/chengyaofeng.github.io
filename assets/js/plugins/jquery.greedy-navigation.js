/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $nav.children('button.nav-toggle');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      // Reserve the dropdown's space before deciding whether another link fits.
      $btn.removeClass("hidden");
      availableSpace = $nav.width() - $btn.width() - 30;
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close').attr('aria-expanded', 'false');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Match the body offset to the actual masthead height after wrapping.
  $('body').css('padding-top', $('.masthead').height() + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener("change", updateNav);
}

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close').attr('aria-expanded', String(!$hlinks.hasClass('hidden')));
});

updateNav();
// Keyboard users can close the overflow menu and return to its trigger.
$(document).on('keydown', function (event) {
  if (event.key === 'Escape' && !$hlinks.hasClass('hidden')) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close').attr('aria-expanded', 'false').trigger('focus');
  }
});
