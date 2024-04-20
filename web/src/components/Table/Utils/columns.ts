import { ColDef } from "ag-grid-community";
import { FilterComponent } from "./FilterComponent/FilterComponent";
import { dateComparator } from "./dateComparator";
import { formatDate } from "./formatDate";

export const columnsDef: ColDef[] = [
  { field: "nrAgencia", width: 90, headerName: "Agência" },
  { field: "cdClient" },
  { field: "nrCpfCnpj", filter: FilterComponent, headerName: "CPH/CNPJ" },
  {
    field: "dtContrato",
    comparator: dateComparator,
    valueFormatter: (p) => formatDate(p.value),
  },
  { field: "cdProduto" },
  { field: "nrInst" },
  { field: "nmClient" },
  { field: "nrContrato" },
  { field: "qtPrestacoes" },
  { field: "vlTotal" },
  { field: "cdProduto" },
  { field: "dsProduto" },
  { field: "cdCarteira" },
  { field: "dsCarteira" },
  { field: "nrProposta", filter: FilterComponent, headerName: 'Proposta' },
  { field: "nrPresta" },
  { field: "tpPresta" },
  { field: "nrSeqPre" },
  {
    field: "dtVctPre",
    comparator: dateComparator,
    valueFormatter: (p) => formatDate(p.value),
  },
  { field: "vlPresta" },
  { field: "vlMora" },
  { field: "vlMulta" },
  { field: "vlOutAcr" },
  { field: "vlIof" },
  { field: "vlDescon" },
  { field: "vlAtual" },
  { field: "idSituac" },
  { field: "idSitVen" },
];
