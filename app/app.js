function route() {
  let hash = window.location.hash;
  let pageID = hash.replace("#/", "");

  if (pageID == "") {
    MODEL.pgChange("home");
  } else {
    MODEL.pgChange(pageID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
});
