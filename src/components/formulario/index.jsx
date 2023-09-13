import { useState } from 'react';
import styles from '../../app.css';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setIMC] = useState(0);
    const [resultado, setResultado] = useState('');

    const alteraNome = (e) => {
        setNome(e.target.value);
    }

    const calcularIMC = () => {
        if (altura === 0) {
            setResultado('Informe a altura para calcular o IMC');
        } else {
            const calculoIMC = peso / (altura * altura);
            setIMC(calculoIMC);

            if (calculoIMC < 18.5) {
                setResultado('Abaixo do Peso');
            } else if (calculoIMC < 24.9) {
                setResultado('Peso Normal');
            } else if (calculoIMC < 29.9) {
                setResultado('Sobrepeso');
            } else if (calculoIMC < 34.9) {
                setResultado('Obesidade Grau I');
            } else if (calculoIMC < 39.9) {
                setResultado('Obesidade Grau II');
            } else {
                setResultado('Obesidade Grau III');
            }
        }
    };

    return (
        <form>
            <input type="text" placeholder='Digite seu nome' onChange={alteraNome} />
            <input type="number" placeholder="Digite sua altura (em metros)" onChange={(e) => setAltura(parseFloat(e.target.value))} />
            <input type="number" placeholder="Digite seu peso (em kg)" onChange={(e) => setPeso(parseFloat(e.target.value))} />

            <button type="button" onClick={calcularIMC}>Calcular IMC</button>
            
            {imc > 0 && (
                <div>
                    <p>Olá {nome}, seu IMC é: {imc.toFixed(2)}</p>
                    <p>Situação: {resultado}</p>
                </div>
            )}
        </form>
    )
}

export default Formulario;
