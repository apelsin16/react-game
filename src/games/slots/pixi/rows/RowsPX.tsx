import {FC, useEffect, useMemo, useRef, useState} from 'react'
import RowPX from './RowPX';
import { SLOT_ROW, TSlotRow } from './utils';
import {Container, Graphics} from '@pixi/react';
import { useAppSelector } from '../../../../app/store/hooks';
import {selectSlotsRows} from '../../slices/slotsSlice';

interface IRowsPXProps {}

const generateRandomRow = (slotRow: TSlotRow[]) => {
    const clone = [...slotRow];
    clone.sort(() => Math.random() - 0.5);
    return clone;
}

const rectangle = {
    X: -100,
    Y: 50,
    WIDTH: 400,
    HEIGHT: 300,
}

const RowsPX:FC<IRowsPXProps> = () => {

    const [loading, setLoading] = useState(false);

    const rows = useAppSelector(selectSlotsRows);

    const firstSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const secondSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const thirdSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    
    const slotsRows = [firstSlotsRow, secondSlotsRow, thirdSlotsRow];

    const { X, Y, WIDTH, HEIGHT } = rectangle;

    const mask = useRef(null);

    useEffect(() => {
        setLoading(true);
    }, []);
   
    return (
        <Container
           x={450}
           y={50}
           mask={mask?.current}
        >
            <Graphics
                draw={g => {
                    g.beginFill(0x000000);
                    g.drawRect(X, Y, WIDTH, HEIGHT);
                    g.endFill();
                }}
                ref={mask}
            />
            {rows.map(((row, idx) => (
                <RowPX 
                    key={row.id} 
                    rowID={row.id}
                    activeItemID={row.activeItemID}
                    slotsRow={slotsRows[idx]}
                />
            )))}
        </Container>
    )
}

export default RowsPX;