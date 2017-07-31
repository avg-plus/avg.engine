
import { Input } from './core/input';
import { AVGGame } from './core/game';
import { Transition } from './core/transition';


// Export class / interface
export { InputKeys } from './core/input';
export * from './core/transition';

// Export Instances
export let input = new Input();
export let game = new AVGGame();
