// Create sections
document.addEventListener('DOMContentLoaded', () => {
    // Select all h2 elements
    const h2Elements = document.querySelectorAll('h2');
    const container = document.querySelector('#post'); // Or any other container element where content is wrapped
    const sections = [];

    h2Elements.forEach((h2, index) => {
        // Create a new section div for each h2
        const section = document.createElement('section');
        section.id = h2.id; // Set section ID to the corresponding h2 ID
        section.appendChild(h2.cloneNode(true)); // Clone the h2 and append to section

        // Collect all elements between the current h2 and the next one
        let nextSibling = h2.nextElementSibling;
        while (nextSibling && nextSibling.tagName !== 'H2') {
            section.appendChild(nextSibling.cloneNode(true)); // Clone and append content
            nextSibling = nextSibling.nextElementSibling;
        }

        // Add the section to the sections array
        sections.push(section);
    });

    // Clear the container and append the new sections
    container.innerHTML = '';
    sections.forEach(section => container.appendChild(section));
});

// ScrollSpy logic
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Assume your content is wrapped in <section> tags
    const tocLinks = document.querySelectorAll('#toc a');

    const observerOptions = {
        root: null, // Relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`a#${id}`);

            if (entry.isIntersecting) {
                // Highlight the current section in the table of contents
                tocLinks.forEach(link => link.classList.remove('font-bold', 'text-blue-800'));
                tocLink.classList.add('font-bold', 'text-blue-800');
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => observer.observe(section));
});