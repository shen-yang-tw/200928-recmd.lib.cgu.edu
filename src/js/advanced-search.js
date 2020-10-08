//Check all exist
function allExist(el) {
  var exist = true
  k = document.querySelectorAll(el);
  for (var i = 0; i < k.length; i++) {
    if (k[i] == null) {
      exist = false
      return exist
    } else {
      exist = true
      return exist
    }
  }
}

//Check one exist
function oneExist(el) {
  var exist = true
  k = document.querySelectorAll(el);
  for (var i = 0; i < k.length; i++) {
    if (k[i] != null) {
      return exist
    } else {
      exist = false
      return exist
    }
  }
}

function search() {
  //for Plus Search page
  $("#search_option>div:nth-child(2)").after($("#search_option>div:first").clone().removeClass('uk-row-first'));
  $("#search_option [uk-alert]:last .option").remove();
  $("#search_option>div:first button").removeClass('uk-alert-close');
  $("#add").click(function() {
    //button #add cannot place in <form> or won't working
    var counter = $("#search_option>div").length;
    $("#search_option>div:first button").addClass('uk-alert-close');
    var newSearch = $("#search_option>div:first").clone().removeClass('uk-row-first');
    if (counter < 6) {
      if (counter < 3) {
        $("#search_option>div:first button").removeClass('uk-alert-close');
      }
      $("#search_option>div:nth-child(2)").after(newSearch);
      $("#search_option [uk-alert]:last .option").remove();
    }
    $("#search_option>div:first button").removeClass('uk-alert-close');
    // $("#searchBar").parent().height($("#searchBar").height() + 30); //for sicky
    // return false;
  });
}

function slider() {
  //rangeSlider
  $("#range").ionRangeSlider({
    skin: "flat",
    hide_min_max: true,
    keyboard: true,
    min: 1896,
    max: 2019,
    from: 1896,
    to: 2019,
    type: 'double',
    step: 1,
    postfix: "年",
    grid: true,
    prettify_enabled: false
  });
}

$(document).ready(function() {
  if (oneExist("#search_option") == true) {
    search()
  }
  if (oneExist("#range") == true) {
    slider()
  }
});