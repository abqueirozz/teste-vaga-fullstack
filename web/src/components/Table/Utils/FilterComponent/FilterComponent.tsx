import { CustomFloatingFilterProps } from "ag-grid-react"
import { useRef, useState } from "react"
import { Button, TextInput } from "../../.."
import { useAtom } from "jotai"
import { filterAtom } from "../../../../jotai/filterAtoms"

import * as Styled from './FilterComponent.styles'

interface FilterProps extends CustomFloatingFilterProps {

}

export const FilterComponent = ({ column, api }: FilterProps) => {
    const textRef = useRef<HTMLInputElement | null>(null)
    const [colName,] = useState(column.getColDef().headerName ?? '')
    const [, setFilter] = useAtom(filterAtom);

    const handleFilterSelect = () => {
        if(textRef.current?.value )
            setFilter((prev) => ({ ...prev, [column.getColId()]: textRef.current?.value }))
        else
        setFilter((prev) => ({ ...prev, [column.getColId()]: undefined}))

        api.destroyFilter(column)
    }

    return (<>
        <Styled.Container>
            <TextInput text={colName} ref={textRef} autoFocus />
            <Styled.ButtonContainer>
                <Button onClick={handleFilterSelect}>Procurar</Button>
            </Styled.ButtonContainer>
        </Styled.Container>
    </>)
}