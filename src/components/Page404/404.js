import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px','color': 'white'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px','color': 'white'}} to="/ToDo-React-API">Back to main page</Link>
        </div>
    )
}

export default Page404;