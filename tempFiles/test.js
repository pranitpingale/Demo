

console.log(isPhoneNumberNANP("(234) 555 1000"))

function isPhoneNumberNANP(number){

        let regex = /^\(?([2-9][0-9]{2})\)?[-. ]?([2-9](?!11)[0-9]{2})[-. ]?([0-9]{4})$/
        return regex.test(number)
    }




