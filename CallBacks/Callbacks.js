function isOdd(number) {
    return number % 2 != 0;
}
function isEven(number) {
    return number % 2 == 0;
}
function isInteger(number) {
    return number % 3 == 0;
}
function isInteger5(number) {
  return number % 5 == 0;
}

function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
        if (callback(number)) {
            results.push(number);
        }
    }
    return results;
}

let numbers = [13, 23, 466, 79, 33, 56, 60, 144, 101, 1000.87, 3, 33, 5];

let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
});
let evenNumbers = filter(numbers, function (number) {
    return number % 2 == 0;
});
let integerNumbers = filter(numbers, function (number) {
    return number % 3 == 0;
});
let integer5Numbers = filter(numbers, function (number) {
  return number % 5 == 0;
});


console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));
console.log(filter(numbers, isInteger));
console.log(filter(numbers, isInteger5));


function number(a, callback) {
    var result = a;
    console.log(result);
    callback(result);
  }
   
  number(-1, function(result) {
   
    if (result > -0.1) {
      console.log('checkPosNeg Function:', result, ' is Positive');
    } else {
      console.log('checkPosNeg Function:', result, ' is Negative');
    }
  });

  number(103, function(result) {
   
    if (result > -0.1) {
      console.log('checkPosNeg Function:', result, ' is Positive');
    } else {
      console.log('checkPosNeg Function:', result, ' is Negative');
    }
  });

  number(0, function(result) {
   
    if (result > -0.1) {
      console.log('checkPosNeg Function:', result, ' is Positive');
    } else {
      console.log('checkPosNeg Function:', result, ' is Negative');
    }
  });
  
  number(45, function(result) {
   
    if (result > 0.1) {
      console.log('checkPosNeg Function:', result, ' Hello');
    } else {
      console.log('checkPosNeg Function:', result, ' Goodbye');
    }
  });

  number(-5, function(result) {
   
    if (result > 0.1) {
      console.log('checkPosNeg Function:', result, ' Hello');
    } else {
      console.log('checkPosNeg Function:', result, ' Goodbye');
    }
  });

  number(1, function(result) {
   
    if (result > 7.1) {
      console.log(' The Solution is Basic');
    } else {
      console.log(' The Solution is Acidic');
    }
  });  

  number(8, function(result) {
   
    if (result > 7.1) {
      console.log(' The Solution is Basic');
    } else {
      console.log(' The Solution is Acidic');
    }
  });  

  number(8, function(result) {
   
    if (result < -0.1) {
      console.log(' www.cnn.com');
    } else {
      console.log(' www.ancnews.com');
    }
  });  

  number(-23, function(result) {
   
    if (result < -0.1) {
      console.log(' www.cnn.com');
    } else {
      console.log(' www.ancnews.com');
    }
  });  

  function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }
  
  const url1 = 'https://littlecaesars.com/en-us/';
  const url2 = 'https://www.walmart.com/';
  const url3 = 'www.staples.com';
  
  download(url1, function (url) {
    console.log(`Processing ${url}`);
    download(url2, function (url) {
      console.log(`Processing ${url}`);
      download(url3, function (url) {
        console.log(`Processing ${url}`);
      });
    });
  });