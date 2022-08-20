// 1. express js adalah framework utk membuat web server jadi lebih cepat, sama halnya seperti bootstrap
// const { response } = require('express');
const express = require ('express'); // 2. atau bisa juga import express from "express"
// const { request } = require('http');
// const { connected } = require('process');
const app = express()

// 3. lalu buat port untk menjalankan si express js
const port = 9000 // 4.utk mendeklar variabel portnya berapa

app.set('view engine', 'hbs') // untuk menggunakan setingan view engine template enginenya, dari npm hbs, lalu rename file html menjadi hbs
app.use('/assets', express.static(__dirname + '/assets')) // utk node js agar mendetect path dari css di folder assets, agar bisa combine dengan file hbs
app.use(express.urlencoded({extended: true})) // supaya tidak undefined dalam console.log, kita isikan ini, karena data masih berupa object, maka harus diisi url encodenya dalam express

app.get( '/', (request, response) => { //jadi ketika ada yang akses routing / ini, maka dia akan melakukan apa di anonymous functionnya, yang dimana memiliki 2 parameter, request dan response
    response.render ('index')
})

app.get( '/myproject', (request, response) => {
    response.render ('myproject')
})

app.post( '/myproject', (request, response) => {
    console.log(request.body)
    
    let projectName = request.body.inputProject
    let startDate = request.body.inputStartDate
    let endDate = request.body.inputEndDate
    let description = request.body.inputDescription
    let technologies1 = request.body.inputTechnologiesJs
    let technologies2 = request.body.inputTechnologiesPhp
    let technologies3 = request.body.inputTechnologiesReact
    let technologies4 = request.body.inputTechnologiesNodeJs

    console.log(projectName);
    console.log(startDate);
    console.log(endDate);
    console.log(description);
    console.log(technologies1);
    console.log(technologies2);
    console.log(technologies3);
    console.log(technologies4);

    response.redirect ('/') //supaya web browser tidak loading terus"an, maka kita kasih response.render atau inner.html menuju halaman index
})

app.get( '/contact', (request, response) => {
    response.render ('contact')
})

app.get( '/myproject-detail/:name', (request, response) => { //:name ini bisa diisikan apa saja, karena menjadi penampung si paramsnya, maka nanti yang muncul di console.log nya adalah name : bimbi-naufal sesuai yang diisikan oleh user

    let id=request.params.name // agar yang diisi oleh user ini yakni bimbi-naufal ini keluar dari console.log object, maka kita kasih titik setelah params.name
    console.log(id)

    response.render ('myproject-detail')
})

// 6. atau bisa juga seperti ini 
// app.get ( '/', function(request,response) {
//     response.send("Hello World!")
// })

// 7. response.send sama seperti document.writeln pada javascript
// response.render sama seperti inner.html pada javascript
// response.redirect utk post blog

// 8. kalau ingin merefresh tekan ctrl + c

// 9. install nodemon utk proses development aja, namun saat melakukan hosting/ produksi / bisa diakses ke semua orang lewat internet, tidak akan kita install

// 10. cara menjalankan nodemon adalah dengan npm start, maka dia akan otomatis refresh di server node js

app.listen(port, () => { //menggunakan arrow function
    console.log(`Server running on port ${port}`);
})

// 11. atau bisa juga seperti ini 
// app.listen(port, function(){
//     console.log("Server running on port");
// })

// 12. git checkout -b day-6 utk membuat nama branch dari master ke day-6, guna utk memasukkan ke link repo all in one

// 13. template engine itu seperti framework juga, dan gunanya utk meminimalisir penggunaan connected, seperti tidak lagi menggunakan backtick di innerHeight.html nya

// cara install nodemon secara global meskipun udah di uninstall di package.json adalah
// dengan cara npm install -g nodemon # or using yarn: yarn global add nodemon, bisa dijalankan di semua terminal, baik git bash ataupun cmd, dan tinggal kita 
// kasih tambahan di start " nodemon node index.js " agar mendetect instalan global nodemon nya