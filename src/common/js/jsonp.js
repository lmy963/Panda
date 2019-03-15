import Jsonp from "jsonp"

export default  function jsonp(url,datd){
	return new Promise((resove,reject)=>{
		let opt = {
			param:'jsonpCallback'
		}
		Jsonp(url,opt,(err,data)=>{
			if(err){
				return reject(err)
			}else{
				return resove(data)
			}
		})
	})
}