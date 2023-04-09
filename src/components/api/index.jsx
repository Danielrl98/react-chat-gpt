import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { InputChat, Container, ButtonChat } from "./style";
import { FaPaperPlane } from "react-icons/fa";




const Api = () => {

  const ApiKey = process.env.REACT_APP_API_KEY

  const InputValue = useRef();

  const dispatch = useDispatch();

  const handleClickResposta = async () => {

    let pergunta = InputValue.current.value;
    
    if (pergunta.length > 10) {

      await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + ApiKey,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: pergunta,
          max_tokens: 1048, // tamanho da resposta
          temperature: 0.9, // criatividade na resposta
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          let resultJson = json.choices[0].text;

          dispatch({
            type: "obter-resposta",
            payload: {
              id: Date.now().toString(36),
              question: pergunta,
              response: resultJson,
            },
          });
        });
        
    } else{
      InputValue.current.style.border = "1px solid red";
    }
  };

  const handleKeyPress = (event) => {
    if (
      event.key === "Enter" &&
      InputValue.current.value !== " " &&
      InputValue.current.value !== undefined &&
      InputValue.current.value !== null
    ) {
      handleClickResposta();
      InputValue.current.value = "" 
      event.preventDefault();
    } 
  };

  return (
    <Container>
      <InputChat
        className="form-control"
        ref={InputValue}
        type="text"
        placeholder="Faça sua pergunta"
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <ButtonChat>
        <FaPaperPlane />
      </ButtonChat>
    </Container>
  );
};

export default Api;
