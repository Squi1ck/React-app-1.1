import React, { useState } from 'react';
import Alerta from './Alerta';

function Notas() {

    const [formData, setFormData] = useState({
        nomeAluno: '',
        disciplina: '',
        notaTestes: '',
        notaTrabalhos: '',
        notaAtitudes: '',
        percTestes: '',
        percTrabalhos: '',
        percAtitudes: ''
    });

    const [dados, setDados] = useState([]);
    const [resultado, setResultado] = useState({ media: null, mencao: '' });

    function handleSubmit(e) {
        e.preventDefault();

        const novaTarefa = {
            nomeAluno: formData.nomeAluno,
            disciplina: formData.disciplina,
            notaTestes: formData.notaTestes,
            percTestes: formData.percTestes,
            percTrabalhos: formData.percTrabalhos,
            percAtitudes: formData.percAtitudes,
            notaTrabalhos: formData.notaTrabalhos,
            notaAtitudes: formData.notaAtitudes
        };
        setDados([...dados, novaTarefa]);
    }

    function verResultados() {
        if (parseFloat(formData.percTestes) + parseFloat(formData.percTrabalhos) + parseFloat(formData.percAtitudes) !== 100) {
            alert("As percentagens devem somar 100%!");
        } else if (parseFloat(formData.notaTestes) < 0 || parseFloat(formData.notaTestes) > 20 ||
            parseFloat(formData.notaTrabalhos) < 0 || parseFloat(formData.notaTrabalhos) > 20 ||
            parseFloat(formData.notaAtitudes) < 0 || parseFloat(formData.notaAtitudes) > 20) {
            alert("As notas devem estar de 0 a 20!");
        } else {
            const notaFinal = (parseFloat(formData.notaTestes) * parseFloat(formData.percTestes) / 100) +
                (parseFloat(formData.notaTrabalhos) * parseFloat(formData.percTrabalhos) / 100) +
                (parseFloat(formData.notaAtitudes) * parseFloat(formData.percAtitudes) / 100);
            const media = notaFinal.toFixed(2);
            const mencao = notaFinal >= 9.5 ? 'Aprovado' : 'Reprovado';
            setResultado({ media, mencao });
        }
    }


    function controlnotas(e) {
        const value = e.target.value;
        // normalize numeric inputs between 0 and 20 for the three note fields
        const normalized = Math.max(0, Math.min(20, parseFloat(value) || 0));
        const name = e.target.name;
        if (['notaTestes', 'notaTrabalhos', 'notaAtitudes'].includes(name)) {
            setFormData({ ...formData, [name]: normalized });
        }
    }

    function limparFormulario() {
        setFormData({
            nomeAluno: '',
            disciplina: '',
            notaTestes: '',
            percTrabalhos: '',
            percAtitudes: '',
            notaTrabalhos: '',
            notaAtitudes: '',
            percTestes: '',
            percTrabalhos: '',
            percAtitudes: ''
        });
        setResultado({ media: null, mencao: '' });
    }

    return (
        <div className="mt-4 row">

            <div className="w-100">
                <h1>Cálculo da nota final</h1>
                <h2>Dados do Aluno</h2>
            </div>

            <form className="col-12 row" onSubmit={handleSubmit}>
                <div className="col-8">
                    <div className="form-group">
                        <label>Nome do Aluno</label>
                        <input type="text" className="form-control" value={formData.nomeAluno} onChange={(e) =>
                            setFormData({ ...formData, nomeAluno: e.target.value })} required />
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-group">
                        <label>Disciplina</label>
                        <input type="text" className="form-control" value={formData.disciplina} onChange={(e) =>
                            setFormData({ ...formData, disciplina: e.target.value })} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>Nota dos Testes</label>
                        <input type="number" className="form-control" step="1" min="0" max="20" value={formData.notaTestes} onChange={(e) =>
                            setFormData({ ...formData, notaTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota dos Trabalhos:</label>
                        <input type="number" className="form-control" step="1" min="0" max="20" value={formData.notaTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota das Atitudes:</label>
                        <input type="number" className="form-control" step="1" min="0" max="20" value={formData.notaAtitudes} onChange={(e) =>
                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>

                    <button type="button" className="btn btn-primary mr-2" onClick={verResultados}>Calcular</button>
                    <button type="button" className="btn btn-outline-danger" onClick={limparFormulario}>Limpar Formulário</button>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>(%) Testes</label>
                        <input type="number" className="form-control" step="1" min="0" max="100" value={formData.percTestes} onChange={(e) =>
                            setFormData({ ...formData, percTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Trabalhos:</label>
                        <input type="number" className="form-control" step="1" min="0" max="100" value={formData.percTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, percTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Atitudes:</label>
                        <input type="number" className="form-control" step="1" min="0" max="100" value={formData.percAtitudes} onChange={(e) =>
                            setFormData({ ...formData, percAtitudes: e.target.value })} required />
                    </div>
                    
                </div>

            </form>

            {resultado.media && (
                <div className="col-12 mt-3">
                    <h3>Resultado</h3>
                    <p>Média: {resultado.media}</p>
                    <p>Menção: {resultado.mencao}</p>
                </div>
            )}

        </div>
    );
}

export default Notas;