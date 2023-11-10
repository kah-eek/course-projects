import { invoicesService as invoices } from "./invoices/service.js";
import { EventEmitter } from "./utils/eventEmitter.js";
import { compose, debounce, partialize, retry, takeUntil, timeout } from "./utils/helpers.js";

const operations = compose(
  partialize(debounce, 500),
  partialize(takeUntil, 3)
)

const handleClick = operations(() => 
  retry(3, 2 * 1000, () => timeout(200, invoices.sumItemsByCodigo("2143")))
    .then((total) => EventEmitter.emit('totalInvoice', total))
    .catch(console.error)
)

document.querySelector("#myButton").onclick = handleClick;
