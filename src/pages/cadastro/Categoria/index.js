import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/Templates/PageDefault';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'), 
            event.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <form
            onSubmit={function handlerSubmit(event) {
                event.preventDefault();
                setCategorias([...categorias, values]);
                
                setValues(valoresIniciais)
            }}>
                <FormField 
                    label="Nome da Categotia:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                    <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <FormField 
                    label="Cor:"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;