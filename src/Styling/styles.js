import styled from 'styled-components';

export const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`
};

export const COLORS = {
    pink: '#F86E6E',
    lightGreen: '#EDFFE4',
    green: '#70D140',
    lightBlue: '#E8F3FF',
    blue: '#1581FF',
    lightOrange: '#FFE9C8',
    orange: '#FFA115',
    lightYellow: '#FEEEAF',
    yellow: '#FDC500'
};

export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 2000px;
    margin: 0 auto;
    display: flex;
    background-color: ${({ theme }) => theme.main};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RightContainer = styled(Container)`
    margin: 50px 30px 0 30px;
    width: calc(100% - 240px);

    @media (${QUERIES.large}) {
        margin: 50px auto 0 auto;
        width: 65%;
        max-width: 800px;
    }
`;
