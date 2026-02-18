function tra(cgt){
    const x = {
        'g': 'c',
        'c': 'g',
        't': 'a',
        'a': 't',
    };
    let rna = ''
    for(let i = 0; i < cgt.length; i++){
        rna += x[cgt[i]]
    }
    for(x in cgt){
        rna += x[cgt];
    }
    return rna;
}
