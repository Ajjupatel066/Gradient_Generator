// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.value});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainHeading = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
`
export const ParagraphElement = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #ededed;
  font-family: 'Roboto';
`

export const DirectionContainer = styled.ul`
  display: flex;
  width: 80%;
  padding: 0px;
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

export const ColorSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const CustomInputAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomValueElement = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
