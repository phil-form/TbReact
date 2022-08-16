import PropTypes from 'prop-types';
import style from './welcome.module.css';


const Welcome = (props) => {

    return (
        <>
            <p className={style.msg}>Bienvenue {props.name} sur l'application React!</p>
            <p className={style.age}>Vous avez {props.age} ans!</p>
        </>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

Welcome.defaultProps = {
    age: 18
};

export default Welcome;