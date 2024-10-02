import { useRouteError } from "react-router-dom";
function Error(){
    const err=useRouteError();
    console.log(err)
    return(
        <>
        <h1>Oops!!</h1>
        <h2>Please Enter correct Path</h2>
        <h3>{err.status} {err.statusText}</h3>
        <h4>{err.data}</h4>
        </>
    )
}
export default Error;