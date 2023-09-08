
import { useState } from 'react'
import styles from '../../app.css'

const Formulario = () => {
    let [MateriaA, setMateriaA] = useState(0);
    let [MateriaB, setMateriaB] = useState(0);
    let [MateriaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState(0);

    const AlteraNome = (e) => {
        setNome(e.target.value);
    }

    const resultado = () => {
        const soma = MateriaA + MateriaB + MateriaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p>Olá {nome}, você foi aprovado</p>
        } else {
            return <p>Olá {nome}, você foi reprovado</p>
        }
    }

    
    return (
        <form>
            <input type="text"  placeholder='Digite o nome do aluno' onChange={AlteraNome} />
            <input type="number" placeholder="Digite a nota A " onChange={(e) => setMateriaA(parseInt(e.target.value))} />
            <input type="number" placeholder="Digite a nota B" onChange={(e) => setMateriaB(parseInt(e.target.value))} />

            <input type="number" placeholder="Digite a nota C" onChange={(e) => setMateriaC(parseInt(e.target.value))} />

            <div className='resultado'>{resultado()}</div>
        </form>
    )
}

export default Formulario