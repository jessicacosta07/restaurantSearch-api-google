import ReactDOM from "react-dom";

const portalModal = ({ children }) =>{
    const portal = document.getElementById('modal-root');
    return ReactDOM.createPortal(children, portal);
};

export default portalModal;

