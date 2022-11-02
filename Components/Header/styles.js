import css from 'styled-jsx/css'
import { colors } from '../../theme'

const styles = css`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 15px;
  }

  button {
    padding: 13px 20px;
    background-color: ${colors.main};
    color: white;
    border: none;
    font-size: 15px;
    border-radius: 8px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
  }
`
export default styles
