$(function ($) {
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("bg-grey");
    } else {
      $(".navbar").removeClass("bg-grey");
    }

    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  //add or remove sticky header
  $(window).on("load, resize", function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
      $(".navbar").removeClass("sticky-top");
    } else {
      $(".navbar").addClass("sticky-top");
    }
  });

  // Smooth scroll for the menu and links with .scrollto classes
  $(".scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);

      if (target.length) {
        var top_space = 0;

        if ($(".navbar").length) {
          top_space = $(".navbar").outerHeight();
          if ($(".navbar").hasClass("sticky-top")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        return false;
      }
    }
  });

  // Dummy Worksheet data
  let worksheets = {
    lkg:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/lkg/evs/evs-4.jpg"></div> </div>',
    ukg:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/ukg/evs/evs-4.jpg"></div> </div>',
    c1:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c1/evs/evs-4.jpg"></div> </div>',
    c2:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c2/evs/evs-4.jpg"></div> </div>',
    c3:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c3/evs/evs-4.jpg"></div> </div>',
    c4:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c4/evs/evs-4.jpg"></div> </div>',
    c5:
      '<h4 class="sheet-type-1">Maths Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/maths/maths-1.jpg" ></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/maths/maths-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/maths/maths-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/maths/maths-4.jpg"></div></div><h4 class="sheet-type-2">English Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/english/english-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/english/english-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/english/english-3.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/english/english-4.jpg"></div></div><h4 class="sheet-type-3">EVS Worksheets (100 sheets)</h4><div class="worksheet-images"><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/evs/evs-2.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/evs/evs-1.jpg"></div><div class="worksheet-image"><img class="lazyload" data-original="https://vcdn.globalshiksha.com/wsheets/demo/comp/c5/evs/evs-4.jpg"></div> </div>',
  };

  //load initial worksheet
  $(".worksheets").html(worksheets.lkg);
  $("img.lazyload").lazyload({ effect: "fadeIn" });

  //load worksheet for selected tab
  $(".btn-tab").click(function () {
    //check if already selected
    if (!$(this).hasClass("selected")) {
      $(".btn-tab").removeClass("selected");
      $(this).addClass("selected");

      let tab = $(this).data("tab");
      $(".worksheets").html(worksheets[`${tab}`]);
      $("img.lazyload").lazyload({ effect: "fadeIn" });
    }
  });
});
