import { useNavigate } from "react-router-dom"

const First = () => {

    const naviGate = useNavigate()

    return(
        <>
        <h3>HOMPAGE ROUTE</h3>
        <button onClick={() => naviGate ('/about')}>Masuk</button>
        </>
    )
}

export default First