document.addEventListener('DOMContentLoaded', () => {
    function makeEditable() {
        const editableSections = document.querySelectorAll('[contenteditable]');

        editableSections.forEach(section => {
            section.addEventListener('click', () => {
                const isEditable = section.isContentEditable;
                section.contentEditable = !isEditable;
                section.style.border = isEditable ? 'none' : '1px solid #ccc';
                section.focus();
            });
        });
    }
    function toggleSkills() {
        const toggleButton = document.getElementById('toggleSkills');
        const skillsList = document.getElementById('skillsList');
        const skillsHeading = document.querySelector('#skillsContainer h2');

        toggleButton.addEventListener('click', () => {
            const isHidden = skillsList.classList.contains('hidden');
            skillsList.classList.toggle('hidden', !isHidden);
            skillsHeading.style.display = isHidden ? 'block' : 'none';
            toggleButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
        });
    }
    function enableProfilePicEditing() {
        const profilePic = document.getElementById('profilePic');
        const profilePicInput = document.getElementById('profilePicInput');

        profilePic.addEventListener('click', () => {
            profilePicInput.click();
        });

        profilePicInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    profilePic.src = e.target.result; // Update profile picture
                };
                reader.readAsDataURL(file);
            }
        });
    }
    function saveChanges() {
        const saveButton = document.getElementById('saveChanges');
        saveButton.addEventListener('click', () => {
            alert('Changes saved!'); 
        });
    }
    makeEditable();
    toggleSkills();
    enableProfilePicEditing();
    saveChanges();
});

