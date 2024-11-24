import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./modules/Header";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Header />

            {/* <Main /> */}

            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;
