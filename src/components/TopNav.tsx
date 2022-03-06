import styled from 'styled-components';

const TopNavWrapper = styled.div`
    color: blue;
`
const TopNavItems = styled.ul`
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const TopNavItem = styled.a`
    &: hover{
        text-decoration: underline;
    }
    padding: 0.4em;
`

const TopNav = () => {
    return (
        <TopNavWrapper>
            <TopNavItems>
                <TopNavItem>See Projects</TopNavItem>
                <TopNavItem>Reach Out</TopNavItem>
                <TopNavItem>Share portfolio</TopNavItem>
            </TopNavItems>
            <hr />
        </TopNavWrapper>
    )
}

export default TopNav