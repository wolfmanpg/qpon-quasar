import { Notify } from 'quasar';

const successNotify = (message, position = 'bottom', color = 'green') => {
  Notify.create({
    position,
    message,
    color: color,
    actions: [
      { label: 'Dismiss', color: 'white'}
    ],
  });
}

const errorNotify = (message, position = 'bottom', color = 'red') => {
  Notify.create({
    position,
    message,
    color: color,
    actions: [
      { label: 'Dismiss', color: 'white'}
    ],
  });
}

export default {
  successNotify,
  errorNotify
}
