import PropTypes from 'prop-types';
import style from './welcome.module.css';

const Welcome = (props) =>
{
    const { firstname, lastname } = props;

    return (<>
        <p className={style.msg}>
            Hello <span className={style.firstname}>{firstname}</span> {lastname}
        </p>

        <p>test voila !</p>
    </>
    );
}

Welcome.defaultProps = {
    lastname: ''
};

Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string
};

export default Welcome;
