$(document).ready(function() {
  function symbolApi() {
    const symbolURL = "https://data.fixer.io/api/symbols?access_key=451a2006f25b2b0d3024093bc3e7e588";
    $.getJSON(symbolURL, function(key) {
    })
  }
  function flucApi() {
    const fluctQuery = {
      base: "USD"
    }
    const fluctUrl = "https://data.fixer.io/api/latest?access_key=451a2006f25b2b0d3024093bc3e7e588";
    $.getJSON(fluctUrl, fluctQuery, function(key) {
      data = key;
      navRates();
    });
  }
  function loadingApi() {
    const yourCurrency = document.getElementById("yourCurrency").value;
    const currencyAmount = document.getElementById("currencyAmount").value;
    const countryCurrency = document.getElementById("countryCurrency").value;
    const url = "https://data.fixer.io/api/convert?access_key=451a2006f25b2b0d3024093bc3e7e588";
    const query = {
      "from": yourCurrency,
      "to": countryCurrency,
      "amount": currencyAmount
    };
    $.getJSON(url, query, function(key) {
      const from = key.query.from;
      const to = key.query.to
      const result = key.result;
      const parsedResult = parseFloat(Math.round(result * 100) / 100).toFixed(2);

      function convertedAmount() {
        $("#convertedAmount").append("<p>" + "<strong>" + countryCurrency + "<strong/>"+ parsedResult + "</p>");
      }
      convertedAmount();
    });
  };
  function navRates() {
    let audRate = data.rates["AUD"];
    $("#aud").append(`<img class="flags" src="https://www.countryflags.io/au/shiny/64.png">` + "<br>" +  "AUD/USD" + "<br>" + audRate);
    let jpyRate = data.rates["JPY"];
    $("#jpy").append(`<img class="flags" src="https://www.countryflags.io/jp/shiny/64.png">` + "<br>"+"JPY/USD" + "<br>" + jpyRate);
    let gbpRate = data.rates["GBP"];
    $("#gbp").append(`<img class="flags" src="https://www.countryflags.io/gb/shiny/64.png">` + "<br>"+"GBP/USD" + "<br>" + gbpRate);
    let brlRate = data.rates["BRL"];
    $("#brl").append(`<img class="flags" src="https://www.countryflags.io/br/shiny/64.png">` + "<br>"+"BRL/USD" + "<br>" + brlRate);
    let eurRate = data.rates["EUR"];
    $("#eur").append(`<img class="flags" src="https://www.countryflags.io/eu/shiny/64.png">` + "<br>"+"EUR/USD" + "<br>" + eurRate);
    let idrRate = data.rates["IDR"];
    $("#idr").append(`<img class="flags" src="https://www.countryflags.io/id/shiny/64.png">` + "<br>"+"IDR/USD" + "<br>" + idrRate);
  }
  function emptyResult() {
    $("#convertedAmount").empty();
  };

  $("#yourCurrency").change(function(e) {
    e.preventDefault();
    loadingApi();
    emptyResult();
  });
  $("#countryCurrency").change(function(e) {
    e.preventDefault();
    loadingApi();
    emptyResult()
  });
  $("#currencyAmount").change(function(e) {
    e.preventDefault();
    loadingApi();
    emptyResult();
  });
  function showAmountConversion() {
    $("#amountConversion").show();
    $("#welcomePage").hide();
    $("#start").css("display","none")
  };



  function showWhereAreYouTraveling() {
    $("#nextToConvertedAmount").click(function() {
      $("#whereAreYouTraveling").show();
      $("#amountConversion").hide();
    });
  };
  function showConvertedAmount() {
    $("#nextToAmountConversion").click(function() {
      $("#amountDiv").show();
      $("#whereAreYouTraveling").show();
    })
  }
  function showResults() {
    $("#nextToAmountConversion").click(function() {
      $("#whereAreYouTraveling").hide();
      $("#amountDiv").show();
    })
  }
  function logo() {
    $("img").click(function() {
      window.location.reload()
    })
  }
  function reset() {
    $("#reset").click(function() {
      window.location.reload()
    })

  }
  /* animated function */
  symbolApi();
  loadingApi();
  flucApi();
  emptyResult();
  showAmountConversion();
  showWhereAreYouTraveling();
  showConvertedAmount();
  showResults();
  reset();
  logo()


});

//Srolling animation code
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('img', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});

sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});

sr.reveal('.grid-container', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('.quote h2', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('.quote p', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('#info2', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});