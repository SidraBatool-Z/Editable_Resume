var educationEntries = [];
var experienceEntries = [];
// Function to initialize the resume display on page load
function loadInitialResume() {
    generateResume();
}
// Function to add a new education entry
function addEducation() {
    var educationInput = document.getElementById('education').value;
    if (educationInput) {
        educationEntries.push(educationInput);
        document.getElementById('education').value = ''; // Clear input
        generateResume();
    }
}
// Function to add a new experience entry
function addExperience() {
    var experienceInput = document.getElementById('experience').value;
    if (experienceInput) {
        experienceEntries.push(experienceInput);
        document.getElementById('experience').value = ''; // Clear input
        generateResume();
    }
}
// Helper function to make fields editable on click and save on blur
function makeEditable(elementId) {
    var element = document.getElementById(elementId);
    element.setAttribute("contenteditable", "true");
    element.focus();
    element.onblur = function () { return element.setAttribute("contenteditable", "false"); };
}
function generateResume() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    // Image handling
    var profilePicture = document.getElementById('profile-picture').files[0];
    var imageUrl = '';
    if (profilePicture) {
        imageUrl = URL.createObjectURL(profilePicture);
    }
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = "\n        ".concat(imageUrl ? "<img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\">") : '', "\n        <div class=\"resume-name\" id=\"editable-name\" onclick=\"makeEditable('editable-name')\">").concat(name, "</div>\n        \n        <h4 class=\"resume-section-title\">Contact</h4>\n        <div class=\"resume-section-content contact-info\">\n            <p id=\"editable-contact\" onclick=\"makeEditable('editable-contact')\"><strong>Phone:</strong> ").concat(contact, "</p>\n            <p id=\"editable-email\" onclick=\"makeEditable('editable-email')\"><strong>Email:</strong> ").concat(email, "</p>\n        </div>\n        \n        <h4 class=\"resume-section-title\">Education</h4>\n        <div class=\"resume-section-content\" id=\"editable-education\">\n            ").concat(educationEntries.map(function (entry, index) { return "<p id=\"education-".concat(index, "\" onclick=\"makeEditable('education-").concat(index, "')\">").concat(entry, "</p>"); }).join(''), "\n            <button onclick=\"addEducation()\" class=\"add-btn\">Add</button>\n        </div>\n        \n        <h4 class=\"resume-section-title\">Skills</h4>\n        <div class=\"resume-section-content\" id=\"editable-skills\" onclick=\"makeEditable('editable-skills')\">\n            <p>").concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '), "</p>\n        </div>\n\n        <h4 class=\"resume-section-title\">Work Experience</h4>\n        <div class=\"resume-section-content\" id=\"editable-experience\">\n            ").concat(experienceEntries.map(function (entry, index) { return "<p id=\"experience-".concat(index, "\" onclick=\"makeEditable('experience-").concat(index, "')\">").concat(entry, "</p>"); }).join(''), "\n            <button onclick=\"addExperience()\" class=\"add-btn\">Add</button>\n        </div>\n    ");
}
