import CellSquare from "./CellSquare";

function Board() {

    // const [cellData, setCellData] = useState(null);

    return (
        <div className="board">
            <CellSquare />
            <CellSquare />
            <CellSquare />
            <CellSquare />
            <CellSquare />
            <CellSquare />
            <CellSquare />
            <CellSquare />
            <CellSquare />
        </div>
        // will do a autofill to 9 cells.
    )
}

export default Board