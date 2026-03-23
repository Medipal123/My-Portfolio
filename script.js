function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    // Toggle the light-theme class on the body
    body.classList.toggle('light-theme');

    // Change the icon and colors
    if (body.classList.contains('light-theme')) {
        icon.classList.replace('ri-sun-line', 'ri-moon-line'); // Change to moon
    } else {
        icon.classList.replace('ri-moon-line', 'ri-sun-line'); // Change back to sun
    }
}


window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const pos = about.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    about.classList.add("show");
  }
});


// MY SKILLS


function toggleSkills(element) {
        const parent = element.parentElement;
        if (parent.classList.contains('skills-open')) {
            parent.classList.remove('skills-open');
        } else {
            // Optional: Close other accordions first
            // document.querySelectorAll('.skills-group').forEach(el => el.classList.remove('skills-open'));
            parent.classList.add('skills-open');
        }
    }

    // function toggleSkills(header) {
    //     const item = header.parentNode;
    //     item.classList.toggle('skills-open');
    // }


    function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    // Restore background scrolling
    document.body.style.overflow = 'auto';
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// projects

// 1. Select all the necessary elements
const projects = document.querySelectorAll('.project-container');
const leftArrow = document.querySelector('.project-left-arrow');
const rightArrow = document.querySelector('.project-right-arrow');

let currentIndex = 0;
let autoScrollTimer;

// 2. Function to show the correct project based on index
function showProject(index) {
    // Hide all projects
    projects.forEach(project => {
        project.style.display = 'none';
    });

    // Show the current one
    projects[index].style.display = 'block';
}

// 3. Logic for Next and Previous
function nextProject() {
    currentIndex++;
    if (currentIndex >= projects.length) {
        currentIndex = 0; // Loop back to the first one
    }
    showProject(currentIndex);
    resetTimer(); // Reset auto-scroll timer on manual click
}

function prevProject() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1; // Loop to the last one
    }
    showProject(currentIndex);
    resetTimer(); // Reset auto-scroll timer on manual click
}

// 4. Auto-scroll functionality
function startTimer() {
    autoScrollTimer = setInterval(nextProject, 5000); // Changes every 5 seconds
}

function resetTimer() {
    clearInterval(autoScrollTimer);
    startTimer();
}

// 5. Event Listeners for arrows
rightArrow.addEventListener('click', nextProject);
leftArrow.addEventListener('click', prevProject);

// 6. Initialize the slider
showProject(currentIndex);
startTimer();

// send message
const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the page from reloading

        // Get values from your specific IDs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Your email address where you want to receive messages
        const myEmail = "medipallimanisha10@gmail.com";

        // Build the mailto link
        // We use encodeURIComponent to handle spaces and special characters safely
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);

        // This line triggers the "How do you want to open this?" system popup
        window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    });