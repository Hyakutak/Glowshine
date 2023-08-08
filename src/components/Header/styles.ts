import { styled } from 'styled-components';

export const ContainerHeader = styled.header`
    width: 100vw;
    position: absolute;
    top: 1.875rem;
    z-index: 2;
    padding: 1rem 6.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & nav {
        display: flex;
        gap: 1rem;

        & a {
            color: ${(props) => props.theme['white']};
            font-size: 0.875rem;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
        }
    }
`;

export const HeaderIcons = styled.header`
    display: flex;
    gap: .63rem;

    & div {
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['border-color']};
        padding: 0.75rem 0.5rem;
        width: 11.625rem;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['white']};

        & input {
            border: 0;
            background: transparent;
            font-family: 'Nunito';
            font-size: 0.75rem;
            font-weight: 400;
            letter-spacing: 0.03125rem;

            &::placeholder {
                opacity: .32;
            }
        }
    }

    & a {
        color: ${(props) => props.theme['white']};
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: .5rem;
        font-family: 'Jost';
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.03125rem;
        display: flex;
        gap: .25rem;
    }
`;