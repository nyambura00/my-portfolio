import styled from 'styled-components';

const TopNav = () => {
    return (
        <TopNavWrapper>
            <TopNavItems>
                <TopNavItem>See Projects</TopNavItem>
                <TopNavItem>Reach Out</TopNavItem>
                <TopNavItem>Share portfolio</TopNavItem>
            </TopNavItems>
            <TopHrElement />
        </TopNavWrapper>
    )
}

export default TopNav;

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

const TopHrElement = styled.hr`
    height: 0.4em;
    background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); /* Standard syntax (must be last) */
`