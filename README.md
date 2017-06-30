# valid-decimal-number
Allows users to enter decimal values,provides user to specify the precision of decimal values required also.

# Usage

```html
Here it accepts a number without any decimals as decimal="0".

<input type="text" valid-decimal-number decimal="0" ng-model="inputNumberNoDecimal"/>

 <input type="text" valid-decimal-number decimal="2" ng-model="inputNumberTwoDecimal"/>

Here it accepts a number with only 2 digits after the decimal(.) as decimal="2".

``` 
    
## Installation
### Bower

````bash
bower install valid-decimal-number --save.

```

### Add module dependency and configure it

````js
angular.module('yourAppModule', ['valid.decimal.number']);

```
