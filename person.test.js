let Person = require('./person');

test('1985 should be Millenial', () => {
    //arange-----------------------------
    let personObj = new Person(1985);

    //act ----------------perform action
    let result = personObj.isMillennial();

    //assert ------to state what result should be
    expect(result).toBeTruthy();
})

test('1920 should be a Retiree', () => {
    let personObj = new Person(1920);

    let result = personObj.isRetiree();

    expect(result).toBeTruthy();
})