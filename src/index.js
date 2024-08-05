/**
 * 
 * @param {int} length integer 
 * @param {bool} isId boolean
 * @param {bool} alphabetOnly boolean 
 * @returns string
 */
 
exports.generate = (length, isId = false, alphabetOnly = false) => {
    try {
        let result = '';
        let chars;
        if (isId) {
            chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        } else if (alphabetOnly) {
            chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        } else {
            chars = "0123456789"
            
        }
        for (var i = length; i > 0; --i){
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    } catch( err ){
        return "Something Happened, could not generate idCode"
    } 
   
}