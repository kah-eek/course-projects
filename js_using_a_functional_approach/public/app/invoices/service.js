import { statusHandler, partialize, pipe } from "../utils/helpers.js";
import { Maybe } from "../utils/maybe.js";

const URL = "http://localhost:3000/notas";

const getItemsFromNotes = (notesM) => notesM.map(notes => notes.flatMap(({ itens }) => itens));
const filterInvoicesByCode = (code, notesM) => notesM.map(notes => notes.filter(({ codigo }) => codigo === code));
const sumInvoicesValue = notesM => notesM.map(notes => notes.reduce((total, item) => total + item.valor, 0));

const invoicesService = {
  listAll() {
    return fetch(URL)
      .then(statusHandler)
      .then(Maybe.of)
      .catch(error => {
        console.error(error);
        return Promise.reject('Notas fiscais indisponíveis.')
      })
  },

  sumItemsByCodigo(code) {
    const filterInvoices = partialize(filterInvoicesByCode, code)
    const sumInvoices = pipe(getItemsFromNotes, filterInvoices, sumInvoicesValue)

    return this.listAll()
      .then(sumInvoices)
      .then(totalM => totalM.getOrElse(0))
  }
};

export { invoicesService };
