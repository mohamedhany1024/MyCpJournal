document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const categorySelect = document.getElementById('category');
    const addCategoryButton = document.getElementById('addCategoryButton');
    const customCategoryInput = document.getElementById('customCategory');
    const outputContainer = document.getElementById('outputContainer');
    const jsonOutput = document.getElementById('jsonOutput');
    const copyButton = document.getElementById('copyButton');

    // Show custom category input
    addCategoryButton.addEventListener('click', () => {
        customCategoryInput.style.display = 'block';
        customCategoryInput.focus();
    });

    // Add custom category to dropdown
    customCategoryInput.addEventListener('blur', () => {
        if (customCategoryInput.value.trim() !== '') {
            const newOption = document.createElement('option');
            newOption.value = customCategoryInput.value.trim();
            newOption.textContent = customCategoryInput.value.trim();
            categorySelect.appendChild(newOption);
            categorySelect.value = customCategoryInput.value.trim();
            customCategoryInput.value = '';
            customCategoryInput.style.display = 'none';
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const data = {
            id: parseInt(document.getElementById('id').value, 10),
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            category: document.getElementById('category').value,
            resource: {
                in: document.getElementById('resourceIn').value,
                out: document.getElementById('resourceOut').value,
            },
            author: document.getElementById('author').value,
            video: document.getElementById('video').value,
        };

        // Display JSON
        jsonOutput.textContent = JSON.stringify(data, null, 2);
        outputContainer.style.display = 'block';
    });

    // Copy JSON to clipboard
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(jsonOutput.textContent).then(() => {
            pushToast('Copied to clipboard successfully!', 2000);
        }).catch(() => {
            pushToast('Failed to copy to clipboard.', 2000);
        });
    });
});