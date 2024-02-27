const listeners = new Map();

export const EventEmitter = {
  on(event, listener) {
    if (!listeners.get(event)) listeners.set(event, []);
    listeners.get(event).push(listener);
  },

  emit(event, data) {
    const eventListeners = listeners.get(event);
    if (eventListeners) eventListeners.forEach((eventListener) => eventListener(data));
  },
};
