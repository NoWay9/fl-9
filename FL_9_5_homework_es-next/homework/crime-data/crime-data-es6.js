const victimDataSource = name => {
    const victimsByName = {
      'John': {
        name: 'John',
        surname: 'Doe',
        age: '99',
        jobTitle: 'Victim'
      },
      'Jennifer': {
        name: 'Jennifer',
        surname: 'Nicker',
        age: '21',
        jobTitle: 'Artist'
      }
    };
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (victimsByName.hasOwnProperty(name)) {
          resolve(victimsByName[name]);
        } else {
          reject('unknown victim');
        }
      }, 1000);
    });
  };
  
  const crimeDataSource = surname => {
    return new Promise((resolve, reject) => {
      const crimeBySurname = {
        'Doe': {
          title: 'dank memes',
          place: '9gag'
        },
        'Nicker': {
          title: 'robbery',
          place: 'NYC'
        }
      };
  
      setTimeout(() => {
        if (crimeBySurname.hasOwnProperty(surname)) {
          resolve(crimeBySurname[surname]);
        } else {
          reject('unknown surname');
        }
      }, 500);
    });
  };


  const loadVictimData = data => new Promise(resolve => {
    victimDataSource(data)
    .then(victim => {
        crimeDataSource(victim.surname)
        .then(crime => {
            const {name, surname, jobTitle, age} = victim;
            const {title, place} = crime;
            resolve(`${name} ${surname}(${jobTitle}, ${age}) suffered from ${title} in ${place}.`);
          })
    })
    .catch(e => resolve(`Unhandled Promise rejection: ${e}`));
  });
