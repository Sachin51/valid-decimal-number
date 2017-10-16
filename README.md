# valid-decimal-number
Allows users to enter decimal values,provides user to specify the precision of decimal values required also.

# Usage

```html
Here it accepts any positive number without any decimals as decimal="0".

<input type="text" valid-decimal-number positive-only="true" decimal="0" ng-model="inputNumberNoDecimal"/>

<input type="text" valid-decimal-number positive-only="true" decimal="2" ng-model="inputNumberTwoDecimal"/>

Here it accepts any positive number with only 2 digits after the decimal(.) as decimal="2".

<input type="text" valid-decimal-number decimal="2" ng-model="inputNumberTwoDecimal"/>

Here it accepts any number(positive/negative) with only 2 digits after the decimal(.) as decimal="2".

``` 
    
## Installation
### Bower

````bash
bower install valid-decimal-number --save.

````

### Add module dependency.

````js
angular.module('yourAppModule', ['valid.decimal.number']);

````

Demo
--------
[DEMO link] (https://plnkr.co/edit/GbVTltpzGipTGAjg1ZeS?p=preview)


