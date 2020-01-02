export class Message {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public content: string,
        public subject?: string
    ){
        let messageTest =  new Message(42, 'SkyDog',
                       'skydog@gmail.com',
                       'Super site',
                       'Youpi !');
        console.log('Expéditeur : ' + messageTest.name); // "My hero is called SkyDog"
    }

    
}
