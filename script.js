//your JS code here. If required.
  const output = document.getElementById("output");
  const arr = [1, 2, 3, 4];

  function evenOut() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const even = arr.filter(num => num % 2 === 0);
        output.innerHTML = even.join(", ");
        resolve(even); // Pass the data to next then()
      }, 1000);
    });
  }

  function multiplyBy2(numbers) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multiplied = numbers.map(num => num * 2);
        output.innerHTML = multiplied.join(", ");
        resolve(); // Done!
      }, 2000);
    });
  }
  evenOut()
    .then(result => multiplyBy2(result));