import style from './hello-person-cond.module.css';
import PropTypes from "prop-types";

const HelloPersonCond = (props) =>
{
    const { name, age } = props;

    if(name.length <= 1)
    {
        return (
            <div>
                Vous n'avez pas un nom assez long!
            </div>
        );
    }

    return (
        <div>
            <p className={style.helloName}>Bienvenue {name} sur l'application React!</p>
            {age === 18?
                <p>Vous avez 18 ans!</p>
                :
                <p>Vous n'avez pas 18 ans</p>
            }
        </div>
    );
}

HelloPersonCond.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

HelloPersonCond.defaultProps = {
    age: 18
};

export default HelloPersonCond;
