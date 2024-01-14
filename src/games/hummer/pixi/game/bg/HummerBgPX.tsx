import React, { FC } from 'react'
import { Container, Sprite } from '@pixi/react'
import bg from '../../../../../assets/hummer/bg.jpg';

type HummerBgPXProps = {}

const HummerBgPX:FC<HummerBgPXProps> = ({}) => {
    return (
        <Container>
            <Sprite 
                x={0}
                y={0}
                image={bg}
            />
        </Container>
    )
}

export default HummerBgPX;