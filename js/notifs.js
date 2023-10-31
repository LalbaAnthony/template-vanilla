function createNotifEl() {
    const notification = document.createElement('div');
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'var(--light)';
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '150px';
    notification.style.padding = '10px';
    notification.style.borderRadius = '0.5rem';
    notification.style.boxShadow = '2px 2px 2px rgba(0, 0, 0, 0.2)';
    notification.style.transition = 'opacity 0.5s';
    notification.style.display = 'none';

    // // Ajoute un bouton "X" pour fermer la notification
    // const closeButton = document.createElement('span');
    // closeButton.textContent = 'X';
    // closeButton.style.cursor = 'pointer';
    // closeButton.style.position = 'absolute';
    // closeButton.style.top = '5px';
    // closeButton.style.right = '5px';
    // closeButton.style.color = 'var(--light)';
    // closeButton.addEventListener('click', function () {
    //     notification.style.opacity = 0;
    //     setTimeout(function () {
    //         notification.style.display = 'none';
    //         notification.remove();
    //     }, 500);
    // });

    // notification.appendChild(closeButton);

    return notification;
}

function notify(content, type = 'success') {

    // Handle color from type
    color = 'var(--primary)';
    if (type === 'success') color = 'var(--bs-sucess)';
    else if (type === 'warning') color = 'var(--bs-warning)';
    else if (type === 'danger') color = 'var(--bs-danger)';

    // Create notification element
    let notification = createNotifEl();
    notification.style.backgroundColor = color;
    document.body.appendChild(notification);

    notification.textContent = content;
    notification.style.opacity = 1;
    notification.style.display = 'block';

    setTimeout(function () {
        notification.style.opacity = 0;
        notification.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    notify("Hello world !");
});
