const { prices } = require("./data.js");
const { hours } = require("./data.js");
const { animals } = require("./data.js");
const { employees } = require("./data.js");

function entryCalculator(entrants) {
  let priceAdult = prices["Adult"];
  let priceSenior = prices["Senior"];
  let priceChild = prices["Child"];
  let result = 0;
  if (entrants === undefined || entrants == 0) {
    result = 0;
  } else if (entrants.Adult > 0 || (entrants.Senior > 0) || (entrants.Child > 0)) {
    result = (entrants.Adult * priceAdult) + (entrants.Senior * priceSenior) + (entrants.Child * priceChild)
  }
  return result
}

function schedule(dayName) {

  let schedule = {};
  
  Object.entries(hours).forEach(([key, value]) => {

    if (value.close > 12) {
      value.close -= 12;
    }

    if (dayName === undefined) {
      if (key !== 'Monday') {
        schedule[key] = `Open from ${value.open}am until ${value.close}pm`;
      } else {
        schedule.Monday = `CLOSED`;
      }
    } else {
      if (key === dayName) {
        schedule[key] = `Open from ${value.open}am until ${value.close}pm`;
        if (dayName === 'Monday') {
          schedule.Monday = `CLOSED`;
        }
      }
    }

  })
      
  return schedule
}

function animalCount(species) {
  // animals
  let list = {};
  if (species === undefined) {
    for (let animal of animals){
        list[animal.name] = Object.entries(animal.residents).length;
    }
    return list
  } else {
    for (let animal of animals){
      if (species === animal.name) {
        return Object.entries(animal.residents).length;
      }
    }
  }
}

function animalMap(options) {
  const obj = {}
  
  animals.forEach(animal => {
    if (!obj[animal.location]) {
      obj[animal.location] = []
    }
    
    const residents = animal.residents.map(resident => resident.name);
    const residentsFemale = animal.residents.filter(resident => 
      resident.sex == 'female').map(a => a.name)
    const dataObj = {};

    if (options) { 

      if (options.includeNames) {
        options.sex == 'female' ? dataObj[animal.name] = residentsFemale : dataObj[animal.name] = residents
        obj[animal.location].push(dataObj)
      } else {
        obj[animal.location].push(animal.name)
      }

    } else {
      obj[animal.location].push(animal.name)
    }
  });

  return obj
}

function animalPopularity(rating) {
  if (rating) {
    const arr = []
    for (let animal of animals) {
      if (rating == animal.popularity) {
        arr.push(animal.name)
      }
    }
    return arr

  } else {
    const obj = {}

    animals.forEach(animal => {
      if (!obj[animal.popularity]) {
        obj[animal.popularity] = []
      }
      obj[animal.popularity].push(animal.name)
    })
  
    return obj
  }
}

function animalsByIds(ids) {
  const arr = []

  if (ids) {
    for (let animal of animals) {
      if (ids == animal.id) {
        arr.push(animal)
      }
      if (ids.length > 1) {
        for (let id of ids) {
          if (id == animal.id) {
            arr.push(animal)
          }
        }
      } 
    }
  } 

  return arr
}

function animalByName(animalName) {
  const obj = {}
  
  if (animalName) {

    const animalData = 
      animals.find(animal => animal.residents
        .find(resident => resident.name === animalName))

    const residentsData = animalData.residents.find(resident => 
      resident.name === animalName)
  
    obj.name = residentsData.name
    obj.sex = residentsData.sex
    obj.age = residentsData.age
    obj.species = animalData.name
  }

  return obj

}

function employeesByIds(ids) {
  if (ids === undefined) {
    return []
  } else {
    let data = [];
    for (let employee of employees){
      if (ids === employee.id) {
        data.push(employee)
      }

      for (let id of ids) {
        if (id === employee.id) {
          data.push(employee)
        }
      }
    }
    return data
  }
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {}
  } else {
    for (let employee of employees){
      if (employeeName === employee.firstName) {
        return employee
      }
      if (employeeName === employee.lastName) {
        return employee
      }
    }
  }
}

function managersForEmployee(idOrName) {
  let obj = {}

  const currentEmployee = 
    employees.find(employee => employee.id === idOrName 
                  || employee.firstName === idOrName 
                  || employee.lastName === idOrName);

  const managerIdToName = 
    employees.filter(employee => currentEmployee.managers
      .includes(employee.id))
      .map(manager => `${manager.firstName} ${manager.lastName}`);

  obj = currentEmployee;
  obj.managers = managerIdToName

  return obj
}

function employeeCoverage(idOrName) {
  const employeeData = employees.reduce((result, employee) => {

    if (employee.id === idOrName || 
      employee.firstName === idOrName || 
      employee.lastName === idOrName || 
      idOrName === undefined) {

      const employeeName = `${employee.firstName} ${employee.lastName}`;

      result[employeeName] = 
        employee.responsibleFor.map(animalId => {
          const animal = animals.find(animal => animal.id === animalId);
          return animal.name;
        });

    }
    return result;
  }, {});

  return employeeData;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
