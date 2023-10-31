function notify(content, type = 'success', autoclose = true) {

    // Container
    const notification = document.createElement('div');
    notification.style.cssText = `
        opacity: 1;
        display: flex;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        max-width: 150px;
        padding: 10px;
        flex: 1;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        transition: opacity 0.5s;
        color: var(--light);
        background-color: ${type === 'success' ? 'var(--bs-success)' : type === 'warning' ? 'var(--bs-warning)' : type === 'danger' ? 'var(--bs-danger)' : 'var(--primary)'};
    `;

    // Text
    const notificationText = document.createElement('span');
    notificationText.textContent = content;

    // Close button
    const closeButton = document.createElement('div');
    closeButton.textContent = 'X';
    closeButton.style.cssText = `
        cursor: pointer;
        margin-left: 10px;
        border-radius: 25px;
    `;
    closeButton.addEventListener('click', function () {
        notification.style.opacity = 0;
        setTimeout(function () {
            notification.style.display = 'none';
            notification.remove();
        }, 500);
    });

    // Append
    notification.appendChild(notificationText);
    notification.appendChild(closeButton);

    // Append to document
    document.body.appendChild(notification);

    // Auto close
    if (autoclose) {
        setTimeout(function () {
            notification.style.opacity = 0;
            setTimeout(function () {
                notification.style.display = 'none';
                notification.remove();
            }, 500);
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    notify("Hello world !", "success", false);
});
