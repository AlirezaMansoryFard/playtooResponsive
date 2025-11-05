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
      left: "-32rem",
    },
    500
  );
  $("html").css("overflow", "auto");
});
