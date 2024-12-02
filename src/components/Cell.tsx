import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import { CellValueState } from "../store/CellValueState";
import { EvaluatedCellValueState } from "../store/EvaluateCellValueState";

export type CellProps = {
    cellId: string,
};

export const CELL_HEIGHT = 25;
export const CELL_WIDHT = 100;

function Cell({ cellId }: CellProps) {
    const [cellValue, setCellValue] = useRecoilState<string>(CellValueState(cellId))
    const evaluatedCellValueState = useRecoilValue<string>(EvaluatedCellValueState(cellId))
    console.log(evaluatedCellValueState); // here it is calculated but not update in div
    const [isEditMode, setIsEditMode] = useState(false);
    const cellRef = useRef(null);
    const changeLableToCell = () => setIsEditMode(true);
    const changeCellToLabel = () => setIsEditMode(false);

    const handleCLickOutside = (event: MouseEvent) => {
        if ((event.target as HTMLElement)?.dataset?.cellId !== cellId) {
            changeCellToLabel();
        }
    }

    const handleUpdateCellValueState = (e: ChangeEvent<HTMLInputElement>) => {
        setCellValue(e.target.value);
    }

    useEffect(() => {
        document.addEventListener('click', handleCLickOutside);

        return () => {
            document.removeEventListener('click', handleCLickOutside);
        }

    }, [])

    return isEditMode ? <input className="w-full h-full focus:outline-green-900" ref={cellRef} data-cell-id={cellId} value={cellValue} onChange={handleUpdateCellValueState} /> : <div className="w-full h-full text-clip whitespace-nowrap overflow-auto p-[2px] leading-4" data-cell-id={cellId} onClick={changeLableToCell}>{evaluatedCellValueState}</div>
}

export default Cell