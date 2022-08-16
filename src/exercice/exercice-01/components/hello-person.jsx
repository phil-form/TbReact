import style from './hello-person.module.css'
import PropTypes from "prop-types";

const HelloPerson = (props) =>
{
    const { name, age } = props;

    return (
        <div>
            <p className={style.helloName}>Bienvenue {name} sur l'application React!</p>
            <p>Vous avez {age} ans!</p>
        </div>
    );
}

HelloPerson.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

HelloPerson.defaultProps = {
    age: 18
};

export default HelloPerson;
