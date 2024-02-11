import { useNavigate } from "react-router-dom"

const Second = () => {

    const navigate = useNavigate()

    return(
        <>
        <h3>ABOUT PAGES</h3>
        <button onClick={() => navigate ('/')}>Kembali</button>
        </>
    )
}

export default Second