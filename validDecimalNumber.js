(function() {
  angular.module('valid.decimal.number', [])

  .directive('validDecimalNumber', function() {
    return {
      require: '?ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        if (!ngModelCtrl) {
          return;
        }

        var clean;
        ngModelCtrl.$parsers.push(function(val) {
          if (angular.isUndefined(val)) {
            val = '';
          }

           
          if (attrs.positiveOnly == 'true') { //To accept only positive number '-' removed
            if (attrs.decimal == 0) {
              clean = val.replace(/[^0-9]/g, '');
            } else {
              clean = val.replace(/[^0-9\.]/g, '');
            }
          } else {
            if (attrs.decimal == 0) {
              clean = val.replace(/[^-0-9]/g, '');
            } else {
              clean = val.replace(/[^-0-9\.]/g, '');
            }
          }


          var negativeCheck = clean.split('-');
          var decimalCheck = clean.split('.');
          if (angular.isDefined(negativeCheck[1])) {
            negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
            clean = negativeCheck[0] + '-' + negativeCheck[1];
            if (negativeCheck[0].length > 0) {
              clean = negativeCheck[0];
            }

          }

          if (angular.isDefined(decimalCheck[1])) {
            decimalCheck[1] = decimalCheck[1].slice(0, attrs.decimal);
            clean = decimalCheck[0] + '.' + decimalCheck[1];
          }

          if (val !== clean) {
            ngModelCtrl.$setViewValue(clean);
            ngModelCtrl.$render();
          }
          return clean;
        });

        element.bind('keypress', function(event) {
          if (event.keyCode === 32) {
            event.preventDefault();
          }
        });
      }
    };
  });
})();
