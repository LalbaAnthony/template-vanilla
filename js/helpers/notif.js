const NOTIFICATION_CONFIG = {
    containerZIndex: 14,
    duration: 3000,
    color: {
        success: 'var(--bs-success)',
        warning: 'var(--bs-warning)',
        danger: 'var(--bs-danger)',
        info: 'var(--secondary)',
    }
};

function notify(content, type = 'success', autoclose = true) {
    
    const possibleType = ['success', 'warning', 'danger', 'info'];
    if (possibleType.includes(type) == false) {
        console.error(`Invalid notification type: ${type}`);
        return;
    }

    // Container
    const notification = document.createElement('div');
    notification.setAttribute('id', 'notification');
    notification.style.cssText = `
        opacity: 1;
        display: flex;
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 200px;
        z-index: ${NOTIFICATION_CONFIG.containerZIndex};
        padding: 10px;
        flex: 1;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        transition: opacity 0.5s;
        color: var(--light);
        background-color: ${NOTIFICATION_CONFIG.color[type]};
    `;

    // Text
    const notificationText = document.createElement('span');
    notificationText.textContent = content;

    // Close button
    const notificationCloseButton = document.createElement('div');
    notificationCloseButton.innerHTML = '&#215;'; // cross logo
    notificationCloseButton.style.cssText = `
        cursor: pointer;
        margin-left: 10px;
        border-radius: 25px;
    `;
    notificationCloseButton.addEventListener('click', function () {
        notification.style.opacity = 0;
        setTimeout(function () {
            notification.style.display = 'none';
            notification.remove();
        }, 500);
    });

    // Append
    notification.appendChild(notificationText);
    notification.appendChild(notificationCloseButton);

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

// TODO: make that shit work
// function clearAllNotifcation() {
//     const notifications = document.querySelectorAll('.notification');
//     notifications.forEach(function (notification) {
//         notification.style.opacity = 0;
//         notification.style.display = 'none';
//         notification.remove();
//     });
// }

