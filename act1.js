document.write("1) De acuerdo a la teoría y paradigma de la POO define el concepto de clase, objeto y métodos. Mencionar dos ejemplos de cada uno.")
document.write("Es una plantilla, que permite construir objetos")
document.write("el objeto representa algo en particular")
document.write("Un método es un bloque de código que contiene una serie de instrucciones")
class articulos {
    constructor(codigo, nombre, precio, descripcion, caracteristicas, limitedestock) {
        this._codigo = codigo
        this._nombreproducto = nombreproducto,
            this._precio = precio,
            this._descripcion = descripcion,
            this._caracteristicas = caracteristicas
        this._limitedestock = limitedestock

    }
    info(){
       return `<br>codigo: ${this._codigo} <br>- nombre: ${this._nombreproducto}<br>- precio: ${this.precio}<br>- descripcion:${this._descripcion}<br>- caracteristicas: ${this._carecteristicas}<br>
        stock: ${this._limitedestock}<br>`
    }
}
let articulos1 = new articulos (1234,
    "termo",
    "80.000",
    "2l",
    "mantiene calor",
    "44"
    )
      let articulos2 = new articulos (1224,
        "celular",
        "90.000",
        "samsung",
        "128gb",
        "20"
        )
        let articulos3 = new articulos (1235,
            "mouse",
            "10.000",
            "10cm",
            "via bluetooth",
            "10"
            )
    document.write(articulos1.info())
    document.write(articulos2.info())
    document.write(articulos3.info())




