import { Plus } from "lucide-react";
import "./Home.css"

const Home = () => {
    return(
        <div>
            <h1>TickIt</h1>
            <form action="submit">
                <input type="text" placeholder="Nome da tarefa" />
                <input id="descricao" type="text" placeholder="Resumo da tarefa" />
            </form>
            <button><Plus /></button>
        </div>
    )
}

export default Home;