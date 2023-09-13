# Payment Method
#### GET https://backend-meli.up.railway.app/PaymentMethod/paymentMethodList
## List
##### Example Output

```Json
200 OK
[
    {
        "cardType": "Visa",
        "cardNumber": "123456789123456",
        "expirationDate": "11/2027",
        "securityCode": "234",
        "billingAddress": "LK-987-ST-12",
        "account": null,
        "id": 1
    },
    {
        "cardType": "AmericanExpress",
        "cardNumber": "523456789123459",
        "expirationDate": "09/2030",
        "securityCode": "723",
        "billingAddress": "FK-987-ST-19",
        "account": null,
        "id": 5
    }
]
```

## Create
#### POST https://backend-meli.up.railway.app/PaymentMethod/createPaymentMethod
##### Example Input
```Json
{
    "cardType": "Mastercard",
    "cardNumber": "123456789124456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null
}
```
##### Example Output
```Json
201 CREATED
{
    "cardType": "Mastercard",
    "cardNumber": "123456789124456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null,
    "id": 11
}
```

## Modify
### PUT https://backend-meli.up.railway.app/PaymentMethod/modifyPaymentMethod
##### Example Input
```Json
{
    "cardType": "AmericanExpress",
    "cardNumber": "523456789123459",
    "expirationDate": "09/2030",
    "securityCode": "723",
    "billingAddress": "FK-987-ST-19",
    "account": null,
    "id": 5
}
```
##### Example Output
```Json
201 CREATED
{
    "cardType": "AmericanExpress",
    "cardNumber": "523456789123459",
    "expirationDate": "09/2030",
    "securityCode": "723",
    "billingAddress": "FK-987-ST-19",
    "account": null,
    "id": 5
}
```

## Consult By ID
#### GET https://backend-meli.up.railway.app/PaymentMethod/consultPaymentMethod/1
##### Example Output
```Json
200 OK
{
    "cardType": "Visa",
    "cardNumber": "123456789123456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null,
    "id": 1
}
```

## Delete By ID
#### DELETE https://backend-meli.up.railway.app/PaymentMethod/deletePaymentMethod/3
##### Example Output
```Json
200 OK
{
    "cardType": "Mastercard",
    "cardNumber": "123456789123456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null,
    "id": 3
}
```


# Carrito de Compras

**Descripción**: Esta API permite a los usuarios administrar su carrito de compras, incluyendo la adición y eliminación de productos, así como la visualización del contenido del carrito.

## Rutas Disponibles

### Agregar Producto al Carrito

- **URL**: `/ShoppingCart/add`
- **Método**: `POST`
- **Descripción**: Agrega un producto al carrito de compras.
- **Parámetros de Entrada**:
  - `product` (Cuerpo de la solicitud): El producto que se va a agregar al carrito.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): El nuevo producto agregado al carrito.
- **Errores**:
  - Código de Estado HTTP: `400 Bad Request`
  - Descripción: Si el producto no se puede agregar debido a la falta de stock.

### Eliminar Producto del Carrito

- **URL**: `/ShoppingCart/remove/{productId}`
- **Método**: `DELETE`
- **Descripción**: Elimina un producto del carrito de compras.
- **Parámetros de Entrada**:
  - `productId` (Ruta): El ID del producto que se va a eliminar del carrito.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `204 No Content`
  - Descripción: No se devuelve contenido en la respuesta.
- **Errores**:
  - Código de Estado HTTP: `404 Not Found`
  - Descripción: Si no se encuentra el producto en el carrito.

### Ver Contenido del Carrito

- **URL**: `/ShoppingCart/viewCart/{userId}`
- **Método**: `GET`
- **Descripción**: Obtiene la lista de productos en el carrito de compras.
- **Parámetros de Entrada**:
  - `userId` (Ruta): El ID del usuario cuyo carrito se desea visualizar.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): Una lista de objetos `ProductCartDto` que representan los productos en el carrito.
- **Errores**:
  - Código de Estado HTTP: `404 Not Found`
  - Descripción: Si no se encuentra el carrito del usuario especificado.

#Order

**Descripción**: La entidad `Order` representa una orden de compra en el sistema de comercio electrónico. Esta entidad permite a los usuarios realizar un seguimiento de sus órdenes, modificar información relacionada con la orden y eliminar órdenes existentes.

## Rutas Disponibles

### Crear una Nueva Orden

- **URL**: `/orders/`
- **Método**: `POST`
- **Descripción**: Crea una nueva orden de compra en el sistema.
- **Parámetros de Entrada**:
  - `order` (Cuerpo de la solicitud): Los detalles de la orden que se va a crear.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): La orden de compra recién creada.
- **Errores**:
  - Código de Estado HTTP: `500 Internal Server Error`
  - Descripción: Si ocurre un error interno al intentar crear la orden.

### Eliminar una Orden Existente

- **URL**: `/orders/delOrder/{order_Id}`
- **Método**: `DELETE`
- **Descripción**: Elimina una orden de compra existente del sistema.
- **Parámetros de Entrada**:
  - `order_Id` (Ruta): El ID de la orden que se desea eliminar.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): La orden de compra que se eliminó.
- **Errores**:
  - Código de Estado HTTP: `500 Internal Server Error`
  - Descripción: Si ocurre un error interno al intentar eliminar la orden.

### Editar una Orden Existente

- **URL**: `/orders/editOrder/{order_Id}`
- **Método**: `PUT`
- **Descripción**: Edita los detalles de una orden de compra existente en el sistema.
- **Parámetros de Entrada**:
  - `order_Id` (Ruta): El ID de la orden que se desea editar.
  - `order` (Cuerpo de la solicitud): Los nuevos detalles de la orden.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): La orden de compra después de la edición.
- **Errores**:
  - Código de Estado HTTP: `500 Internal Server Error`
  - Descripción: Si ocurre un error interno al intentar editar la orden.

### Obtener una Lista de Todas las Órdenes

- **URL**: `/orders/ordersList`
- **Método**: `GET`
- **Descripción**: Obtiene una lista de todas las órdenes de compra registradas en el sistema.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): Una lista de todas las órdenes de compra.
- **Errores**:
  - Código de Estado HTTP: `500 Internal Server Error`
  - Descripción: Si ocurre un error interno al intentar obtener la lista de órdenes.

### Obtener Detalles de una Orden por ID

- **URL**: `/orders/orders/{order_Id}`
- **Método**: `GET`
- **Descripción**: Obtiene los detalles de una orden de compra específica por su ID.
- **Parámetros de Entrada**:
  - `order_Id` (Ruta): El ID de la orden que se desea obtener.
- **Respuesta Exitosa**:
  - Código de Estado HTTP: `200 OK`
  - Cuerpo de la Respuesta (JSON): Los detalles de la orden de compra solicitada.
- **Errores**:
  - Código de Estado HTTP: `404 Not Found`
  - Descripción: Si no se encuentra la orden de compra con el ID especificado.





