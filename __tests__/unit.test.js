// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber unit tests
test('(123) 456-7890 is a valid phone number', () => {;
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('(123) 456-7890 is a valid phone number', () => {;
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('1234 is not a valid phone number', () => {;
    expect(functions.isPhoneNumber('1234')).toBe(false);
});

test('abcd is not a valid phone number', () => {;
    expect(functions.isPhoneNumber('abcd')).toBe(false);
});

// isEmail unit tests
test('ktchen@ucsd.edu is a valid email', () => {;
    expect(functions.isEmail('ktchen@ucsd.edu')).toBe(true);
});

test('tpowell@gmail.com is a valid email', () => {;
    expect(functions.isEmail('tpowell@gmail.com')).toBe(true);
});

test('ucsd@ucsd@ucsd.edu is not a valid email', () => {;
    expect(functions.isEmail('ucsd@ucsd@ucsd.edu')).toBe(false);
});

test('himynameis is not a valid email', () => {;
    expect(functions.isEmail('himynameis')).toBe(false);
});

// isStrongPassword unit tests
test('Abc_1234 is a valid strong password', () => {;
    expect(functions.isStrongPassword('Abc_1234')).toBe(true);
});

test('cd_24 is a valid strong password', () => {;
    expect(functions.isStrongPassword('cd_24')).toBe(true);
});

test('happy@lemon is not a valid strong password', () => {;
    expect(functions.isStrongPassword('happy@lemon')).toBe(false);
});

test('1 is not a valid strong password', () => {;
    expect(functions.isStrongPassword('1')).toBe(false);
});

// isDate unit tests
test('10/20/2023 is a valid date', () => {;
    expect(functions.isDate('10/20/2023')).toBe(true);
});

test('1/4/2022 is a valid date', () => {;
    expect(functions.isDate('1/4/2022')).toBe(true);
});

test('10/20/202 is not a valid date', () => {;
    expect(functions.isDate('10/20/202')).toBe(false);
});

test('20/2022 is not a valid date', () => {;
    expect(functions.isDate('20/2022')).toBe(false);
});

// isHexColor unit tests
test('#32a852 is a valid hex color', () => {;
    expect(functions.isHexColor('#32a852')).toBe(true);
});

test('#ffffff is a valid hex color', () => {;
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('#1 is not a valid hex color', () => {;
    expect(functions.isHexColor('#1')).toBe(false);
});

test('green is not a valid hex color', () => {;
    expect(functions.isHexColor('green')).toBe(false);
});