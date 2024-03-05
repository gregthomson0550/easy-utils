
var EasyUtils = (function () {
    // Private helper function
    function add(a, b) { return a + b;}
  
    // Public functions
    return {
      // Function to add two numbers
      addNumbers: function (num1, num2) {
        return add(num1, num2);
      },
  
      // Function to capitalize the first letter of a string
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
  
      // Function to check if a number is even
      isEven: function (num) {
        return num % 2 === 0;
      }
    };
  })();