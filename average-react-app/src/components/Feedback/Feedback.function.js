import React, {useState} from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

export function FeedbackFunctionComponent() {
  const [text, setText] = useState('');



  // fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
  //   .then(response => response.json())
  //   .then(data =>
  //     setText(data.starWarsQuote)
  //   )

  // // Handle form submission
  function handleSubmit() {
    console.log(`Submitting response to API: "${text}"`)
    setText('');
  }
  // // Update text in state onchange for textarea
  function handleTextChange({target:{value}}) {
    setText(value);
  }

    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>Function Example</Title>
        <Label>
          Have feedback for our team? <br /> Let us know here 👇
          <Textarea
            value={text}
            onChange={e => handleTextChange(e)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    )
}
