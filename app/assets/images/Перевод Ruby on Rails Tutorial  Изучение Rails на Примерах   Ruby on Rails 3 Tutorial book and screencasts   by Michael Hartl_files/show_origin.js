$(document).ready(function(){
  if (document.location.pathname.split('/')[2] =='help') { return false; }

  $('a').click(function (event) {
    event.stopPropagation();
  });

  $('p').click(function() {

    if ($(this).hasClass('clicked')) {
      clear_all_clicked();
      return false;
    };

    clear_all_clicked();
    $(this).addClass('clicked');

    var refresh  = '?cache_refresher_3',
        pathname = window.location.pathname,
        index    = $('p').index(this),
        version  = pathname.split('/')[2],
        chapter  = pathname.split('/')[3] || 'beginning';

    $(this).after('<div class="origin"> </div>');
    $('div.origin')
      .hide()
      .load(p_for_load())
      .show('fast');

    // build loading path for paragraph from the given chapter with the given index
    function p_for_load () {
      var p_for_load = [
        '/origin/', version, '/', chapter, '_fragment.html', refresh, ' p:eq(', index, ')'
      ].join('');

      return p_for_load;
    };

    function clear_all_clicked () {
      $('div.origin').remove();
      $('p').removeClass('clicked');
    };
  });
});

