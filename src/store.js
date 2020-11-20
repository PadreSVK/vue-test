const store = {
    personList: [
        {
          number: 1,
          lastName: 'Novák',
          firstName: 'Josef',
          year: 1980,
          sallary: 25000
        },
        {
          number: 2,
          lastName: 'Novotný',
          firstName: 'Petr',
          year: 1969,
          sallary: 30000
        },
        {
          number: 3,
          lastName: 'Kroupa',
          firstName: 'Ignác',
          year: 1980,
          sallary: 40000
        },
        {
          number: 4,
          lastName: 'Džugašvili',
          firstName: 'Soso',
          year: 1895,
          sallary: 50000
        },
      ],

      getters: {
        getData: personList => {
          return personList;
        },
        getSallary: personList => {
            return personList.map((person /*, index, something*/) => [person.number, person.sallary]);
          }
  
      }
  };


export default store;
