const withStyles = (Component) => {
    const ComponentWithStyles = (props) => {
        const style = {
            padding: '0.2rem',
            margin: '1rem',
            backgroundColor: 'coral',
        };
        
        return <Component {...props} style={style} />;
    };

    return ComponentWithStyles;
};

const Button = ({ onClick, text, style }) => (
    <button onClick={onClick} style={style}>{text}</button>
);
const Text = ({ text, style }) => <p style={style}>{text}</p>;

export const StyledButton = withStyles(Button);
export const StyledText = withStyles(Text);
