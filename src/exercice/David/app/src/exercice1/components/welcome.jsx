import PropTypes from "prop-types";
import style from "./welcome.module.css"

const Welcome = function (props) {
    return (
        <div className="welcomeBar">
            <p className={style.ayan}>Bievenue {props.name} sur l'application React!</p>
            <p className={style.ayan2}>Vous avez {props.age} ans!</p>
        </div>
    );
};

Welcome.defaultProps = {
    age: 18
};

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default Welcome;