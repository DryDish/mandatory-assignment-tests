export function numberGenerator(maxNumber:number): number {
  return Math.floor(Math.random() * maxNumber) + 1;
}