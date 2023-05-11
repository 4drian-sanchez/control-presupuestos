

export const Filtro = ({filtro, setFiltro}) => {
    return (
        <div className="filtros contenedor sombra">
            <form>
                <div className="campo">

                    <label 
                        htmlFor="filtro"
                        className="filtro-label"
                        >Filtrar por categorías</label>
                    <select  
                        id="filtro"
                        onChange={ ({target: {value}}) =>  setFiltro(value)}
                        value={filtro}
                        >
                        <option value="">--- Todas las categorias ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">casa</option>
                        <option value="gastos">varios gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
