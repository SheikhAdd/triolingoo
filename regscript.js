function validateForm() {
  // Get the value of the phone number input field
  var phoneNumber = document.getElementById("phone").value;

  // Remove non-digit characters from the phone number
  var digitsOnly = phoneNumber.replace(/\D/g, "");

  // Check if the number of digits is not equal to 11
  if (digitsOnly.length !== 11) {
    alert("Please enter a 11-digit phone number.");
    return false; // Prevent form submission
  }
}