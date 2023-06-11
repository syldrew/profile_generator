const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    const hobbies = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      const music = answer;
      rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
        const faveFood = answer;
        rl.question("Which sport is your absolute favourite? ", (answer) => {
          const faveSport = answer;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            const superpower = answer;
            console.log(`This is  ${name}. ${name} enjoys ${hobbies}, and while doing that listenig to ${music}. ${name} loves eating ${faveFood}. ${name} prefers  playing ${faveSport} over other sports. ${name} has the superpower of  ${superpower}, because ${name} enjoys it so much`);
            rl.close();
          });
        });
      });
    });
  });
});
