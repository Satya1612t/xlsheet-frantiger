import { atom } from "recoil";

export const SheetSizeState =  atom({
    key: 'SheetSize',
    default: {
        width: 2600,
        height: 1000,
    }
})