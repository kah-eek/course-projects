import { statusHandler, partialize, pipe } from "../utils/helpers.js";

const URL = "http://localhost:3000/notas";

const getItemsFromNotes = (notes) => notes.flatMap(({ itens }) => itens);
const filterInvoicesByCode = (code, notes) => notes.filter(({ codigo }) => codigo === code);
const sumInvoicesValue = notes => notes.reduce((total, item) => total + item.valor, 0);

const invoicesService = {
  listAll() {
    return fetch(URL)
      .then(statusHandler)
      .catch(error => {
        console.error(error);
        return Promise.reject('Notas fiscais indisponíveis.')
      })
  },

  sumItemsByCodigo(code) {
    const filterInvoices = partialize(filterInvoicesByCode, code)
    const sumInvoices = pipe(getItemsFromNotes, filterInvoices, sumInvoicesValue)

    return this.listAll().then(sumInvoices)
  }
};

export { invoicesService };
