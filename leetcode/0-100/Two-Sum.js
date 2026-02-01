// Two Sum - Adım Adım Çözüm

var twoSum = function(nums, target) {
    // nums: sayı dizisi [2, 7, 11, 15]
    // target: hedef sayı 9

    // HashMap: gördüğümüz sayıları burada tutacağız
    // Örnek: {2: 0, 7: 1} → "2 sayısı index 0'da, 7 sayısı index 1'de"
    const map = new Map();

    // Diziyi baştan sona gez
    for (let i = 0; i < nums.length; i++) {
        // i = index (0, 1, 2, 3...)
        // nums[i] = o indexteki sayı

        // "Hedefe ulaşmak için hangi sayı lazım?"
        const complement = target - nums[i];

        // Bu sayı daha önce gördüklerimizde var mı?
        if (map.has(complement)) {
            // BULDUK! İki indexi döndür
            return [map.get(complement), i];
        }

        // Bulamadık, bu sayıyı kaydet (ileride lazım olabilir)
        map.set(nums[i], i);
    }
};

// TEST
console.log(twoSum([2, 7, 11, 15], 9));  // Beklenen: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Beklenen: [1, 2]
console.log(twoSum([3, 3], 6));          // Beklenen: [0, 1]
