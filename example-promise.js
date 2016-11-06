/**
 * Created by soundararajanvenkatasubramanian on 11/5/16.
 */
// function getTempCallBack(location, callback){
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallBack('Philadelphia', function (err, temp) {
//    if(err) {
//        console.log('error')
//    }else{
//        console.log('success', temp)
//    }
// });

// function getTempPromise (location){
//     return new Promise(function (resolve, reject) {
//      setTimeout( function (){
//          resolve(79);
//          reject('City not found');
//      }, 1500);
//     });
// }
//
//
// getTempPromise ('Pjiladelphia').then( function(temp){
//     console.log("Temp = " + temp);
// }, function(err) {
//     console.log("Promise error = " + err);
// });

function addPromise(a, b){
    return new Promise( function (resolve, reject){
        if(a && typeof a === 'number' && b && typeof b === 'number'){
             resolve(a + b);
        } else {
            reject('Please provide 2 numbers');
        }
    });
}

addPromise(5, 4).then( function(sum){
    console.log('Promise success ' + sum);
}, function(err){
   console.log("Error: " + err);
});

addPromise(5, "abcd").then( function(sum){
    console.log('Promise success ' + sum);
}, function(err){
    console.log("Error: " + err);
});

addPromise("abcd", 4).then( function(sum){
    console.log('Promise success ' + sum);
}, function(err){
    console.log("Error: " + err);
});

addPromise(5).then( function(sum){
    console.log('Promise success ' + sum);
}, function(err){
    console.log("Error: " + err);
});

