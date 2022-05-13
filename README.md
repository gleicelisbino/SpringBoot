# Projeto de Store Procedures e Triggers
### Spring Boot and React JS

### Features
*Backend*
- [ X ] Visualização / Inserção / remoção / atualização de clientes.
- [ X ] Visualização de compras.
- [ X ] Inserção de uma compra com vários produtos.
- [ X ] Crie um procedimento armazenado para retornar algum relatório a ser exibido.
- [ X ] Crie algum gatilho que deva ser executado ao realizar a inserção do item 3.

*Front*

- [ X ]Todos os formulários para cada rota dessas.

### 🎲 Run Spring Boot
```bash
$ mvn spring-boot:run
```
### 🎲 Run React
```bash
$ yarn dev
```
### 🎲 Visualização / Inserção / remoção / atualização de clientes.
```bash
POST: http://localhost:8080/api/Customers/AAAAA
{
    "companyName": "testando",
    "contactName": "Frédérique Citeaux",
    "postalCode": "67000",
    "address": "24, place Kléber",
    "country": "France",
    "region": null,
    "customerID": "AAAAA",
    "contactTitle": "Marketing Manager",
    "city": "Strasbourg",
    "phone": "88.60.15.31",
    "fax": "88.60.15.32"
}

PUT: http://localhost:8080/api/Customers/AAAAA
{
    "companyName": "Update Company Name",
    "contactName": "Frédérique Citeaux",
    "postalCode": "67000",
    "address": "24, place Kléber",
    "country": "France",
    "region": null,
    "customerID": "AAAAA",
    "contactTitle": "Marketing Manager",
    "city": "Strasbourg",
    "phone": "88.60.15.31",
    "fax": "88.60.15.32"
}
GET: http://localhost:8080/api/Customers/

DELETE: http://localhost:8080/api/Customers/AAAAA
```

### 🎲 Visualização de compras.
```bash
## Visualização das compras
GET http://localhost:8080/api/OrderDetails/

GET http://localhost:8080/api/Orders/


```

### 🎲 Inserção de uma compra com vários produtos.
```bash
## Visualização das compras
POST http://localhost:8080/api/Products/

[    {
        "orderID": 10256,
        "productID": 3,
        "discount": 1,
        "unitPrice": 1,
        "quantity": 1
    },
       {
        "orderID": 10256,
        "productID": 2,
        "discount": 1,
        "unitPrice": 1,
        "quantity": 1
    }
]


```


###  Crie algum gatilho que deva ser executado ao realizar a inserção do item 3.
```bash
CREATE TRIGGER discount
ON [Order Details]
FOR INSERT
AS
BEGIN
    DECLARE
    @OrderID   int,
    @Discount  int

    SELECT  @OrderID = OrderID, @Discount = Discount FROM INSERTED

    UPDATE [Order Details] SET Discount = @Discount
    WHERE OrderID = @OrderID
END
GO

```

### Crie um procedimento armazenado para retornar algum relatório a ser exibido.
```bash
GET: http://localhost:8080/api/findWithCountryName?Find=10248

CREATE PROCEDURE findCompanyNameFromSameCountry
@Find VARCHAR (20) 
AS
SELECT OrderID, ProductID, UnitPrice, Quantity, Discount
FROM [Order Details]
WHERE OrderID = @Find   
GO
EXECUTE findCompanyNameFromSameCountry '10248'

```