// function showInput(inputId) {
//   // Hide all input fields
//   var allInputs = document.querySelectorAll('.hidden');
//   allInputs.forEach(function (input) {
//     input.style.display = 'none';
//   });

//   // Show the selected input field
//   var selectedInput = document.getElementById(hed);
//   alert(selectedInput)
//   selectedInput.style.display = 'block';
// }

function showInput(value) {
    var hedInput = document.getElementById('hed');
    if (value === 'Other') {
        hedInput.style.display = 'block';
    } else {
        hedInput.style.display = 'none';
    }
    
}
// function showInput(value) {
//     var hed1Input = document.getElementById('hed1');
//     if (value === 'Others') {
//         hed1Input.style.display = 'block';
//     } else {
//         hed1Input.style.display = 'none';
//     }
