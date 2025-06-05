export function convertMinutes(minutes){
    const hours=Math.floor(minutes/60)
    const remMin=minutes%60
    return `${hours}hrs ${remMin}mins`
}