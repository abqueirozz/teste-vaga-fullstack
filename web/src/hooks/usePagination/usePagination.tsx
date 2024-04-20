export enum PageActionType {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
}

export interface PageAction {
    type: PageActionType;
}

export interface PageState {
    page: number;
}

export const usePagination = (state: PageState, action: PageAction) => {
    const { type } = action;
    switch (type) {
        case PageActionType.INCREASE:
            return {
                page: state.page + 1,
            };
        case PageActionType.DECREASE:
            if (state.page - 1 > 0)
                return {
                    page: state.page - 1,
                };
            else
                return state
        default:
            return state;
    }

}