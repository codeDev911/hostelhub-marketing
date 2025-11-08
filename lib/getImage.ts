

export const getImageUrl = (img:any) : string =>{
    return img && JSON.parse(img).url || "/placeholder.svg"
}