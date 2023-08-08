import { styled } from 'styled-components';

export const ContainerGridBanner = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    
    
    & section {
        max-height: 32rem;
        position: relative;
        overflow: hidden;

        &:hover {
            & footer {
                display: flex;
            }
        }

        & footer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.375rem;
            max-width: 25rem;
            width: 100%;

            & h4 {
                color: ${(props) => props.theme['white']};
                font-size: 1.5rem;
                font-weight: 900;
                letter-spacing: 0.36rem;
                text-transform: uppercase;
            }

            & a {
                color: ${(props) => props.theme['white']};
                font-size: 0.75rem;
                font-style: italic;
                font-weight: 800;
                letter-spacing: 0.18rem;
                text-transform: uppercase;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: .81rem;
            }

        }
    }

`;