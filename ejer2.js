db.createCollection("users");

db.users.insertMany([
    {
    "nombres": "Juan",
    "apellidos": "Pérez",
    "correo": "juan@example.com",
    "ciudad": "Londres",
    "país": "Reino Unido",
    "salario": 2500,
    "edad": 25,
    "altura": 175,
    "peso": 160
    },
    {
    "nombres": "Maria",
    "apellidos": "García",
    "correo": "maria@example.com",
    "ciudad": "París",
    "país": "Francia",
    "salario": 3000,
    "edad": 30,
    "altura": 165,
    "peso": 140
    },
    {
    "nombres": "Emily",
    "apellidos": "Johnson",
    "correo": "emily@example.com",
    "ciudad": "New York",
    "país": "Estados Unidos",
    "salario": 4000,
    "edad": 35,
    "altura": 170,
    "peso": 150
    },
    {
    "nombres": "Carlos",
    "apellidos": "Martinez",
    "correo": "carlos@example.com",
    "ciudad": "Madrid",
    "país": "España",
    "salario": 3500,
    "edad": 28,
    "altura": 180,
    "peso": 160
    },
    {
    "nombres": "Sophie",
    "apellidos": "Dupont",
    "correo": "",
    "ciudad": "Marsella",
    "país": "Francia",
    "salario": 4500,
    "edad": 22,
    "altura": 160,
    "peso": 130
    },
    {
    "nombres": "Luca",
    "apellidos": "Rossi",
    "correo": "luca@example.com",
    "ciudad": "Roma",
    "país": "Italia",
    "salario": 2800,
    "edad": 27,
    "altura": 175,
    "peso": 150
    },
    {
    "nombres": "Gabriel",
    "apellidos": "Silva",
    "correo": "gabriel@example.com",
    "ciudad": "Sao Paulo",
    "país": "Brasil",
    "salario": 3200,
    "edad": 23,
    "altura": 185,
    "peso": 115
    },
    {
    "nombres": "Luisa",
    "apellidos": "González",
    "correo": "luisa@example.com",
    "ciudad": "Buenos Aires",
    "país": "Argentina",
    "salario": 2800,
    "edad": 20,
    "altura": 170,
    "peso": 125
    },
    {
    "nombres": "David",
    "apellidos": "Schmidt",
    "correo": "",
    "ciudad": "Berlín",
    "país": "Alemania",
    "salario": 3800,
    "edad": 40,
    "altura": 190,
    "peso": 170
    },
    {
    "nombres": "Akash",
    "apellidos": "Patel",
    "correo": "",
    "ciudad": "Mumbai",
    "país": "India",
    "salario": null,
    "edad": 29,
    "altura": 175,
    "peso": 160
    }
])


// Obtener todos los usuarios que sean mayores de 18 años.

db.users.find({edad : {$gt : 18}});

// Obtener todos los usuarios que sean de Londres o de París.

db.users.find({ciudad : {$in : ["Londres", "París"]}});

// Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users.find({ salario : {$gt : 2000}, edad : {$lt : 30}}); 

// Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users.find({ cuidad : "España" }, { salario : { $gt : 3000 } }); 

// Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find({ edad : {$gt : 25, $lt : 35 } })

// Obtener a todos los usuarios que no sean de Estados Unidos.

db.users.find({ país : { $ne : "Estados Unidos" } })

// Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.users.find({ ciudad : "Londres" }, { salario : { $gt : 2500 }, edad : { $gt : 30 } })

// Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.find({ país : "Australia" }, { salario : { $lt : 140 }, peso : { $gt : 140 } });

// Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({ ciudad : { $ne : "Londres" , $ne : "París" } })

// Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

 db.users.find({ salario : { $lt : 2000 }, edad : { $gt : 40 } });

// Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({ { país: "Canadá" }, $or: [{ salario: { $gt: 4000 } }, { altura: { $gt: 180 } }]})

// Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

 db.users.find({ { país: "Italia" }, edad: { $gt: 20, $lt: 30 } })

// Obtener todos los usuarios que no tengan un correo electrónico registrado.

 db.users.find({ correo: { $exists: false } })

// Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

 db.users.find({ { país: "Francia" }, salario: { $gt: 3000, $lt: 5000 } });

// Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

 db.users.find({ { país: "Brasil" }, $or: [{ peso: { $lt: 120 } }, { peso: { $gt: 140 } }] } );

// Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

 db.users.find({ { país: { $in: ["Argentina", "Chile"] } }, edad: { $lt: 25 } });

// Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({{ país : {$nin : ["España", "Mexico"] } }, salario :  {$lt : 3000}})

// Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

 db.users.find({ { país: "Alemania" }, $or: [{ salario: { $lt: 4000 } }, { edad: { $gt: 35 } }] });

// Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.users.find({ { pais : { $nin :  ["Colombia"] }, altura : { $gt : 170}}})

// Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.users.find({ { país : "India" }, salario : { $exists: false } });