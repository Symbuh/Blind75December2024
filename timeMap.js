
var TimeMap = function() {
    this.map = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key] === undefined) {
        this.map[key] = [[timestamp, value]]
    } else {
        this.map[key].push([timestamp, value])
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (this.map[key] === undefined) {
        return ''
    }

    for (let i = this.map[key].length - 1; i >= 0; i--) {
        if (this.map[key][i][0] <= timestamp) {
            return this.map[key][i][1]
        }
    }

    return ''
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */