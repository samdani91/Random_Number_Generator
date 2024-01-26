function handleInput() {
    let count = parseInt(document.getElementById("cnt").value);

    if (isNaN(count) || count <= 0) {
        document.getElementById("warning").innerText = "Positive Integers Only";
        document.getElementById("warning").style.color = "red";
        document.getElementById("warning").style.background = "white";
        document.getElementById("warning").style.marginLeft = "10px";
        document.getElementById("result").textContent="";
        document.getElementById("duplicateLabel").style.display="none";
        document.getElementById("sortLabel").style.display="none";
    } else {
        if(count>1){
            document.getElementById("duplicateLabel").style.display="block";
            document.getElementById("sortLabel").style.display="block";
        }else{
            document.getElementById("duplicateLabel").style.display="none";
            document.getElementById("sortLabel").style.display="none";
        }
        document.getElementById("warning").innerText = "";
    }
}

document.getElementById("cnt").addEventListener("input", handleInput);

function noDuplicate(mx, mn, cnt, whichSort) {
    var randNum = [];
    
    if (cnt > (mx - mn + 1)) {
        document.getElementById("result").textContent = `The range is too small to generate ${cnt} unique numbers`;
        return;
    }

    if (!isNaN(mn) && !isNaN(mx) && !(mx < mn)) {
        var res = "";

        while (randNum.length != cnt) {
            let num = Math.floor(Math.random() * (mx - mn + 1)) + mn;
            if (!randNum.includes(num)) {
                randNum.push(num);
            }
        }

        if (whichSort === "as") {
            randNum.sort(function(a, b) {
                return a - b;
            });
        } else if (whichSort === "ds") {
            randNum.sort(function(a, b) {
                return b - a;
            });
        }

        res = randNum.join(', ');

        document.getElementById("result").textContent = res;
    } else {
        document.getElementById("result").textContent = "Invalid Range!";
    }
}

function randomNumber(){
    let cntValue = document.getElementById("cnt").value;
    if (cntValue === "" || isNaN(parseInt(cntValue)) || parseInt(cntValue) <= 0) {
        document.getElementById("warning").innerText = "Positive Integers Only";
        document.getElementById("warning").style.color = "red";
        document.getElementById("warning").style.background = "white";
        document.getElementById("warning").style.marginLeft = "10px";
        document.getElementById("result").textContent="";
        document.getElementById("duplicateLabel").style.display="none";
        document.getElementById("sortLabel").style.display="none";
        return;
    } else {
        document.getElementById("warning").innerText = "";
    }

    let mx = document.getElementById("max").value;
    let mn = document.getElementById("min").value;
    let allowDuplication = document.querySelector('input[name="ques"]:checked').value === "no";
    var whichSort;
    if(document.querySelector('input[name="qs"]:checked').value === "as"){
        whichSort="as";
    }else if(document.querySelector('input[name="qs"]:checked').value === "ds"){
        whichSort="ds";
    }else{
        whichSort="no";
    }

    mx = parseInt(mx);
    mn = parseInt(mn);
    cntValue = parseInt(cntValue);

    if(allowDuplication){
        noDuplicate(mx,mn,cntValue,whichSort);
        return;
    }

    var randNum = [];

    if (!isNaN(mn) && !isNaN(mx) && !(mx<mn)){
        var res="";
        for(var i=1;i<=cntValue;i++){
            let num = Math.floor(Math.random() * (mx-mn+1)) + mn;
            if(!allowDuplication)randNum.push(num);
            else{
                if(!randNum.includes(num)){
                    randNum.push(num);
                }
            }
        }

        if (whichSort === "as") {
            randNum.sort(function(a, b) {
                return a - b;
            });
        } else if (whichSort === "ds") {
            randNum.sort(function(a, b) {
                return b - a;
            });
        }
        res=randNum.join(', ');
        
        document.getElementById("result").textContent=res;
    }else{
        document.getElementById("result").textContent="Invalid Range!"
    }

}

function reset(){
    document.getElementById("min").value="";
    document.getElementById("max").value="";
    document.getElementById("cnt").value="";
    document.getElementById("result").textContent="";
    document.getElementById("warning").innerText = "";
    document.getElementById("duplicateLabel").style.display="none";
    document.getElementById("sortLabel").style.display="none";
}