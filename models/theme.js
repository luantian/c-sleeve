import {Http} from "../utils/Http";

class Theme {

    //static 什么时候加 如果需要保存状态 => 实例方法， 如果不需要保存状态 => 静态方法

    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: 'theme/by/names',
            data: {
                names
            }
        })
    }

    getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA)
    }

    getHomeLocationE() {
        return this.themes.find(t => t.name === Theme.locationE)
    }

    getHomeLocationF() {
        return this.themes.find(t => t.name === Theme.locationF)
    }

    getHomeLocationH() {
        return this.themes.find(t => t.name === Theme.locationH)
    }

    static getThemeSpuByName(name) {
        return Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }

    static getHomeLocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

}

export { Theme }