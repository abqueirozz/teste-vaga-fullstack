import { atom } from 'jotai'
import { FilterTransactionType } from '../@types/api/FilterTransaction'

export const filterAtom = atom<FilterTransactionType>({})