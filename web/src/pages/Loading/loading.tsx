import icon from '../../assets/icon1.svg'
import { useSeed, useDelay, useErrorHandler } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import * as Styled from './loading.styles'

export const Loading = () => {
    const navigate = useNavigate()
    const isFinishedDelay = useDelay(3)
    const { data , error, isError} = useSeed()
    useErrorHandler(error, isError)

    useEffect(() => {
        if (data && isFinishedDelay) {
            navigate('Home')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isFinishedDelay])


    return (
        <Styled.Container>
            <Styled.ImageIcon src={icon} />
        </Styled.Container>
    )
}