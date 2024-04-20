import { ColDef } from "ag-grid-community";
import { FilterComponent } from "./FilterComponent/FilterComponent";
import { dateComparator } from "./dateComparator";

export const columnsDef: ColDef[] = [
  { field: "nrAgencia", width: 90, headerName: "Agência" },
  { field: "cdClient" },
  { field: "nrCpfCnpj", filter: FilterComponent, headerName: "CPH/CNPJ" },
  { field: "dtContrato", comparator: dateComparator },
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
  { field: "nrProposta" },
  { field: "nrPresta" },
  { field: "tpPresta" },
  { field: "nrSeqPre" },
  { field: "dtVctPre" },
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
