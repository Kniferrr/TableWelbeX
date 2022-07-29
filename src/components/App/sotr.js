


//сортировка по клику на хеддер колонки
export const sotrHeader = (data,renderData,sort) =>{
    switch (sort) {
      case "name": {
        renderData = data.sort((a, b) => a.name > b.name ? 1 : -1);
        break;
      } case "unname": {
        renderData = data.sort((a, b) => a.name > b.name ? 1 : -1);
        renderData = renderData.reverse();
        break;
      }
      case "points":{
        renderData = data.sort((a, b) => a.points > b.points ? 1 : -1);
        break;
      }
      case "unpoints":{
        renderData = data.sort((a, b) => a.points > b.points ? -1 : 1);
        break;
      }
      case "distance":{
        renderData = data.sort((a, b) => a.distance > b.distance ? 1 : -1);
        break;
      }case "undistance":{
        renderData = data.sort((a, b) => a.distance > b.distance ? -1 : 1);
        break;
      }
      default:{
         renderData = data;
         break;
      }
    }
    return renderData;
  }
  
export  const sortForm = (Condition,renderData,Colomn,argument) =>{
    //сортировка по форме
    switch(Condition){
      case "equal":{
        renderData = renderData.filter((el)=> String(el[Colomn]) === argument);
        break;
      }
      case "contain":{
        renderData = renderData.filter((el)=> String(el[Colomn]).includes(String(argument)) === true)
        break;
        }
      case "greater":{
        renderData = renderData.filter((el)=> el[Colomn] > argument);
        break;
      }
      case "less":{
        renderData = renderData.filter((el)=> el[Colomn] < argument);
        break;
      }
      default:{
      break;
      }
    }
    return renderData;
  }
  