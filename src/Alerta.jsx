// Um componente pode receber "props" (dados enviados pelo componente pai)
function Alerta(props) {
    // Aqui usamos props.texto, enviada pelo componente App
    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}
export default Alerta;