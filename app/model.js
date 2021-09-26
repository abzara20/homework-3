var MODEL = (function () {
  let _pgChange = function (pageID) {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#content").html(data);
    });
  };

  return {
    pgChange: _pgChange,
  };
})();
