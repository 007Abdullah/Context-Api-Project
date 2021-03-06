import { useHistory } from 'react-router-dom'
import { useGlobalState, useGlobalStateUpdate } from "./../../Context/globalContext"


function Signup() {

    const globalState = useGlobalState();
    const setGlobalState = useGlobalStateUpdate();

    var history = useHistory();
    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <div>
                <h1>Signup</h1>

                <button onClick={() => {
                    setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
                }}>Toggle</button>

                {'===>' + JSON.stringify(globalState)}

                <br />Name : <input type="text" />
                <br />Email : <input type="text" />
                <br />Password : <input type="text" />
                <br />Re-Password : <input type="text" />
                <br /><button>Submit</button>

                <br /> <button onClick={handleClick}>I already have an account take me back to login page</button>

            </div>
        </>
    )
}

export default Signup;