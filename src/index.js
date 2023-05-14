import ReactDOM from 'react-dom'

import App from './App.jsx'
import Documentation from './Documentation.jsx'
import Composants from './Composants.jsx'

import NavComposant from './components/NavComposant.jsx'
import FormComposant from './components/FormComposant.jsx'
import FooterComposant from './components/FooterComposant.jsx'
import PositionComposant from './components/PositionComposant.jsx'
import BtnComposant from './components/BtnComposant.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "documentation",
        element: <Documentation />,
    },
    {
        path: "composants",
        element: <Composants />,
    },
    {
        path: "composants/navbar",
        element: <NavComposant />,
    },
    {
        path: "composants/form",
        element: <FormComposant />,
    },
    {
        path: "composants/footer",
        element: <FooterComposant />,
    },
    {
        path: "composants/position",
        element: <PositionComposant />,
    },
    {
        path: "composants/bouton",
        element: <BtnComposant />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
)

