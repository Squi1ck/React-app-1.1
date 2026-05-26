import React, { useState } from 'react';
import Alerta from 'alerta.jsx';

function Notas() {

    const [formData, setFormData] = useState({
        nomeAluno: '',
        disciplina: '',
        notaTestes: '',
        notaTrabalhos: '',
        notaAtitudes: '',
        percTestes: '',
        percTrabalhos: '',
        percAtitudes: '',
    });

    const [resultado, setResultado] = useState({ media: '', mencao: '' });

    function mediaPesada(e) {
        e.preventDefault();

        const n1 = parseFloat(formData.notaTestes) || 0;
        const n2 = parseFloat(formData.notaTrabalhos) || 0;
        const n3 = parseFloat(formData.notaAtitudes) || 0;

        const p1 = parseFloat(formData.percTestes) || 0;
        const p2 = parseFloat(formData.percTrabalhos) || 0;
        const p3 = parseFloat(formData.percAtitudes) || 0;
        /*if (n3 + p2 + p3 != 100) {
            alert('Os pesos devem somar 100%');
        
        };*/


        const media = (n1 * (p1 / 100)) + (n2 * (p2 / 100)) + (n3 * (p3 / 100));
        
        const mencao = media >= 9.5 ? 'Aprovado' : 'Reprovado';

        setResultado({
            media: media.toFixed(2),
            mencao,
        });
    }

    return (
        <div className="mt-4 row">

            <div className="w-100">
                <h1>Cálculo da nota final</h1>
                <h2>Dados do Aluno</h2>
            </div>

            <form className="col-12 row" onSubmit={mediaPesada}>
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
                        <input type="text" className="form-control" value={formData.notaTestes} onChange={(e) =>
                            setFormData({ ...formData, notaTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota dos Trabalhos:</label>
                        <input type="text" className="form-control" value={formData.notaTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota das Atitudes:</label>
                        <input type="text" className="form-control" value={formData.notaAtitudes} onChange={(e) =>
                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>(%) Testes</label>
                        <input type="text" className="form-control" value={formData.percTestes} onChange={(e) =>
                            setFormData({ ...formData, percTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Trabalhos:</label>
                        <input type="text" className="form-control" value={formData.percTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, percTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Atitudes:</label>
                        <input type="text" className="form-control" value={formData.percAtitudes} onChange={(e) =>
                            setFormData({ ...formData, percAtitudes: e.target.value })} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Calcular Nota Final</button>
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