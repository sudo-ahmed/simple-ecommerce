export const pathName = ()=>{
    let path = window.location.pathname;
    const firstIndex = path.indexOf('/');
    const lastIndex = path.lastIndexOf('/')
    return path.slice(firstIndex + 1, lastIndex);
}

export const compare = (str, data)=>{
    if(str && data){
        let toArr = str.title.split(' ');
        let itemId = str.id;
        let titleArr = data.filter((ele)=>{
            let eleArr = ele.title.split(' ');
            var count = 0;
            for (let index = 0; index < toArr.length; index++) {
                let title = eleArr.every(ele => ele !== toArr[index])
                let id = Boolean(itemId === ele.id)
                if(!title & !id){
                    count++ 
                }
            }
    
            return count >= (toArr.length / 2) 
        })
        return titleArr
    }
}
