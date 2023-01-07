export const ShuffleArray= (Array:any[])=> 
[...Array].sort(()=> Math.random()-0.5)