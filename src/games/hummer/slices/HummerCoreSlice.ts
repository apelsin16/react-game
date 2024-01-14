import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { IHummerPit, MOCK_PITS } from "./models/Pit";

export enum HummerScenes {
  MENU = 'menu',
  GAME = 'game'
}

const DEFAULT_SCORE = 1000;
const START_HEALTH = 3;

interface IHummer {
  scene: `${HummerScenes}`;
  pits: IHummerPit[];
  score: number,
  health: number, 
  gameOver: boolean
}

const initialState: IHummer = {
  scene: HummerScenes.MENU,
  pits: MOCK_PITS,
  score: DEFAULT_SCORE,
  health: START_HEALTH,
  gameOver: false
}

const hummerCoreSlice = createSlice({
  initialState,
  name: 'hummerCoreSlice',
  reducers: {
    setHummerScene: (state, action: PayloadAction<HummerScenes>) => {
      state.scene = action.payload;
    },
    setHummerPits: (state, action: PayloadAction<{
      currentIndex: number;
      state: IHummerPit['state'];
    }>) => {
      const newPitsState = state.pits.map((pit, pitIndex) => {
        if (action.payload.currentIndex === pitIndex) {
          return ({
            ...pit,
            state: action.payload.state,
          });
        } else {
          return pit;
        }
      });

      state.pits = [...newPitsState];
    },
    setHummerScore: (state, action: PayloadAction<number>) => {
      if(state.score + action.payload < 0) {
        if(state.health -1 <= 0 ) {
          state.gameOver = true;
        } else {
          state.health = state.health - 1;
          state.score = DEFAULT_SCORE;
        }
      } else {
        state.score = state.score + action.payload
      }
    }
  }
});

export const {
  setHummerScene,
  setHummerPits,
  setHummerScore
} = hummerCoreSlice.actions;

export const selectHummerScene = (state:RootState) => state.hummerCoreSlice.scene;
export const selectHummerPits = (state:RootState) => state.hummerCoreSlice.pits;
export const selectHummerScore = (state:RootState) => state.hummerCoreSlice.score;
export const selectHummerHealth = (state:RootState) => state.hummerCoreSlice.health;
export const selectHummerGameOver = (state:RootState) => state.hummerCoreSlice.gameOver;

export default hummerCoreSlice.reducer;