import { Container,Response,Question } from "./style"
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const ResponseChat = () => {

    const { response } = useSelector(
        (rootReducer) => rootReducer.responseReducer
      );
      useEffect(() => {
        console.log({ response });
      });

    return(
        <Container>
            {response.map((response) =>
                <div key={response.id }>
                    <Question><b>Voce:</b> {response.question}</Question>
                    <Response><b>Chat:</b> {response.response}</Response>
                </div>
            )}
        </Container >
    )
}