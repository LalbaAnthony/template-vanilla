const NOTIFICATION_CONFIG = {
    maxWidth: '200px',
    zIndex: 14,
    duration: 3000,
};

function notify(content, type = 'success', autoclose = true) {

    // Container
    const notification = document.createElement('div');
    notification.style.cssText = `
        opacity: 1;
        display: flex;
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: ${NOTIFICATION_CONFIG.maxWidth};
        z-index: ${NOTIFICATION_CONFIG.zIndex};
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
    closeButton.innerHTML = '&#215;';
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
        }, NOTIFICATION_CONFIG.duration);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    notify("Hello world !", "success", true);
    // setTimeout(function () {
    //     notify("Hello world ! 2", "success", true);
    // }, 500);
});

