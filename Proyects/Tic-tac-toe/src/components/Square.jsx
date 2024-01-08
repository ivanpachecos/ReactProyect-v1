export const Square = ({ children, isSelected, updateBoard, index }) => {
  const claseName = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={claseName}>
      {children}
    </div>
  )
}