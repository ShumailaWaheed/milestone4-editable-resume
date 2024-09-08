document.addEventListener('DOMContentLoaded', () => {
    // Function to make sections editable
    function makeEditable(): void {
        const editableSections = document.querySelectorAll<HTMLElement>('[contenteditable]');

        editableSections.forEach((section) => {
            section.addEventListener('click', () => {
                const isEditable = section.isContentEditable;
                section.contentEditable = (!isEditable).toString();
                section.style.border = isEditable ? 'none' : '1px solid #ccc';
                section.focus();
            });
        });
    }

    // Function to toggle the visibility of the skills list
    function toggleSkills(): void {
        const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement | null;
        const skillsList = document.getElementById('skillsList') as HTMLElement | null;
        const skillsHeading = document.querySelector('#skillsContainer h2') as HTMLElement | null;

        toggleButton?.addEventListener('click', () => {
            if (skillsList && skillsHeading) {
                const isHidden = skillsList.classList.contains('hidden');
                skillsList.classList.toggle('hidden', !isHidden);
                skillsHeading.style.display = isHidden ? 'block' : 'none';
                toggleButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
            }
        });
    }

    // Function to handle profile picture editing
    function enableProfilePicEditing(): void {
        const profilePic = document.getElementById('profilePic') as HTMLImageElement | null;
        const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement | null;

        profilePic?.addEventListener('click', () => {
            profilePicInput?.click();
        });

        profilePicInput?.addEventListener('change', (event: Event) => {
            const input = event.target as HTMLInputElement;
            const file = input.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e: ProgressEvent<FileReader>) {
                    if (profilePic && e.target?.result) {
                        profilePic.src = e.target.result as string; // Update profile picture
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Function to save changes (example implementation)
    function saveChanges(): void {
        const saveButton = document.getElementById('saveChanges') as HTMLButtonElement | null;
        saveButton?.addEventListener('click', () => {
            alert('Changes saved!'); // Replace with actual save functionality
        });
    }

    // Initialize functions
    makeEditable();
    toggleSkills();
    enableProfilePicEditing();
    saveChanges();
});
