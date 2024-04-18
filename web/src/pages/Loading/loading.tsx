import icon from '../../assets/icon1.svg'
import { useSeed, useDelay } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import * as Styled from './loading.styles'

export const Loading = () => {
    const navigate = useNavigate()
    const isFinishedDelay = useDelay(3)
    const { data } = useSeed()

    useEffect(() => {
        if (data && isFinishedDelay) {
            console.log(data)
            navigate('Home')
        }
    }, [data, isFinishedDelay])


    return (
        <Styled.Container>
            <Styled.ImageIcon src={icon} />
        </Styled.Container>
    )
}