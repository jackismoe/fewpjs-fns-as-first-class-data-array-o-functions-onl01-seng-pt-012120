const wakeDog =  function(dogName='Byron', dogBreed='poodle') {
  const wakeUp = `Wake ${dogName} the ${dogBreed}`;
  console.log(wakeUp);
  return wakeUp;
}

const leashDog =  function(dogName='Byron', dogBreed='poodle') {
  const leashUp = `Leash ${dogName} the ${dogBreed}`;
  console.log(leashUp);
  return leashUp;
}

const walkToPark =  function(dogName='Byron', dogBreed='poodle') {
  const walk = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(walk);
  return walk;
}

const throwFrisbee =  function(dogName='Byron', dogBreed='poodle') {
  const throwIt = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(throwIt);
  return throwIt;
}

const walkHome =  function(dogName='Byron', dogBreed='poodle') {
  const walk = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(walk);
  return walk;
}

const unleashDog =  function(dogName='Byron', dogBreed='poodle') {
  const unleash = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleash);
  return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}