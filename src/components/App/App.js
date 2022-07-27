import './App.css';
import Form from '../Form/Form';
import Table from '../Table/Table';
import {data} from "../../data/data"
import {useSelector} from "react-redux"

function App() {
  const sort = useSelector((state) => state.table.sort)
  const page = useSelector((state) => state.table.page)
  let renderData = data;
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

  const siliseNum = 5 * page;
  renderData = renderData.slice(siliseNum-5, siliseNum);
  console.log(renderData)
  return (
    <div className="App">
      <Form/>
      <Table data={renderData}/>
    </div>
  );
}

export default App;
