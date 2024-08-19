document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.querySelector(".button");
  const resultDiv = document.getElementById("result");

  calculateBtn.addEventListener("click", () => {
    const yearInput = parseInt(document.getElementById("year").value, 10);
    const monthInput = parseInt(document.getElementById("month").value, 10);
    const dayInput = parseInt(document.getElementById("day").value, 10);

    if (!isNaN(yearInput) && !isNaN(monthInput) && !isNaN(dayInput)) {
      const birthDate = new Date(yearInput, monthInput - 1, dayInput);
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

      resultDiv.textContent = `Your age is approximately in days: ${ageInDays}`;
      resultDiv.classList.add("show");

      // مسح بيانات الإدخال بعد إدخالها
      document.getElementById("year").value = "";
      document.getElementById("month").value = "";
      document.getElementById("day").value = "";
    } else {
      alert("Please enter valid values for year, month, and day.");
    }

    // لإضافة تأثير للـ fieldset عند الضغط على الزر
    const fieldset = document.querySelector(".field");
    fieldset.classList.add("shake");
    setTimeout(() => {
      fieldset.classList.remove("shake");
    }, 820);
  });
});
