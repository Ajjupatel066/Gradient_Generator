import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  MainHeading,
  ParagraphElement,
  DirectionContainer,
  ColorSelectorContainer,
  ColorInput,
  GenerateButton,
  CustomInputAndValueContainer,
  CustomValueElement,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeDirection = direction => {
    this.setState({
      activeDirection: direction,
    })
  }

  changeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  changeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  GenerateGradient = () => {
    const {activeDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeDirection,
      gradientValue,
      toColorInput,
      fromColorInput,
    } = this.state
    return (
      <MainContainer value={gradientValue} data-testid="gradientGenerator">
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <ParagraphElement>Choose Direction</ParagraphElement>
        <ParagraphElement>Pick the Colors</ParagraphElement>
        <DirectionContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              isActive={activeDirection === eachDirection.value}
              changeDirection={this.changeDirection}
            />
          ))}
        </DirectionContainer>
        <ColorSelectorContainer>
          <CustomInputAndValueContainer>
            <CustomValueElement>{fromColorInput}</CustomValueElement>
            <ColorInput
              type="color"
              value={fromColorInput}
              onChange={this.changeFromColor}
            />
          </CustomInputAndValueContainer>

          <CustomInputAndValueContainer>
            <CustomValueElement>{toColorInput}</CustomValueElement>
            <ColorInput
              type="color"
              value={toColorInput}
              onChange={this.changeToColor}
            />
          </CustomInputAndValueContainer>
        </ColorSelectorContainer>
        <GenerateButton type="button" onClick={this.GenerateGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
