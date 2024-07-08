export function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function getRandomElement(arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getAcronym(str: string): string {
  return str.split(/\s/).reduce((a, word) => (a += word.slice(0, 1)), "");
}
