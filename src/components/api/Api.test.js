import { render,screen} from '@testing-library/react'
import Api from '.'
import { Provider } from 'react-redux'
import store from '../../redux/store'


describe("Api component" ,() => {

    test("Verifica se tem o texto teste",() =>{
       render(
        <Provider store={ store }>
            <Api/>
        </Provider>
       )
        const texto = screen.getByText("teste")
        expect(texto).toBeInTheDocument();
    })
    

})