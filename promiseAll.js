function tunggu(status) {
  console.log('tunggu 1 detik')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(status){
        resolve('hai ' + status)
      } else {
        reject('tidak bisa')
      }
    }, 2000)
  })
}

let students = ['efrat', 'yoga', 'agus', 'gusti', 'harles']

const promiseAll = students.map(student => {
  return tunggu(student)
})

Promise.all(promiseAll)
  .then(result => {
    result.forEach(datum => {
      console.log(datum)
    })
  })
  .catch(err => {
    console.log(err)
  })

// jalan(students)

// async function jalan(students) {
//   for (let index = 0; index < students.length; index++) {
//     let halo = await tunggu(students[index])
//     console.log(halo)
//   }  
// }

