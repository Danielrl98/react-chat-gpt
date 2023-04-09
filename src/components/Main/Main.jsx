import Api from "../api/index";
import {  useDispatch } from "react-redux";
import { ResponseChat } from "../ResponseChat/index";
import { Container2 } from "./style";

function Main() {
 
  const dispatch = useDispatch();

  return (
        
        <div className="row" style={{ position: 'relative'}}>
          <div className="col" style={{ backgroundColor: '#202123',height: '100vh'}}>
                
          </div>
          <Container2 className="col-9">
            <ResponseChat />
            <Api />
          </Container2 >
        </div> 
      
    
  );
}

export default Main;
