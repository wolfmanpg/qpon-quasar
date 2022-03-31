import { Notify } from 'quasar';

const showNotification = (message, position, color, textColor = 'white') => {
  Notify.create({
    position,
    message,
    color: color,
    actions: [
      { label: 'Dismiss', color: textColor}
    ],
    textColor
  });
}

const customNotify = (message, position = 'bottom', color = 'green', textColor = 'white') => {
  showNotification(message, position, color, textColor);
}


const successNotify = (message) => {
  showNotification(message, 'bottom', 'green');
}

const errorNotify = (message) => {
  showNotification(message, 'bottom', 'red');
}

const warningNotify = (message) => {
  showNotification(message, 'bottom', 'yellow', 'black');
}

export default {
  successNotify,
  errorNotify,
  warningNotify
}
