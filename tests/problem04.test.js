const problem04 =  require('../src/problem04');

let arrivals1, departures1, arrivals2, departures2, k1, k2, k3, k4;

beforeAll(() => {
    arrivals1 = [1, 2, 7, 5];
    departures1= [3, 4, 9, 6];
    k1 = 2;
    k2 = 3;


    arrivals2 = [1, 3, 5];
    departures2= [2, 6, 10];
    k3 = 0;
    k4 = 1;
});

test('Ensure there are enough rooms in the hotel', () => {
    expect(problem04(arrivals1, departures1, k1)).toEqual(true);
    expect(problem04(arrivals1, departures1, k2)).toEqual(true);
});


test('Ensure there are NOT enough rooms in the hotel', () => {
    expect(problem04(arrivals2, departures2, k3)).toEqual(false);
    expect(problem04(arrivals2, departures2, k4)).toEqual(false);
});


