import { Dialogue, Sound, Scene, Timer, WidgetAnimation, Avatar } from "../../data";
import { Subtitle } from "../../data/subtitle";
export declare namespace api {
    /**
     * Show dialogue box
     *
     * @export
     * @param {string} text
     * @param {Dialogue} [options]
     */
    function showText(text: string | Array<string>, options?: Dialogue): Promise<void>;
    function hideText(options?: Dialogue): Promise<void>;
    function showCharacter(avatar: Avatar, index?: number): Promise<void>;
    function hideCharacter(index?: number): Promise<void>;
    function showChoices(choices: Array<string>): Promise<void>;
    /**
     * Load scene with image filename
     *
     * @export
     * @param {string} filename The background image file of scene
     * @param {Scene} [options]
     */
    function loadScene(index: number, filename: string, options?: Scene): Promise<void>;
    function playBGM(filename: string, options: Sound): Promise<void>;
    function stopBGM(options: Sound): Promise<void>;
    function pauseBGM(options: Sound): Promise<void>;
    /**
     * Represents a book.
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     */
    function resumeBGM(options: Sound): Promise<void>;
    function playVoice(filename: string, options: Sound): Promise<void>;
    function playSE(filename: string, options: Sound): Promise<void>;
    function playBGS(filename: string, options: Sound): Promise<void>;
    function wait(time: number, options: Timer): Promise<void>;
    /**
     * Navigate to game title view
     *
     * @export
     */
    function callTitleView(): Promise<void>;
    function sceneEffect(index: number, effectName: string, options: any): Promise<void>;
    function animateScene(index: number, animateName: string, options: any): Promise<void>;
    function getVariable(name: string): Promise<any>;
    function setVariable(name: string, value: any): Promise<any>;
    function showSubtitle(id: string, text: string, options: Subtitle): Promise<void>;
    function animateSubtitle(id: string, animation: WidgetAnimation): Promise<void>;
    function updateSubtitle(id: string, text: string): Promise<void>;
    function hideSubtitle(id: string, options: {
        animation: WidgetAnimation;
    }): Promise<void>;
}
