// Write your code here
import {DirectionDetail, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, changeDirection} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <DirectionDetail>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </DirectionDetail>
  )
}

export default GradientDirectionItem
