import { generateUser } from '../fake-data';

export default function user(state = generateUser(), action){
    return state
}
