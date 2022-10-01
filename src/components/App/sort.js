import { data } from "../../data/data";

export const sotrHeader = (data, renderData, sort) => {
  switch (sort) {
    case "name": {
      renderData = renderData.sort((a, b) => a.name > b.name ? 1 : -1);
      break;
    };
    case "unname": {
      renderData = renderData.sort((a, b) => a.name > b.name ? 1 : -1);
      renderData = renderData.reverse();
      break;
    };
    case "points": {
      renderData = renderData.sort((a, b) => a.points > b.points ? 1 : -1);
      break;
    };
    case "unpoints": {
      renderData = renderData.sort((a, b) => a.points > b.points ? -1 : 1);
      break;
    };
    case "distance": {
      renderData = renderData.sort((a, b) => a.distance > b.distance ? 1 : -1);
      break;
    };
    case "undistance": {
      renderData = renderData.sort((a, b) => a.distance > b.distance ? -1 : 1);
      break;
    };
    default: {
      renderData = data;
      break;
    };
  };
  return renderData;
};

export const sortForm = (Condition, renderData, Colomn, argument) => {
  switch (Condition) {
    case "equal": {
      renderData = renderData.filter((el) => String(el[Colomn]) === argument);
      break;
    };
    case "contain": {
      renderData = renderData.filter((el) => String(el[Colomn]).includes(String(argument)) === true)
      break;
    };
    case "greater": {
      renderData = renderData.filter((el) => el[Colomn] > argument);
      break;
    };
    case "less": {
      renderData = renderData.filter((el) => el[Colomn] < argument);
      break;
    };
    default: {
      break;
    };
  };
  return renderData;
};


export const sortRenderData = (sort, page, sortColomn, sortCondition, argument) => {
  let renderDataSort = sortForm(sortCondition, data, sortColomn, argument);
  renderDataSort = sotrHeader(data, renderDataSort, sort);
  const siliseNum = 5 * page;
  const numAllPagesSort = Math.ceil(renderDataSort.length / 5);
  renderDataSort = renderDataSort.slice(siliseNum - 5, siliseNum);

  return { renderDataSort, numAllPagesSort };
};