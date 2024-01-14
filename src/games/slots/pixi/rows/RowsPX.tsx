import React, { FC, useMemo } from 'react'
import RowPX from './RowPX';
import { SLOT_ROW, TSlotRow } from './utils';
import { Container } from '@pixi/react';
import { useAppSelector } from '../../../../app/store/hooks';
import { selectSlotsRows } from '../../slices/slotsSlice';

interface IRowsPXProps {}

const generateRandomRow = (slotRow: TSlotRow[]) => {
    const clone = [...slotRow];
    clone.sort(() => Math.random() - 0.5);
    return clone;
}

const RowsPX:FC<IRowsPXProps> = ({}) => {
    const rows = useAppSelector(selectSlotsRows)

    const firstSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const secondSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const thirdSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    
    const slotsRows = [firstSlotsRow, secondSlotsRow, thirdSlotsRow];
   
    return (
        <Container
           x={395}
           y={0} 
        >
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