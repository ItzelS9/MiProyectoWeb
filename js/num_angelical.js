var idp=1;
var long=0;

    const url = "https://itzels9.github.io/ejem_json_api/angeles.json";

    function buscar(){

        fetch(url)
        .then(function(response){
            return response.json();    
        })
    
        .then(function(data){
            console.log(data.personajes);
            long=data.personajes.length;
            console.log("lenght:"+ long);
        
            var res= data.personajes.filter(item=>item.id===idp);
            console.log(res);
            var imagen=document.getElementById('pkm-img');
            imagen.src=res[0].figure;
        })

        .catch(function(error){
            console.log(error);           
        });

        if (idp >= long){
            idp=1;
        }else{
            idp++;
        }
        
    }    