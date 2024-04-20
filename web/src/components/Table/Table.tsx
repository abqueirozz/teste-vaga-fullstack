import { useEffect, useMemo, useReducer, useState } from 'react';
import { ColDef } from 'ag-grid-community';
import { TransactionDataType } from '../../@types/api/Transaction';
import { AgGridReact } from 'ag-grid-react';
import { useErrorHandler, useGetTransactions, usePagination } from '../../hooks';
import { filterAtom } from '../../jotai/filterAtoms';
import { columnsDef } from './Utils/columns';
import { useAtom } from 'jotai';
import { FilterTransactionType } from '../../@types/api/FilterTransaction';
import { Badges } from '../Badges/Badges';
import { PaginationComponent } from './Utils/PaginationComponent/PaginationComponent';

import * as Styled from './Table.styled'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export const Table = () => {
    const [rowData, setRowData] = useState<TransactionDataType[]>();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filter, setFilter] = useAtom(filterAtom);
    const [state, dispatch] = useReducer(usePagination, { page: 1 });

    const { data: res, isSuccess, refetch, isError, error } = useGetTransactions(String(1), filter)
    useErrorHandler(error, isError)
    useEffect(() => {
        console.log('refatching')
        refetch()
    }, [filter, refetch])

    const containerStyle = useMemo(() => ({ width: "80%", height: "80%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

    const [columnDefs,] = useState<ColDef[]>(columnsDef);

    useEffect(() => {
        if (isSuccess && res?.data)
            setRowData(() => res?.data.data)
    }, [isSuccess, res?.data])

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            width: 170,

        };
    }, []);

    const populateBadges = useMemo(() => {
        return Object.keys(filter).map((key) => {
            const value = filter[key as keyof FilterTransactionType];
            return value ? (
                <Badges text={key} hasX onClick={() => { setFilter((prev) => ({ ...prev, [key]: undefined })) }} />
            ) : null
        });
    }, [filter, setFilter])

    return (
        <Styled.Container>
            <Styled.BadgesContainer>
                {...populateBadges}
            </Styled.BadgesContainer>
            <div style={containerStyle}>
                <div
                    style={gridStyle}
                    className={
                        "ag-theme-quartz"
                    }
                >
                    <AgGridReact<TransactionDataType>
                        reactiveCustomComponents={true}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                        suppressMenuHide={true}
                    />
                </div>
            </div>
            <PaginationComponent size={res?.data.total} state={state} dispatch={dispatch} />
        </Styled.Container>
    );
};