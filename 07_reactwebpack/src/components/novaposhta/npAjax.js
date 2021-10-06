export default class NpAjax{
    static Get(modelName, calledMethod, methodProperties, callBackOk, callBackErr){
        fetch(
            "http://api.novaposhta.ua/v2.0/json/",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    "modelName": modelName,
                    "calledMethod": calledMethod,
                    "methodProperties": methodProperties,
                    "apiKey": "291ff9c082ce1816320f64a4f9f013b9"
                })
            }
        )
            .then(res => {
                if (res.status !== 200){
                    console.log(res.status);
                    console.log(res.statusText);
                    if (callBackErr) callBackErr(res.statusText);
                }
                return res.json();
            })
            .then(json => {
                if (json['success']) {
                    callBackOk(json['data'])
                } else {
                    console.log(json['errors']);
                    console.log(json['warnings']);
                    if (callBackErr) callBackErr(json['errors']);
                }
            })
            .catch(err => {console.log(err); if (callBackErr) callBackErr(err);}
            )
    }
}