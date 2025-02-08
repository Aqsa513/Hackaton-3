// sanity/schemas/order.js

export default {
    name: "order",
    type: "document",
    title: "order",
    fields: [
        {
            name: "firstname",
            title: "first Name",
            type: "string"
        },
        {
            name: "lastname",
            title:"last Name",
            type: "string"
        },
        {
            name: "address",
            title:"Address",
            type: "string" 
        },
        {
            name: "city",
            title:"City",
            type: "string"
        },
        {
            name: "zipcode",
            title:"Zip Code",
            type: "string"
        },
        {
            name: "phone",
            title:"Phone",
            type: "string"
        },
        {
            name: "email",
            title:"Email",
            type: "string"
        },
        {
            name: "discount",
            title:" Discount",
            type: "number"
        },
        {
            name: "cartItems",
            title:"Cart Items",
            type: "array",
            of: [{ type : "reference", to: { type: "product" }}]
        },
        {
            name: "total",
            title:" Total",
            type: "number"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    {title : "Panding", value : "panding"},
                    {title : "Success", value : "success"},
                    {title : "Dispatch", value : "dispatch"},
                ],
                layout: "radio" // Optionally, change to 'dropdown' if you prefer a dropdown
            },
            initialvalue : "panding"// Default value
        }
    ]
}