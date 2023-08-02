import {Component} from 'react'

import {
  AppContainer,
  ContentContainer,
  Heading,
  InputContainer,
  Paragraph,
  InputElement,
  SaveButton,
} from './styledComponents'

class Editable extends Component {
  state = {
    EditText: '',
    isButtonClicked: false,
  }

  onChangeSearchInput = event => {
    this.setState({EditText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditText = '', isButtonClicked} = this.state
    const {EditOrSaveButton} = isButtonClicked ? 'true' : 'false'
    return (
      <AppContainer>
        <ContentContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Paragraph>{EditText}</Paragraph>
            ) : (
              <InputElement
                type="text"
                value={EditText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <SaveButton type="button" onClick={this.onClickButton}>
              {EditOrSaveButton}
            </SaveButton>
          </InputContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}
export default Editable
