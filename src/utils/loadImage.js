// 图片引入插件

export function importAll(r) {
    let image = {};
    r.key().map((item, index) => { image[item.replace('./', '')] = r(item); });
    return image;
}

const image = importAll(require.context('../assets/img/xuezhang', false, /\.(png|jpeg|svg|jpg)$/));

export default image;