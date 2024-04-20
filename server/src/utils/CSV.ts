import fs from "fs";
import csv from "csv-parser";
import { cpf, cnpj } from "cpf-cnpj-validator";
import { TransactionCSVType } from "../@types/transaction";
import { formatCurrency, formatObjectCurrency } from "./formatCurrency";
import { formatObjectDate } from "./formatDate";

export class CSV {
  private file = "";

  constructor(file: string) {
    this.file = file;
  }

  public async readCSV(): Promise<Array<TransactionCSVType>> {
    return new Promise((resolve, reject) => {
      const results: TransactionCSVType[] = [];

      fs.createReadStream(this.file)
        .pipe(csv())
        .on("data", (data) => {
          const res = this.validateRow(data);
          return res ? results.push(res) : false;
        })
        .on("error", (error) => reject(error))
        .on("end", () => {
          resolve(results);
        });
    });
  }

  private validateRow(row: TransactionCSVType) {
    const {
      nrCpfCnpj,
      vlTotal,
      vlDescon,
      vlMora,
      vlAtual,
      vlIof,
      vlMulta,
      vlPresta,
      vlOutAcr,
      dtContrato,
      dtVctPre,
    } = row;
    if (this.isValidCPFOrCNPJ(nrCpfCnpj)) return false;

    if (this.validateMora(vlMora, vlTotal, vlDescon)) {
      return false;
    }

    const newCurrencyFormat = formatObjectCurrency({
      vlTotal,
      vlDescon,
      vlMora,
      vlAtual,
      vlIof,
      vlMulta,
      vlPresta,
      vlOutAcr,
    });

    const newDateFormat = formatObjectDate({ dtContrato, dtVctPre });

    return { ...row, ...newCurrencyFormat, ...newDateFormat };
  }

  private isValidCPFOrCNPJ(nrCpfCnpj: string) {
    return cpf.isValid(nrCpfCnpj) || cnpj.isValid(nrCpfCnpj);
  }

  private validateMora(
    valorMora: string,
    valorTotal: string,
    valorDesconto: string
  ) {
    return parseInt(valorMora) > parseInt(valorTotal) - parseInt(valorDesconto);
  }
}
