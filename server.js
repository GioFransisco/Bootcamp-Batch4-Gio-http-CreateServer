const fs = require('fs');
const http = require('http');

const all = (req, res) => {
    fs.readFile(req, (err,data) => { //untuk membaca kode html
        if(err){
            res.writeHead(404);
            res.write('Error : page not found')
        }else{
            res.write(data);
        }
        res.end();
    })
}

http.createServer((req, res) => {
    //untuk mengirimkan request url pada browser
    const url = req.url;
    console.log(url);
    //jika browser meload path dibawah, code akan dieksekusi sesuai perintah yang ada
    if(url === '/about'){
        all('./about.html', res)

        // fs.readFile('./about', (err,data) => { //untuk membaca kode html
        //     if(err){
        //         res.writeHead(404);
        //         res.write('Error : page not found')
        //     }else{
        //         res.write(data);
        //     }
        //     res.end();
        // })

        // res.write('<h1>This is about page</h1>')
        // res.end();
    }else if(url === '/contact'){
        all('./contact.html', res)

        // fs.readFile('./contact', (err,data) => { //untuk membaca kode html
        //     if(err){
        //         res.writeHead(404);
        //         res.write('Error : page not found')
        //     }else{
        //         res.write(data);
        //     }
        //     res.end();
        // })

        // res.write('<h2>This is contact page</h2>')
        // res.end();
    }else{
        //kode dibawah akan dijalankan jika path yang diisikan di browser pada kondisi if tidak ada
        all('./index.html', res)

        // fs.readFile('./index.html', (err,data) => { //untuk membaca kode html
        //     if(err){
        //         res.writeHead(404);
        //         res.write('Error : page not found')
        //     }else{
        //         res.write(data);
        //     }
        //     res.end();
        // })
    }
    //untuk mengetahui http error code
    res.writeHead(200,{
        'Content-Type' : 'text/html',
    });
    // res.write('hello world');
    // res.end();
}).listen(3000,() =>{ //menuliskan 3000 sebagai port yang digunakan
    console.log('Server is listening on port 3000')
});