import pkgJson from './package.json'
import view from './view'
import action from './action'
import state from './state'
import './mock'
import './style.less'
import './img/th.jpg'
import './img/th2.jpg'

const name = pkgJson.name

export {
    name,
    view,
    state,
    action
}

