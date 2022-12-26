import styles from './styles'

const RoomLayout = ({ children, width, height }) => {
  return (
    <>
      <div width={width} heigth={height}>
        <div className='room-Layout__container'>{children}</div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default RoomLayout
