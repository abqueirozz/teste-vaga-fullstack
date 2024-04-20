import { Dispatch } from 'react';
import { PageAction, PageActionType, PageState, } from '../../../../hooks';

import * as Styled from './Pagination.styles'

interface PaginationComponentProps {
    state: PageState
    dispatch: Dispatch<PageAction>
    size?: number
}

export const PaginationComponent = ({ state, dispatch, size = 1 }: PaginationComponentProps) => {
    return (
        <Styled.Container>
            <Styled.Button disabled={state.page === 1} onClick={() => dispatch({ type: PageActionType.DECREASE })}>Prev</Styled.Button>
            <Styled.Message>página {Math.floor(size / 100) === 0 ? 1 : state.page} de {size > 0 ? size : 1}</Styled.Message>
            <Styled.Button disabled={state.page >= size} onClick={() => dispatch({ type: PageActionType.INCREASE })}>Next</Styled.Button>
        </Styled.Container>
    )
}