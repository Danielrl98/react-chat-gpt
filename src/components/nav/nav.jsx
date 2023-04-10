import { useSelector } from "react-redux"
import { Question,Link } from './style'
import { FaRocketchat } from "react-icons/fa" 

 const Nav = () =>{
    const { response } = useSelector(rootReducer => rootReducer.responseReducer)
  

    return(

        <div >
            {response.map( question => (
                <Question><Link href={ "#" + question.id }><FaRocketchat />  {question.question}</Link> </Question> 
            )) }
        </div>
    )


}
export default Nav