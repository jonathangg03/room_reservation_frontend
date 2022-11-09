import styles from "./styles"

const RoomLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className="room-Layout__container">
          {children}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}