import css from 'styled-jsx/css'
import { outline } from '../../theme'

const styles = css`
  div {
    outline: ${outline};
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .room-Layout__container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    outline: 1px solid #9f9f9f;
  }
`

export default styles
