import PropTypes from "prop-types";

const Button = ({text, color, onClick}) => {
    return (
        <div>
            <button style = {{backgroundColor: color}} className = "btn" onClick = {onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
