//1. Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == true){
			sum++;
		}
	}
	return sum;
}

//2. Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
	return Object.entries(obj);
}

//3. Create a function that concatenates n input arrays, where n is variable.
function concat(...args) {
	return args.flat();
}

//4. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
function arrayOfMultiples(num, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
      result.push(num * i);
    }
    return result;
  }
  

//5. Return true if the marathon is 25 miles long, otherwise, return false. 
function marathonDistance(arr) {
    if (!arr || arr.length === 0) {
      return false;
    }
    let totalDistance = 0;
    for (let i = 0; i < arr.length; i++) {
      totalDistance += Math.abs(arr[i]);
    }
    return totalDistance === 25; 
  }
  
//6. Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
function indexMultiplier(arr) {
    if (arr.length === 0) {
      return 0; 
    } 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * i; 
    }
    return sum;
  }
  

//7. An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if ((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0)) {
        return false;
      }
    }
    return true;
  }

//8. Create the function that takes an array with objects and returns the sum of people's budgets.
function getBudgets(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].budget;
    }
    return sum;
  }

//9. Create a function that returns true if all parameters are truthy, and false otherwise.
function allTruthy(...args) {
    return args.every(Boolean);
  }

//10. Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
function matchLastItem(arr) {
    let lastItem = arr[arr.length - 1];
    let restOfArray = arr.slice(0, arr.length - 1);
    let concatenated = restOfArray.join("");
    return lastItem === concatenated;
  }
  
//11. Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
    return Object.entries(obj);
  }

//12. Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.
function cons(arr) {
    arr.sort((a, b) => a - b); 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return false; 
      }
    }
    return true; 
  }


//13. Create a function that counts the integer's number of digits.
function count(num) {
    return Math.abs(num).toString().length;
  }

//14. Create a function that determines whether or not an array is a factor chain.
function factorChain(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] % arr[i] !== 0) {
        return false;
      }
    }
    return true;
  }

//15. Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
function progressDays(miles) {
    let progressCount = 0;
    for (let i = 1; i < miles.length; i++) {
      if (miles[i] > miles[i - 1]) {
        progressCount++;
      }
    }
    return progressCount;
  }

//16. Create a function that takes a number as its argument and returns an array of all its factors.
function factorize(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

//17. Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
    let modifiedStr = str.replace(/[abc]/gi, '');
    return modifiedStr === str ? null : modifiedStr;
  }

  
//18. Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:
function evenOddTransform(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        arr[i] -= 2 * n;
      } else {
        arr[i] += 2 * n;
      }
    }
    return arr;
  }


//19. Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
function firstPlace(road) {
    if (!road) {
      return "No road available";
    }
    for (let i = 0; i < road.length; i++) {
      if (/[A-Za-z]/.test(road[i])) {
        return road[i];
      }
    }
    return "No car available";
  }
  
//20. Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.
function warOfNumbers(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sumEven += numbers[i];
      } else {
        sumOdd += numbers[i];
      }
    }
    return Math.abs(sumEven - sumOdd);
  }
  