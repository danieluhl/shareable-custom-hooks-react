import React, {useState, useEffect} from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

function useFeedbackText() {
  const [text, setText] = useState('');
  return [text, setText];
}

function useQuoteOfTheDay() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getQuote() {
      const response = await fetch('http://quotes.rest/qod.json');
      const data = await response.json();
      const newQuote = data.contents.quotes[0].quote;
      setQuote(newQuote);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    getQuote();
  }, [setQuote, setLoading]);
  return [quote, loading];
}


export function FeedbackCustomComponent() {
  const [text, setText] = useFeedbackText();
  const [quote, loading] = useQuoteOfTheDay();

  useEffect(() => {
    if (quote) {
      setText(quote);
    }
  }, [quote, setText]);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting response to API: "${text}"`)
    setText('');
  }
  // Update text in state onchange for textarea
  function handleTextChange({target:{value}}) {
    setText(value);
  }

  if (loading) {
    return <h2>...Loading</h2>
  }

  if (quote) {
    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>Custom Example</Title>
        <Label>
          Have feedback for our team? <br /> Let us know here 👇
          <Textarea
            value={quote}
            onChange={e => handleTextChange(e)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
  return null;
}
