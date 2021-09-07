import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap } from './SignInElements'
import { useForm, ValidationError } from '@formspree/react';

const SignIn = () => {
    const [state, handleSubmit] = useForm("meqvkwej");
    if (state.succeeded) {
      return <p>Merci pour votre message, je vous réponds dès que possible !</p>;
    }
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Contactez-moi !</FormH1>
                            <FormLabel htmlFor='email'>
                                Email
                            </FormLabel>
                            <FormInput id="email" type="email" name="email" required/>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                            <FormLabel htmlFor='message' id="message" name="message">
                                Message
                            </FormLabel>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                            <FormInput type='text' required />
                            <FormButton type='submit' disabled={state.submitting}>
                                Envoyer
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
