const sleep = (time: number) => new Promise((r) => setTimeout(r, time));
export default sleep;