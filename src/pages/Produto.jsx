import { useParams } from "react-router";

const Produto = () => {

    const { id } = useParams();

    return (
        <h1>Produto: {id == 1 ? "Lanches" : "Sobremesas"}</h1>
    );
}
 
export default Produto;