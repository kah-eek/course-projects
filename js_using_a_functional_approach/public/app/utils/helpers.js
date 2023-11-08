export const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((currentValue, fn) => fn(currentValue), initialValue);

export const log = (param) => {
  console.log(param);
  return param;
};

export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((currentValue, fn) => fn(currentValue), initialValue);

export const statusHandler = (response) =>
  response.ok ? response.json() : Promise.reject(response.statusText);

export const takeUntil = (times, fn) => () => void (times-- > 0 && fn());

export const debounce = (milliseconds, fn) => {
  let timeoutId;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, milliseconds);
  };
};

export const timeout = (milliseconds, promise) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(
      () => reject(`Limited of ${milliseconds}ms exceeded.`),
      milliseconds
    )
  );

  return Promise.race([promise, timeoutPromise]);
};

export const delay = (milliseconds) => (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), milliseconds));

export const retry = (retries, millisecondsDelay, fn) =>
  fn().catch((error) =>
    delay(millisecondsDelay)().then(() =>
      retries >= 1
        ? retry(--retries, millisecondsDelay, fn)
        : Promise.reject(error)
    )
  );
