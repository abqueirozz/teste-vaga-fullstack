import { Dispatch, useMemo } from 'react';
import { PageAction, PageActionType, PageState, } from '../../../../hooks';

import * as Styled from './Pagination.styles'

interface PaginationComponentProps {
    state: PageState
    dispatch: Dispatch<PageAction>
    size?: number
}

export const PaginationComponent = ({ state, dispatch, size = 1 }: PaginationComponentProps) => {
    const pages = useMemo(() => Math.floor(size / 100), [size]) 
    return (
        <Styled.Container>
            <Styled.Button disabled={state.page === 1} onClick={() => dispatch({ type: PageActionType.DECREASE })}>Prev</Styled.Button>
            <Styled.Message>página {pages === 0 ? 1 : state.page} de {pages > 0 ? pages : 1}</Styled.Message>
            <Styled.Button disabled={state.page >= pages} onClick={() => dispatch({ type: PageActionType.INCREASE })}>Next</Styled.Button>
        </Styled.Container>
    )
}