import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store";

export enum SlotLifecycle {
    READY_TO_START = 'start',
    PLAY = 'play',
    STOPPING = 'stopping',
    STOP = 'stop',
    INFO = 'info',
  }

export enum SlotsWinOrLose {
    WIN = 'win',
    LOSE = 'lose'
}  

export interface ISlotsRow {
    id: number
    activeItemID: number
}   

interface ISlots {
    lifecycle: `${SlotLifecycle}`;
    rows: ISlotsRow[];
    winOrLose: `${SlotsWinOrLose}` | null;
    currentBet: number;
} 

const initialState: ISlots = {
    lifecycle: SlotLifecycle.READY_TO_START,
    rows: [
        {
            id: 1,
            activeItemID: 7 
        },
        {
            id: 2,
            activeItemID: 7 
        },
        {
            id: 3,
            activeItemID: 7 
        }
    ],
    winOrLose: null,
    currentBet: 0
}

const slotsSlice = createSlice({
    initialState,
    name: 'slots',
    reducers: {
        setSlotsLifecycle: (state, action: PayloadAction<SlotLifecycle>) => {
            state.lifecycle = action.payload;
        }, 
        startSlots: (state) => {
            state.lifecycle = SlotLifecycle.PLAY;
            state.rows = state.rows.map((row) => ({
                ...row,
                activeItemID: Math.ceil(Math.random() * 12)
            }));
            const arrayActiveItemsID = state.rows.map(row => row.activeItemID);
            const firstItem = arrayActiveItemsID[0];

            const win = arrayActiveItemsID.every(el => el === firstItem);
            state.winOrLose = win ? SlotsWinOrLose.WIN : SlotsWinOrLose.LOSE
        },
        setSlotsCurrentBet: (state, action: PayloadAction<number>) => {
            if((state.currentBet + action.payload) < 0) {
                state.currentBet = 0;
            } else {
                state.currentBet = state.currentBet + action.payload;
            }
        },
    }
})

export const {
    setSlotsLifecycle,
    startSlots,
    setSlotsCurrentBet
} = slotsSlice.actions;

export const selectSlotsLifecycle = (state: RootState) => state.slots.lifecycle;
export const selectSlotsRows = (state: RootState) => state.slots.rows;
export const selectSlotsCurrentBet = (state: RootState) => state.slots.currentBet;
export const selectSlotsWinOrLose = (state: RootState) => state.slots.winOrLose;

export default slotsSlice.reducer;