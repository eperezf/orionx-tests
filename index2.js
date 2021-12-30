const objetoAnidado = {
  data: {
    informacion: {
      alguna: {
        cosa: {
          muy: {
            anidada: {
              numeroMagico: 33,
              otraCosa: 'foo2'
            }
          }
        },
        otraCosa: {
          noTanAnidada: 55
        }
      }
    }
  }
};


function contiene(obj, val) {
  var newObj = Object.values(obj);
  var contains = false;
  for (var objItem of newObj) {
    if (typeof objItem === 'object') {
      contains = contiene(objItem, val);
      if (contains) {
        break;
      }
    } else {
      return (newObj.includes(val) ? true : false);
    }
  }
  if (contains == true) {
    return true;
  } else {
    return false;
  }
}


const loContiene = contiene(objetoAnidado, 33); // true
const noLoContiene = contiene(objetoAnidado, "foo"); // false
const loContiene2 = contiene(objetoAnidado, "foo2"); // true

console.log(loContiene);
console.log(noLoContiene);
console.log(loContiene2);
