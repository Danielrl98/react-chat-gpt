import Api from "../api/index";
import {  useDispatch } from "react-redux";
import { ResponseChat } from "../ResponseChat/index";
import { Container, Container2 } from "./style";
import Nav from "../nav/nav";

function Main() {
 
  const dispatch = useDispatch();

  return (
        
        <div className="row" style={{ position: 'relative'}}>
          <Container className="col nav-site">
            <Nav />
          </Container>
          <Container2 className="col-9">
            <ResponseChat />
            <Api />
          </Container2 >
        </div> 
      
    
  );
}

export default Main;
