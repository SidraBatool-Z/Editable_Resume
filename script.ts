let educationEntries: string[] = [];
let experienceEntries: string[] = [];

// Function to initialize the resume display on page load
function loadInitialResume(): void {
    generateResume();
}

// Function to add a new education entry
function addEducation(): void {
    const educationInput = (document.getElementById('education') as HTMLInputElement).value;
    if (educationInput) {
        educationEntries.push(educationInput);
        (document.getElementById('education') as HTMLInputElement).value = ''; // Clear input
        generateResume();
    }
}

// Function to add a new experience entry
function addExperience(): void {
    const experienceInput = (document.getElementById('experience') as HTMLInputElement).value;
    if (experienceInput) {
        experienceEntries.push(experienceInput);
        (document.getElementById('experience') as HTMLInputElement).value = ''; // Clear input
        generateResume();
    }
}

// Helper function to make fields editable on click and save on blur
function makeEditable(elementId: string): void {
    const element = document.getElementById(elementId)!;
    element.setAttribute("contenteditable", "true");
    element.focus();
    element.onblur = () => element.setAttribute("contenteditable", "false");
}

function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Image handling
    const profilePicture = (document.getElementById('profile-picture') as HTMLInputElement).files![0];
    let imageUrl = '';
    if (profilePicture) {
        imageUrl = URL.createObjectURL(profilePicture);
    }

    const resumeOutput = document.getElementById('resume-output')!;
    resumeOutput.innerHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="Profile Picture">` : ''}
        <div class="resume-name" id="editable-name" onclick="makeEditable('editable-name')">${name}</div>
        
        <h4 class="resume-section-title">Contact</h4>
        <div class="resume-section-content contact-info">
            <p id="editable-contact" onclick="makeEditable('editable-contact')"><strong>Phone:</strong> ${contact}</p>
            <p id="editable-email" onclick="makeEditable('editable-email')"><strong>Email:</strong> ${email}</p>
        </div>
        
        <h4 class="resume-section-title">Education</h4>
        <div class="resume-section-content" id="editable-education">
            ${educationEntries.map((entry, index) => `<p id="education-${index}" onclick="makeEditable('education-${index}')">${entry}</p>`).join('')}
            <button onclick="addEducation()" class="add-btn">Add</button>
        </div>
        
        <h4 class="resume-section-title">Skills</h4>
        <div class="resume-section-content" id="editable-skills" onclick="makeEditable('editable-skills')">
            <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
        </div>

        <h4 class="resume-section-title">Work Experience</h4>
        <div class="resume-section-content" id="editable-experience">
            ${experienceEntries.map((entry, index) => `<p id="experience-${index}" onclick="makeEditable('experience-${index}')">${entry}</p>`).join('')}
            <button onclick="addExperience()" class="add-btn">Add</button>
        </div>
    `;
}


