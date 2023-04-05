import { useState } from "react";
import"./App.css";

function Tabs() {
    
    const [toggleState, setToggleState] = useState(1);
        const toggleTab = () => {
            console.log("Hello world");
        }

    return (

        <div className="container">

            <div className="bloc-tabs">
                <div className="tabs active-tabs"
                onClick={toggleTab}
                >Tab 1</div>
                <div className="tabs">Tab 2</div>
                <div className="tabs">Tab 3</div>
                <div className="tabs">Tab 4</div>
            </div>
            <div className="content-tabs">

                <div className="content active-content">
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Kakkea
                    </p>
                </div>

                <div className="content">
                <h2>Content w</h2>
                <hr />
                <p>
                    Paskea
                </p>
                </div>

                <div className="content">
                <h2>Content w</h2>
                <hr />
                <p>
                    Paskea
                </p>
                </div>

            </div>
        </div>
    );
}

export default Tabs;
