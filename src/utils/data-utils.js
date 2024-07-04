// for replace array id from mongodb id
export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
      return {
        id: item._id.toString(),
        ...item
      }
    }).map(({_id, ...rest}) => rest);

    return mappedArray;
}

// for replace array object from mongodb object
export const replaceMongoIdInObject = (obj) => {
  const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
  return updatedObj;
}



// for date compare
export const isDateInbetween = (date, startDate, endDate) => {
  const dateObj = new Date(date);
  const startObj = new Date(startDate);
  const endObj = new Date(endDate);

  return dateObj >= startObj && dateObj <= endObj;
}

// a to another date difference 
export const getDayDifference = (from, to) => {
  return ((new Date(to).getTime() - new Date(from).getTime())/(24*60*60*1000)) + 1;
}