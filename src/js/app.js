document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbar = document.querySelector(".navbar");

  navbarToggle.addEventListener("click", function () {
    navbar.classList.toggle("collapsed");
    navbarToggle.classList.toggle("change");
  });
});

function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hidesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Image trasition
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg",
    "Images/image6.jpg",
  ];

  let currentIndex = 0;
  const heroImage = document.getElementById("hero-image");

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.style.opacity = 0.6; // Start fade-out

    setTimeout(() => {
      heroImage.src = images[currentIndex];
      heroImage.style.opacity = 1; // Start fade-in
    }, 600); // Wait for fade-out to complete
  }

  setInterval(changeImage, 7000); // Change image every 7 seconds
});
// JavaScript for changing content on next and previous button click
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");
  const aboutContent = document.querySelector(".about-content");
  const aboutTitle = document.querySelector(".about-content h1");
  const aboutParagraphs = document.querySelectorAll(".about-content p");

  const content = [
    {
      title: "About Us",
      paragraphs: [
        "We are located in the vibrant city of Nairobi, Kenya, REMAYA Organization operates with a global vision and local action.",
        "The inaugural endeavor of REMAYA was the 'Cup of Tea with Ndiini Primary School Students,' marking the commencement of their noble journey. This initiative led to the identification and comprehensive support of nine deserving children, ensuring their access to full education.",
      ],
    },
    {
      title: "Our Mission",
      paragraphs: [
        "At REMAYA, our mission is to empower underprivileged children by providing them access to quality education and holistic support.",
        "We believe that education is the key to breaking the cycle of poverty and creating a brighter future for generations to come.",
      ],
    },
    {
      title: "Our Vision",
      paragraphs: [
        "Our vision is to create a world where every child has the opportunity to thrive and reach their full potential.",
        "Through our initiatives and partnerships, we aim to build a society that values education and invests in the well-being of all its members.",
      ],
    },
    // Change the content if you need it was just for practise
  ];

  let step = 0; // Current step index

  // Function to update content
  function updateContent() {
    aboutTitle.textContent = content[step].title;
    aboutParagraphs.forEach((paragraph, index) => {
      paragraph.textContent = content[step].paragraphs[index];
    });
  }

  // Event listener for previous button
  prevButton.addEventListener("click", function () {
    if (step > 0) {
      step--;
      updateContent();
    } else if (step === 0) {
      step = content.length - 1;
      updateContent();
    }
  });

  // Event listener for next button
  nextButton.addEventListener("click", function () {
    if (step < content.length - 1) {
      step++;
      updateContent();
    }else if (step === content.length - 1) {
        step = 0;
        updateContent();
      }
  });

  // Initialize content
  updateContent();
});
