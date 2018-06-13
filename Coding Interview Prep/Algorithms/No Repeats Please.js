function permAlone(str) {
    var result = 0;
    var fact = [1];
    for (var i = 1; i <= str.length; i++) {
        fact[i] = i * fact[i - 1];
    }
    for (var i = 0; i < fact[str.length]; i++) {
        var perm = "";
        var temp = str;
        var code = i;
        for (var pos = str.length; pos > 0; pos--) {
            var sel = code / fact[pos - 1];
            perm += temp.charAt(sel);
            code = code % fact[pos - 1];
            temp = temp.substring(0, sel) + temp.substring(sel + 1);
        }
        console.log(perm);
        if (! perm.match(/(.)\1/g)) result++;
    }
    return result;
}




document.write( permAlone('abfdefa'));