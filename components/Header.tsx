import {css} from "@emotion/react";

export default function Header() {
    return (
        <header css={headerStyles}>
            <div>
                <h3>LM</h3>
            </div>
            <nav css={navStyles}>
                <div><h3>M</h3></div>
                <div><h3>M</h3></div>
            </nav>
        </header>
    )
}

const headerStyles = css`
  display: flex;
  justify-content: space-between;
`;

const navStyles = css`
  display: flex;
`;
