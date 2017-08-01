(function(){
  angular
      .module("PAF", [
          "ngMessages" // The ngMessages module provides a simple way to show/hide error messages within your form
                       // It works in conjunction with the ngModel $error object.
        , "ngAnimate" // ngAnimate module supports both CSS-based and JS-based animations via callback hooks
        , "ui.router"
      ]);
})();
