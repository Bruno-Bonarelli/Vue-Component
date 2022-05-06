Vue.component("mi-tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },
        registros: {
            type: Array,
            required: true
        },
        //TODO: implementar props para cambiar color de letra y fondo de la tabla
    },
    template: `
        <div>
            <table class="table table-sm">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(registro, i) in registros" :key="i">
                        
                        <th v-for="(row, r) in registro" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});
var app = new Vue({
    el: "#app",
    data: {
        tabla1: {
            titulos: ["DNI","Nombre", "Apellido", "Estado civil"],
            registros: [
                ["35.459.554","Jeremias", "Orcajo", "Casado"],
                ["29.659.996","Juliana", "Etchanchu", "Soltero"],
                ["21.344.567","Marisol", "Sanchez", "Casado"],
                ["21.545.284","Eugenia", "Melazco", "Casado"],
            ]
        },
        tabla2: {
            titulos: ["Producto", "Disponible", "Valor"],
            registros: [
                ["Leche", "Si", "$150"],
                ["Yerba", "No", "$250"],
                ["Arroz", "Si", "$170"],
                ["Pan", "Si", "$40"],
            ]
        },
        tabla3: {
            titulos: ["Posicion", "Tenista", "Puntos"],
            registros: [
                ["1°", "Novak Djokovic", "8400"],
                ["2°", "Daniil Medvedev", "8080"],
                ["3°", "Alexander Zverev", "7420"],
                ["4°", "Rafael Nadal", "6435"],
            ]
        },
    },

    template: `
    <div>
        <div>
         <h2>Registro de personas</h2>
         <br>
            <mi-tabla :titulos="tabla1.titulos" :registros="tabla1.registros" ></mi-tabla>
        </div>

        <div>
         <h2>Productos</h2>
            <mi-tabla :titulos="tabla2.titulos" :registros="tabla2.registros" ></mi-tabla>
            <br>
        </div>

        <div>
         <h2>Ranking ATP</h2>
            <mi-tabla :titulos="tabla3.titulos" :registros="tabla3.registros" ></mi-tabla>
            <br>
        </div>
    </div>
    `
});