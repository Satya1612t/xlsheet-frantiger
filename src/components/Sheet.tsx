import Cell, { CELL_HEIGHT, CELL_WIDHT } from "./Cell"
import Column from "./Column"
import Row from "./Row"
import { SheetSizeState } from "../store/SheetSizeState"
import { useRecoilValue } from "recoil"
import AxisCell from "./AxisCell"

type Props = {}

function Sheet({ }: Props) {

  const sheetSize = useRecoilValue(SheetSizeState);
  const numberOfColumns = sheetSize.width / CELL_WIDHT;
  const numberOfRows = sheetSize.height /  CELL_HEIGHT;

  return (
    <table className="border-spacing-0">
      <tbody className="">
        <Row>
            {[...Array(numberOfColumns + 1)].map((_, colIndex) => (
             colIndex !== 0 ?  <AxisCell >
                {String.fromCharCode(64 + colIndex)}
              </AxisCell> : <AxisCell>{""}</AxisCell>
            ))}
        </Row>
        {[...Array(numberOfRows)].map((_, rowIndex) => (
          <Row key={rowIndex}>
            <AxisCell>{rowIndex + 1}</AxisCell>
              {[...Array(numberOfColumns)].map((_, colIndex) => (
                 <Column key={colIndex}>
                 <Cell cellId={`${rowIndex},${colIndex}`} />
               </Column>
              ))}
          </Row>
        ))}
      </tbody>
    </table>
  )
}

export default Sheet