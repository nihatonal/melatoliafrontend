import { useRef } from "react";

import './Accordion.css';

const Accordion = (props) => {
    const contentEl = useRef();

    return (
        <li className={`accordion_item ${props.active ? "active" : ""}`} id={props.id}>
            <button className={props.active ? "accordion_title open_drop" : "accordion_title"} onClick={props.handleToggle}>
                {props.title}
            </button>
            <div
                ref={contentEl}
                className="accordion_drop_item"
                style={
                    props.active 
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >

                {props.children}

            </div>
        </li>
    );
};

export default Accordion;