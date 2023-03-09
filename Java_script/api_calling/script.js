console.log("hello world");
const p=document.getElementById('p');
const listitem=document.createElement("li");
var data1;
var str="";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a0e7e6bcbmsh9f188f74462db09p1ffce4jsn40a9c56da7cb',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
var data;
const getdata=async()=>
{

var res =await fetch('https://covid-193.p.rapidapi.com/countries', options)
  data = await res.json();
  console.log(data);
   
  for (let index = 0; index < data.response.length; index++) {
        
        //  console.log(data.response[index]);
        data1=data.response[index];
        str=str+"<br>"+data1;
          p.innerHTML=str;
         
          //listitem.append(data.response[index])
    
      }

}


const filterdata=(e)=>{
 
  var value=document.getElementById("mytext").value;
  console.log(value);

  const fc= data.response.filter((name,index)=>{
    return name.indexOf(value) !== -1;
  })
  console.log(fc);
}






getdata();




