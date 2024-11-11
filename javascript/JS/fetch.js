fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>{

    console.log(data);
    document.write(data[0].name);
    datospintados(data);
});

const datospintados = (datos) => {
    for( i=0; i<=datos.length; i++){
        document.write("<p>"+datos[i].name+"</p>");
    }
};



