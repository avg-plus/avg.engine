
import { AVGData } from './avg-data';
import { ResourceData } from './resource-data';
import { Avatar } from './avatar';

export class Character extends AVGData {
    public name: string;
    public avatar?: Avatar;
}
