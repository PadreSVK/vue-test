const store = {
    state: {
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
    },

    getters: {
        getData: state => {
            return state.personList;
        },
        getSallary: state => {
            return state.personList.map((person => [person.number, person.sallary]));
        }

    }
};


// add function via method binding
// const item = {}
// function getSallary(personList) {
//     return personList.map((person => [person.number, person.sallary]));
// }
// item.getSallary = getSallary;


// crate object with function 1
// const item = {
//     getSallary: function (personList) {
//         return personList.map((person => [person.number, person.sallary]));
//     }
// }

// crate object with function 2
// const item = {
//     getSallary: (personList) => {
//         return personList.map((person => [person.number, person.sallary]))
//     }
// }

// crate object with function 3
// const item = {
//     getSallary: (personList) => personList.map((person => [person.number, person.sallary]))
// }

// store method call
// store.getters.getData(store.state)

export default store;