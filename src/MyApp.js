import Lightning from 'wpe-lightning'
export default class MyApp extends Lightning.Application {
    static _template() {
        return {
            Text: {text: {text: "hello world"}}
        }
    }
}