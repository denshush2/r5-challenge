import styles from 'styled-components';

export const HomeComponent = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const InputSearchComponent = styles.input`
    width: 40%;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    :focus {
        outline: none;
    }
`;
