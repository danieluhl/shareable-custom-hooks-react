import React, {useState, useEffect} from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

export function FeedbackEffectComponent() {
  const [text, setText] = useState('');

  // do it once at the start
  useEffect(() => {
    async function getQuote() {
      const response = await fetch('http://quotes.rest/qod.json?category=funny');
      const data = await response.json();
      const quote = data.contents.quotes[0].quote;
      setText(quote);
    }
    console.log('called from the use effect in the Effect component');
    getQuote();
  }, [])

  // // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting response to API: "${text}"`)
    setText('');
  }
  // Update text in state onchange for textarea
  function handleTextChange({target:{value}}) {
    setText(value);
  }

    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>Effect Example</Title>
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
