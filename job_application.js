document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("jobForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("first_name").value.trim(),
      lastName: document.getElementById("last_name").value.trim(),
      email: document.getElementById("email").value.trim(),
      jobRole: document.getElementById("job_role").value,
      address: document.getElementById("address").value.trim(),
      city: document.getElementById("city").value.trim(),
      pincode: document.getElementById("pincode").value.trim(),
      dob: document.getElementById("date")?.value.trim() || "", // safe access
      resume: document.getElementById("upload").files[0]?.name || ""
    };

    console.log("DOB value:", formData.dob); // Debug

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.jobRole ||
      !formData.address ||
      !formData.city ||
      !formData.dob ||
      !formData.pincode
    ) {
      alert("Please fill all required fields including Date of Birth");
      return;
    }

    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push(formData);
    localStorage.setItem("applications", JSON.stringify(applications));

    alert("Application submitted successfully!");
    form.reset();
  });
});
