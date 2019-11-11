describe('Bubble Sort', function() {
    it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', function() {
        let array = [8, 3, 5, 4, 7, 9, 1, 2, 6];
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be less than or equal to ${numberWithCommas(Math.pow(array.length, 2))}`);
        expect(sortedArray[0]).toEqual(array.sort((a, b) => a - b));
        expect(sortedArray[1]).toBeLessThanOrEqual(Math.pow(array.length, 2));
    });
    it('should deal with multiple of the same number', function() {
        let array = [8, 4, 5, 2, 7, 9, 1, 2, 7];
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be less than or equal to ${numberWithCommas(Math.pow(array.length, 2))}`);
        expect(sortedArray[0]).toEqual(array.sort((a, b) => a - b));
        expect(sortedArray[1]).toBeLessThanOrEqual(Math.pow(array.length, 2));
    });
    it('should sort an array with 500 numbers correctly', function() {
        let array = [2202, 5700, 1519, 1110, 2345, 5332, 1043, 2464, 3022, 4301, 9334, 2239, 4865,
            2706, 6209, 9522, 215, 6088, 8826, 2792, 8319, 9808, 4095, 9238, 2570, 6318, 9782, 3572,
            7014, 650, 5220, 1773, 4539, 3220, 252, 7685, 4840, 9354, 3410, 2439, 8487, 1591, 8603,
            2238, 1762, 9318, 3488, 2895, 235, 711, 4460, 5006, 5660, 4373, 4776, 7783, 6614, 5020,
            4487, 5721, 2605, 9990, 4182, 835, 7778, 3118, 2278, 4559, 1789, 5428, 5752, 2087, 3995,
            3971, 2952, 3348, 3537, 4322, 2667, 3931, 5410, 5710, 77, 7211, 4311, 5801, 3294, 6047,
            5384, 6628, 9106, 9099, 9561, 288, 2770, 35, 8882, 3994, 4668, 535, 7644, 7687, 921, 6167,
            5596, 3624, 6320, 8479, 9982, 5638, 7949, 7279, 163, 9326, 9582, 1968, 9145, 8397, 6883,
            6970, 4718, 744, 1608, 3430, 8647, 2324, 4244, 9648, 3281, 1134, 8073, 4935, 8746, 7011,
            5935, 761, 391, 5255, 2953, 5004, 7245, 8701, 5986, 3368, 3840, 3461, 6087, 5514, 1534,
            9705, 9092, 7588, 8734, 1627, 1353, 6348, 9046, 1499, 3388, 7932, 7901, 2452, 2554, 2253,
            8361, 8263, 7994, 1784, 8740, 8940, 4685, 7085, 1276, 7585, 7906, 9292, 8805, 2968, 8156,
            6636, 6468, 7925, 8672, 3851, 2368, 6157, 422, 1483, 9213, 2642, 4947, 9445, 3289, 3287,
            6439, 79, 2691, 1400, 4034, 9848, 7385, 1743, 61, 2148, 8808, 809, 7532, 1536, 1827, 3308,
            4641, 6307, 2808, 2560, 6910, 6822, 2535, 40, 2017, 6173, 1841, 1555, 2075, 9285, 7834, 7172,
            9856, 1315, 6463, 4277, 9879, 8709, 8010, 2114, 8698, 674, 9564, 6110, 5476, 2878, 1705, 3676,
            6695, 5065, 5146, 2115, 4588, 157, 9361, 5248, 221, 2996, 187, 9080, 5042, 3229, 2921, 9215,
            2540, 12, 8623, 9942, 2254, 3906, 8168, 8453, 404, 3334, 7082, 8844, 9536, 9091, 2081, 4133,
            9915, 5423, 445, 3818, 3001, 2479, 567, 1600, 1236, 3267, 5131, 1715, 3397, 8501, 4834, 7419,
            1017, 2797, 7138, 7957, 1963, 6497, 8530, 7051, 4886, 419, 3651, 6804, 8483, 9524, 7501, 3929,
            5722, 5832, 3442, 8796, 2936, 3171, 8972, 4313, 9651, 4932, 7629, 4968, 466, 3886, 5548, 4424,
            49, 1615, 3890, 4554, 2709, 7452, 4352, 9887, 2270, 5051, 3108, 826, 8265, 7439, 5612, 8751,
            1239, 900, 7015, 1380, 9740, 5932, 2754, 3877, 7377, 3738, 3512, 2119, 4693, 1048, 6700, 1227,
            6227, 3283, 8659, 6717, 868, 9726, 6760, 3071, 390, 3708, 8155, 3786, 1018, 357, 2543, 7823,
            7436, 5692, 1352, 6781, 1287, 1512, 6517, 760, 3424, 9035, 6709, 4083, 4583, 9477, 9796, 217,
            594, 2604, 5784, 7103, 4937, 353, 5328, 2662, 5366, 7832, 802, 1811, 1008, 8376, 9515, 776,
            6996, 2160, 1095, 4222, 6055, 4971, 5715, 1671, 5646, 2887, 373, 8798, 9739, 3291, 2459, 3917,
            9244, 5478, 7654, 4613, 3, 5137, 7914, 2008, 4183, 7562, 2192, 8900, 6916, 503, 1021, 764, 5834,
            1718, 7197, 4358, 1955, 7292, 8985, 3150, 5285, 9664, 7831, 1958, 4134, 5873, 5875, 6621, 1666,
            800, 8068, 2881, 9787, 2006, 1161, 5411, 9321, 3180, 3534, 9688, 5165, 6561, 637, 9956, 1571,
            1810, 4606, 8876, 8074, 7459, 6405, 8569, 9405, 2220, 2763, 7309, 7573, 1763, 3569, 2385, 3501,
            229, 7700, 4261, 6300, 2872, 4531, 9304, 778, 9172, 8601, 206, 6865, 8125, 4825, 9475, 6194, 9330];
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be less than or equal to ${numberWithCommas(Math.pow(array.length, 2))}`);
        expect(sortedArray[0]).toEqual(array.sort((a, b) => a - b));
        expect(sortedArray[1]).toBeLessThanOrEqual(Math.pow(array.length, 2));
    });
    it('should not break if an empty array is passed in', function() {
        let array = [];
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be 0`);
        expect(sortedArray[0]).toEqual([]);
        expect(sortedArray[1]).toBe(0);
    });
    it('should not break if nothing is passed in', function() {
        let sortedArray = bubbleSort();
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be 0`);
        expect(sortedArray[0]).toEqual([]);
        expect(sortedArray[1]).toBe(0);
    });
    it('should not break if one item is in the array', function() {
        let array = [9];
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be 0`);
        expect(sortedArray[0]).toEqual([9]);
        expect(sortedArray[1]).toBe(0);
    });
    it('should sort ["c", "f", "v", "a", "b"] corectly', function() {
        let array = ['c', 'f', 'v', 'a', 'b'];
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be less than or equal to ${numberWithCommas(Math.pow(array.length, 2))}`);
        expect(sortedArray[0]).toEqual(array.sort());
        expect(sortedArray[1]).toBeLessThanOrEqual(Math.pow(array.length, 2));
    });
    it('should sort an array with 10,000 numbers in it', function() {
        let array = [];
        for (let i = 0; i < 10000; i++) {
            array.push(Math.ceil(Math.random() * 10000));
        }
        let sortedArray = bubbleSort(array);
        console.log(`array: ${JSON.stringify(sortedArray[0])}\nruntime: ${numberWithCommas(sortedArray[1])}\nexpected runtime to be less than or equal to ${numberWithCommas(Math.pow(array.length, 2))}`);
        expect(sortedArray[0]).toEqual(array.sort());
        expect(sortedArray[1]).toBeLessThanOrEqual(Math.pow(array.length, 2));
    });
});