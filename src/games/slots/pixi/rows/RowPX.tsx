import { FC, useState } from 'react'
import { Container, Sprite, useTick } from '@pixi/react';
import { TSlotRow } from './utils';
import { useAppSelector } from '../../../../app/store/hooks';
import { SlotLifecycle, selectSlotsLifecycle } from '../../slices/slotsSlice';

interface IRowPXProps {
    rowID: number;
    activeItemID: number;
    slotsRow: TSlotRow[];
}

const ITEM_HEIGHT = 100;
const SPEED = 40;
const DELTA_ALIGN_CENTER = 200;

const RowPX:FC<IRowPXProps> = ({
    slotsRow, 
    activeItemID,
    rowID
}) => {
    const lifecycle = useAppSelector(selectSlotsLifecycle);
    const isStopping = lifecycle === SlotLifecycle.STOPPING;
    const isPlaying = lifecycle === SlotLifecycle.PLAY;

    const FULL_HEIGHT_ROW = slotsRow.length * ITEM_HEIGHT;
    const currentIndexRowItem = slotsRow.findIndex(rowItem => rowItem.id === activeItemID);
    const currentPosition = -(currentIndexRowItem * ITEM_HEIGHT) - DELTA_ALIGN_CENTER;
    const startPosition = currentPosition - FULL_HEIGHT_ROW;
    const speed = isStopping || isPlaying ? SPEED : 0;
    
    const [position, setPosition] = useState(-FULL_HEIGHT_ROW);
    const [fixPosition, setFixPosition] = useState(false);


    useTick((delta) => {
        if(position >= FULL_HEIGHT_ROW) {
            setPosition(-FULL_HEIGHT_ROW);
        } else {
            setPosition(position + (speed * delta));
        }

        if(isStopping && !fixPosition) {
            setPosition(startPosition);
            setFixPosition(true);
        }
        if(isStopping && fixPosition) {
            const koefC = currentPosition - position;

            if(koefC > 0) {
                setPosition(position + (speed * delta))
            } else {
                setPosition(currentPosition);
            }
        }
    });
    

    return (
        <Container
            x={(rowID-1) * 120}
            y={position}
        >
            <Container
                y={-(FULL_HEIGHT_ROW)}
            >
                {slotsRow.map((row, idx) => (
                    <Sprite 
                        key={row.id}
                        image={row.image}
                        x={0}
                        y={idx * ITEM_HEIGHT}
                        anchor={0.5}
                        scale={0.5}
                    />
                ))}
            </Container>
            <Container>
                {slotsRow.map((row, idx) => (
                    <Sprite 
                        key={row.id}
                        image={row.image}
                        x={0}
                        y={idx * ITEM_HEIGHT}
                        anchor={0.5}
                        scale={0.5}
                    />
                ))}
            </Container>
            <Container
                y={FULL_HEIGHT_ROW}
            >
                {slotsRow.map((row, idx) => (
                    <Sprite 
                        key={row.id}
                        image={row.image}
                        x={0}
                        y={idx * ITEM_HEIGHT}
                        anchor={0.5}
                        scale={0.5}
                    />
                ))}
            </Container>
        </Container>
    )
}

export default RowPX;