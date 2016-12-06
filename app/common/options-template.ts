import {BUSY_CONFIG_DEFAULTS} from 'angular2-busy';

export const OPTIONS_TEMPLATE: Object = {
    default: BUSY_CONFIG_DEFAULTS.template,
    custom: `
        <div style="background: url('./img/du.gif') no-repeat center 20px; background-size: 72px;">
            <div style="margin-top: 110px; text-align: center; font-size: 18px; font-weight: 700;">
                {{message}}
            </div>
        </div>
    `
};