// import { AVG, Core } from "../engine";
// import { Dialogue } from "../engine/data/dialogue";
// import { AVGScriptUnit, APICallback } from "../engine/scripting/script-unit";
// import { APIShowDialogue } from "../engine/scripting/api/api-show-dialogue";

// // import { API_ShowDialogue } from "../engine/scripting/index";


// // export function API_ShowDialogue(options: Dialogue): AVGScriptUnit {
// //     console.log('API_ShowDialogue: ', options);

// //     let script = new APIShowDialogue();
// //     script.data = options;

// //     script.Callback = (script, data: Dialogue) => {

// //         return null;
// //     };

// //     return script;
// // }

// // export function text(options: Dialogue, callback?: APICallback): Promise<AVGScriptUnit> {
// //     let script = new APIShowDialogue();
// //     script.data = options;
// //     // script.Callback = new Promise<Dialogue>((resolve, reject) => {
// //     //     // script.Next = text({ text: 'hehehe' });
// //     // });

// //     // return script;

// //     return new Promise((resolve, reject) => {
// //         resolve();
// //     });
// // }


// let game = new AVG.Game();


// // game.start();
// game.start('./start.js');
// // game.startFromAPIs([
// //     text({
// //         text: '你是狗吗？'
// //     }, (scriptUnit: AVGScriptUnit, data: Dialogue) => {
// //         text({ text: '是你妹' });
// //         return null;
// //     }),
// //     text({
// //         text: 'Hello world2'
// //     }),
// // ]);