import * as React from 'react';
import styled from 'styled-components';

interface Props {
    /**
     * Click event handler
     * @default null
     */
    onClick?: () => void;

    primary?: boolean;
}

const StyledButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props: Props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props: Props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

//without this Enzime doesn't find the button :(
StyledButton.displayName = 'StyledButton';

const Button: React.SFC<Props> = ({ children, onClick, primary }): React.ReactElement => (
    <StyledButton type="button" onClick={onClick} primary={primary}>
        {children}
    </StyledButton>
);

export default Button;
