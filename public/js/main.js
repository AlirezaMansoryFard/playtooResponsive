$("#hamburger").click(function () {
  $(".sidebar").animate(
    {
      left: 0,
    },
    500
  );
  $("html").css("overflow", "hidden");
});
$("#close").click(function () {
  $(".sidebar").animate(
    {
      left: "-60rem",
    },
    500
  );
  $("html").css("overflow", "auto");
});
