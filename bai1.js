function sum() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    if (inputA.trim() === '' || inputB.trim() === '') {
        alert('Vui lòng nhập số liệu.');
        return;
    }
    let result = parseFloat(inputA) + parseFloat(inputB);
    document.getElementById('result').innerText = 'Kết Quả: ' + result;
  }
  
  function subtract() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    if (inputA.trim() === '' || inputB.trim() === '') {
        alert('Vui lòng nhập số liệu.');
        return;
    }
    let result = parseFloat(inputA) - parseFloat(inputB);
    document.getElementById('result').innerText = 'Kết Quả: ' + result;
  }
  
  function multiply() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    if (inputA.trim() === '' || inputB.trim() === '') {
        alert('Vui lòng nhập số liệu.');
        return;
    }
    let result = parseFloat(inputA) * parseFloat(inputB);
    document.getElementById('result').innerText = 'Kết Quả: ' + result;
  }
  
  function divide() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    if (inputA.trim() === '' || inputB.trim() === '') {
        alert('Vui lòng nhập số liệu.');
        return;
    }
    if (parseFloat(inputB) === 0) {
        alert('Lỗi số liệu nhập sai.');
        return;
    }
    let result = parseFloat(inputA) / parseFloat(inputB);
    document.getElementById('result').innerText = 'Kết Quả: ' + result;
  }
  
  function reset() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerText = '';
  }