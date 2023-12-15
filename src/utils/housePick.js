export function getRandomOption() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3);

      switch (randomNumber) {
        case 0:
          resolve("rock");
          break;
        case 1:
          resolve("paper");
          break;
        case 2:
          resolve("scissors");
          break;
        default:
          resolve("unknown");
          break;
      }
    }, 1000); // 1 second delay
  });
}
