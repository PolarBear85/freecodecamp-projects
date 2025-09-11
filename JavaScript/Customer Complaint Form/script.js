const nameInput = document.querySelector("#full-name")
const emailInput = document.querySelector('#email');
const orderInput = document.querySelector('#order-no')
const productInput = document.querySelector('#product-code');
const quantityInput = document.querySelector('#quantity');
const complaintCheck = document.querySelectorAll('input[name="complaint"]');
const complaintDesc = document.querySelector('#complaint-description');
const solutionRadio = document.querySelectorAll('input[name="solutions"]')
const solutionDesc = document.querySelector('#solution-description');
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('#form')
const complaintsGroup = document.querySelector("#complaints-group")
const solutionsGroup = document.querySelector("#solutions-group")




function checkName(formName) {
    if (formName.value === ""||!formName.checkValidity()) {
        return false;
    }
    return true
}

function checkEmail(formEmail) {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(formEmail.value)

}

function checkOrderNo(orderNum) {
    const regex = /(2024)\d{6}/
    if(regex.test(orderNum.value)) {
        return true;
    }
    return false;
}

function checkProductCode(productCode) {
    const regex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/

    if(regex.test(productCode.value)) {
        return true;
    }
    return false;
}


function checkProductQuantity(productQuantity) {
    if (productQuantity.value>0 && productQuantity.checkValidity()) {
        return true
    }
    return false;
}

function checkComplaintReason(complaintArr) {
    let validComplaint = false;

    complaintArr.forEach(complaint => {
        if (complaint.checked) {
            validComplaint = true;
        }
    })
    
    return validComplaint;
}

function checkComplaintDesc(areComplaints, complaintArr, complaintDesc) {
    if (areComplaints) {
        for (let i = 0; i < complaintArr.length; i++) {
            if (complaintArr[i].value ==="other" &&complaintArr[i].checked) {
                if (complaintDesc.value.length <20) {
                    return false
                }
                return true
            }
        }
        return true;
    }
    return true
}

function checkSolution(solutionArr) {
    let validSolution = false;
    solutionArr.forEach(solution => {
        if (solution.checked) {
            validSolution = true;
            return validSolution;
        }
    })
    return validSolution;
}

function checkSolutionDesc(areSolutions, solutionArr, solutionDesc) {
    if (areSolutions) {
        for (let i = 0; i<solutionArr.length; i++) {
            if (solutionArr[i].value ==="other" && solutionArr[i].checked){
                if (solutionDesc.value.length<20) {
                    return false;
                }
                return true
            }
        }
        return true;
    }
    return true;
}



function validateForm() {

        return {
            "full-name":checkName(nameInput),
            "email":checkEmail(emailInput),
            "order-no":checkOrderNo(orderInput),
            "product-code":checkProductCode(productInput),
            "quantity":checkProductQuantity(quantityInput),
            "complaints-group":checkComplaintReason(complaintCheck),
            "complaint-description":checkComplaintDesc(checkComplaintReason(complaintCheck), complaintCheck,complaintDesc),
            "solutions-group":checkSolution(solutionRadio),
            "solution-description":checkSolutionDesc(checkSolution(solutionRadio),solutionRadio,solutionDesc)
        }  


}

function isValid(validationArr) {
    let validated = true;
    for (const check in validationArr) {
        console.log(validationArr[check])
        if (validationArr[check] === false) {
            return false
        }
    }
    return validated
}



nameInput.addEventListener("change", (e)=> {
    updateStyle(checkName(e.target),e.target)
})

emailInput.addEventListener("change", (e)=> {
    updateStyle(checkEmail(e.target),e.target)
})

orderInput.addEventListener("change", (e)=> {
    updateStyle(checkOrderNo(e.target),e.target)
})

productInput.addEventListener("change", (e)=> {
    updateStyle(checkProductCode(e.target),e.target);
})

quantityInput.addEventListener("change", (e)=> {
    updateStyle(checkProductQuantity(e.target),e.target);
})

complaintsGroup.addEventListener("change",(e)=> {
    updateStyle(checkComplaintReason(complaintCheck),complaintsGroup)
})


complaintDesc.addEventListener("change", (e)=> {
    const validInput = checkComplaintDesc(checkComplaintReason(complaintCheck), complaintCheck,complaintDesc)
    
    updateStyle(validInput, e.target)

})

solutionsGroup.addEventListener("change",(e)=> {
    updateStyle(checkSolution(solutionRadio),solutionsGroup)
})

solutionDesc.addEventListener("change", (e)=> {
    const validInput = checkSolutionDesc(checkSolution(solutionRadio),solutionRadio,solutionDesc)
    updateStyle(validInput, e.target)
})


function updateStyle (validChange, element) {
    if (validChange) {
        element.style.border="1px solid green"
    } else {
        element.style.border="1px solid red"
    }
}



/*

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const validations = validateForm()
    isValid(validations)



})

*/

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    isValid(validateForm())
})