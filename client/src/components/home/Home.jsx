import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about')
    };

    return (
        <main>
        <h1>WELCOME TO THE ART COMPANY</h1>
        <div className="button-container">
          <button className="ClickME" role="button" onClick={handleClick}>Click Me, Please</button>
        </div>
    </main>
    );
}