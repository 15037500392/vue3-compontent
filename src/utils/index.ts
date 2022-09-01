// 把驼峰转化为横杠连接
export const toLine = (value:string) =>{
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}