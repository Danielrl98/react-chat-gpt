import { useSelector } from "react-redux"
import { Question } from './style'
import { FaRocketchat } from "react-icons/fa" 

 const Nav = () =>{
    const { response } = useSelector(rootReducer => rootReducer.responseReducer)
  

    return(
        
        <div >
            {response.map( question => (
                <Question> <FaRocketchat />  {question.question}</Question>
            )) }
        </div>
    )


}
export default Nav