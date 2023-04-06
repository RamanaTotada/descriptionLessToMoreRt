import {useState} from 'react'

import {
  MainContainer,
  MainHeading,
  Para,
  ReactImage,
  Description,
  ChangeButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const shortText = reactHooksDescription.slice(0, 170)

  const [button, setButton] = useState(false)

  const onChangeStatus = () => {
    setButton(prevState => !prevState)
  }

  const buttonText = button ? 'Read Less' : 'Read More'

  const descriptionText = button ? reactHooksDescription : shortText

  return (
    <>
      <MainContainer>
        <MainHeading>React Hooks</MainHeading>
        <Para>Hooks are a new addition to React</Para>

        <ReactImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />

        <Description>{descriptionText}</Description>
        <ChangeButton onClick={onChangeStatus}>{buttonText}</ChangeButton>
      </MainContainer>
    </>
  )
}

export default ReadMore
