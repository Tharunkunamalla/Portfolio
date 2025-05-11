function validateEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    Swal.fire({
      icon: "warning",
      title: "All fields required!",
      text: "Please fill in name, email, and message.",
    });
    return;
  }

  Email.send({
    SecureToken: "44da8148-1555-4f9a-a485-bdfc70558fc4",
    To: "kunamallatharun701@gmail.com",
    From: "kunamallatharun701@gmail.com",
    Subject: `New message from ${name}`,
    Body: `
      <strong>Name:</strong> ${name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Message:</strong><br/>${message}
    `,
  }).then((response) => {
    console.log("Email send response:", response); // 👈 this is important

    if (response === "OK") {
      Swal.fire({
        title: "Message Sent 🎉",
        text: "Thanks! I’ll get back to you soon.",
        icon: "success",
      });
      document.getElementById("contactForm").reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send. Response: " + response,
        icon: "error",
      });
    }
  });
}
