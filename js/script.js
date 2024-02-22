/**
 * Return zodiac sign by month and day
 
 @param {number} day - Birth day (1-31)
 @param {number} month - Birth month (1-12)
 @return {string} - Name of the zodiac sign
*/ 
function getZodiacSign(day, month) {
    const zodiacSigns = {
        'capricorn': 'Capricorn',
        'aquarius': 'Aquarius',
        'pisces': 'Pisces',
        'aries': 'Aries',
        'taurus': 'Taurus',
        'gemini': 'Gemini',
        'cancer': 'Cancer',
        'leo': 'Leo',
        'virgo': 'Virgo',
        'libra': 'Libra',
        'scorpio': 'Scorpio',
        'sagittarius': 'Sagittarius'
    };

    if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
        return zodiacSigns.capricorn;
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
        return zodiacSigns.aquarius;
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return zodiacSigns.pisces;
    } // ... continue for other zodiac signs

    // Handle invalid input (optional)
    return 'Invalid date';
}

// Example usage:
const birthDay = 15; // Example day
const birthMonth = 3; // Example month
const sign = getZodiacSign(birthDay, birthMonth);
console.log(`Your zodiac sign is: ${sign}`);
