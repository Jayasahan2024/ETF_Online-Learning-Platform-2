
    //  Traversal: Add a border to all instructor cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.style.border = "3px solid black";
    });

//modification part

    document.addEventListener('DOMContentLoaded', () => {
        const titles = document.querySelectorAll('.card-title');
        titles.forEach(title => {
            title.addEventListener('click', () => {
                title.textContent = title.textContent.toUpperCase();
            });
            
        });
    });
    

    //  Attribute Modification: Add tooltips to all "View Details" buttons
    const buttons = document.querySelectorAll(".card button");
    buttons.forEach((button, index) => {
        button.setAttribute("title", "Click to view details about Instructor");
    });

    // CSS Manipulation
    // Highlight the cards when a button is hovered over
    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            cards.forEach((card) => {
                card.style.backgroundColor = "#dcdcdc";
            });
        });
        button.addEventListener("mouseout", () => {
            cards.forEach((card) => {
                card.style.backgroundColor = ""; // Reset
            });
        });
    });

    // JavaScript Effect

    //Smooth Scroll to "Instructors Details" section on button click
    const scrollDownButton = document.querySelector("#scrldownbtn");
    scrollDownButton.addEventListener("click", () => {
        document.querySelector("#bottom-section").scrollIntoView({ behavior: "smooth" });
    });
    

// HTML Effect


const techKeywords = ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Data Science"];
const techKeywords2 = ["Political Science & International Relations", "Economics", "Literature & Creative Writing", "Art History & Cultural Studies", "Law & Ethics", "History & Anthropology"];
const techKeywords3 = ["Environmental Science & Sustainability", "Psychology & Neuroscience"];
const techKeywords4 = ["Physics & Astronomy"];

const rows = document.querySelectorAll("table tbody tr");

rows.forEach((row) => {
    row.addEventListener("click", () => {
        const subject = row.cells[1].innerText;

        // Check if the row already has a color class
        if (row.classList.contains("table-warning") || row.classList.contains("table-success") || 
            row.classList.contains("table-primary") || row.classList.contains("table-danger")) {
            // Remove all color classes to reset
            row.classList.remove("table-warning", "table-success", "table-primary", "table-danger");
        } else {
            // Reset all rows to ensure only the clicked row gets updated
            rows.forEach(r => r.classList.remove("table-warning", "table-success", "table-primary", "table-danger"));
            
            // Apply the appropriate class based on the subject
            if (techKeywords.some(keyword => subject.includes(keyword))) {
                row.classList.add("table-warning");
            } else if (techKeywords2.some(keyword => subject.includes(keyword))) {
                row.classList.add("table-success");
            } else if (techKeywords3.some(keyword => subject.includes(keyword))) {
                row.classList.add("table-primary");
            } else if (techKeywords4.some(keyword => subject.includes(keyword))) {
                row.classList.add("table-danger");
            }
        }
    });
});
