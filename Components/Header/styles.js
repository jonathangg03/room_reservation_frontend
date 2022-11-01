import css from 'styled-jsx/css'

const styles = css`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 25px;
  }

  button {
    padding: 13px 20px;
    background-color: #3a11af;
    color: white;
    border: none;
    font-size: 15px;
    border-radius: 8px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
  }
`
export default styles
