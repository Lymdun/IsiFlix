import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROOT_ROUTE } from './routes';


export default function RouterIsiflix() {
    return (
        <Router>
        <Routes>
        <Route path={ROOT_ROUTE}  />
        {/* <Route path="*" /> */}
        </Routes>

        </Router>
    );
}